<script lang="ts">
    import {Route, Router} from 'svelte-routing';

    import Home from "./Home.svelte";
    import Webinar from "./Webinar.svelte";
    import WebinarHost from "./WebinarHost.svelte";
    import WebinarJoin from "./Join.svelte";
    import ThankYou from "./ThankYou.svelte";
</script>

<Router>
    <Route path="/" component={Home} />
    <Route path="/host/:roomName" let:params>
        <WebinarHost roomName="{params.roomName}" />
    </Route>
    <Route path="/join/:roomName" let:params>
        <WebinarJoin roomName="{params.roomName}" />
    </Route>
    <Route path="/webinar/:roomName" let:params>
        <Webinar roomName="{params.roomName}" />
    </Route>
    <Route path="/thankyou" let:params>
        <ThankYou />
    </Route>
</Router>
