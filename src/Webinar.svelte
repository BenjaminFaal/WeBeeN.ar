<script lang="ts">
    import {navigate} from 'svelte-routing';
    import Jitsi from "./Jitsi.svelte";

    export let roomName;

    const config = {};
    const interfaceConfig = {
        TOOLBAR_BUTTONS: [
            'microphone', 'camera', 'fullscreen', 'chat', 'raisehand', 'hangup',
            'fullscreen', 'fodeviceselection', 'hangup', 'raisehand', 'videoquality', 'filmstrip', 'stats', 'shortcuts',
            'tileview', 'videobackgroundblur'
        ]
    };
</script>

<Jitsi configOverwrite={config}
       interfaceConfigOverwrite={interfaceConfig}
       onEnd={navigate.bind(this, '/thankyou')}
       roomName={roomName} />
