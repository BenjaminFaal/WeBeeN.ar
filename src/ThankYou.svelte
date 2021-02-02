<script lang="ts">
    import {Link} from 'svelte-routing';
    import {Button, Column, Content, Grid, Row} from "carbon-components-svelte";
    import FlyingBee from "./FlyingBee.svelte";
</script>

<Content>
    <Grid>
        <Row>
            <Column>
                <h1>Thank you for using WeBeeNar!</h1>
                <FlyingBee />
                <Link to="/">
                    <Button>Home</Button>
                </Link>
            </Column>
        </Row>
    </Grid>
</Content>
