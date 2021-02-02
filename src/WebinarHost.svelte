<script lang="ts">
    import {navigate} from 'svelte-routing';
    import Jitsi from "./Jitsi.svelte";
    import {title} from "./stores";

    export let roomName;

    const config = {
        subject: $title
    };
    const interfaceConfig = {
        TOOLBAR_BUTTONS: [
            'microphone', 'camera', 'desktop', 'fullscreen', 'chat', 'raisehand', 'hangup',
            'fullscreen', 'fodeviceselection', 'hangup', 'raisehand', 'videoquality', 'filmstrip', 'stats', 'shortcuts',
            'tileview', 'videobackgroundblur', 'mute-everyone'
        ]
    };
</script>

<Jitsi configOverwrite={config}
       interfaceConfigOverwrite={interfaceConfig}
       onEnd={navigate.bind(this, '/thankyou')}
       roomName={roomName} />
