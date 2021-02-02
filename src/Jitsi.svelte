<script lang="ts">
    import {onDestroy, onMount} from "svelte";
    import {slide} from 'svelte/transition'
    import copy from 'clipboard-copy';
    import {CopyButton, Loading, ToastNotification} from "carbon-components-svelte";
    import {navigate} from 'svelte-routing';
    import {name} from './stores';

    export let roomName: string;
    export let configOverwrite: object = {};
    export let interfaceConfigOverwrite: object = {};
    export let onEnd: () => void;
    export let onLoad: (api: JitsiMeetExternalAPI) => void;
    let loading = true;
    let subject = 'Loading';
    let messages = [];

    const joinUrl = window.location.origin + '/join/' + roomName;

    if (!$name || $name.length === 0) {
        navigate(joinUrl);
    }

    let api;
    onMount(() => {
        api = new JitsiMeetExternalAPI('meet.jit.si', {
            roomName: 'WeBeeNar/' + roomName,
            width: '100%',
            height: '100%',
            parentNode: document.getElementById('jitsiContainer'),
            userInfo: {
                displayName: $name
            },
            // https://github.com/jitsi/jitsi-meet/blob/master/config.js
            configOverwrite: {
                enableWelcomePage: false,
                prejoinPageEnabled: false,
                disableDeepLinking: true,
                disableInviteFunctions: true,
                hideParticipantsStats: true,
                requireDisplayName: true,
                notifications: [
                    'notify.disconnected',
                    'notify.raisedHand'
                ],
                ...configOverwrite
            },
            // https://github.com/jitsi/jitsi-meet/blob/master/interface_config.js
            interfaceConfigOverwrite: {
                APP_NAME: 'WeBeeNar',
                DEFAULT_BACKGROUND: '#fff',
                MOBILE_APP_PROMO: false,
                HIDE_INVITE_MORE_HEADER: true,
                DISPLAY_WELCOME_FOOTER: false,
                DEFAULT_REMOTE_DISPLAY_NAME: 'Fellow bee',
                GENERATE_ROOMNAMES_ON_WELCOME_PAGE: false,
                SHOW_CHROME_EXTENSION_BANNER: false,
                INITIAL_TOOLBAR_TIMEOUT: 0,
                TOOLBAR_ALWAYS_VISIBLE: true,
                ...interfaceConfigOverwrite
            },
            onload: function (event) {
                loading = false;
                if (onLoad) {
                    onLoad(api);
                }

                api.addEventListener('subjectChange', event => subject = event.subject);

                setTimeout(function () {
                    api.addEventListener('incomingMessage', event => messages = [...messages, {time: new Date().getTime(), ...event}])
                }, 2500);

                if (onEnd) {
                    api.addEventListener('participantKickedOut', event => {
                        if (event.kicked.local) {
                            onEnd();
                        }
                    })
                    api.addEventListener('videoConferenceLeft', () => {
                        onEnd();
                        api.removeEventListener('videoConferenceLeft', this);
                    });
                }
            }
        });
    });

    onDestroy(() => {
        api.dispose();
    });
</script>

<style>
    #jitsiContainer {
        width: 100%;
        height: 100%;
    }
</style>

<svelte:head>
    <title>{subject} | WeBeeNar free webinars for everyone!</title>
</svelte:head>

{#if loading}
    <Loading description="Connecting..." />
{/if}
<div id="jitsiContainer" style="position: relative;">
    <CopyButton style="position: absolute; right: 12.5%" feedback="Invite link copied to clipboard!" iconDescription="Copy invite link" on:click={copy.bind(this, joinUrl)} />
    <div style="position: absolute; bottom: 0; right: 0">
        {#each messages as message (message.time)}
            <div in:slide>
                <ToastNotification kind="info" timeout="2500" title={message.nick} subtitle={message.message} caption="" />
            </div>
        {/each}
    </div>
</div>
