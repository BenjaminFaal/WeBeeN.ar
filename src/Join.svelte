<script lang="ts">
    import {navigate} from 'svelte-routing';
    import {Button, Column, Content, Form, FormGroup, Grid, Row, TextInput} from "carbon-components-svelte";
    import {name} from "./stores";

    export let roomName;

    function join() {
        navigate('/webinar/' + roomName)
    }
</script>

<Content>
    <Grid>
        <Row>
            <Column>
                <h1>Join {roomName}</h1>
                <Form on:submit={join}>
                    <FormGroup>
                        <TextInput bind:value={$name} labelText="Name" placeholder="Enter name..." invalid={$name.length === 0} invalidText="Name cannot be empty" />
                    </FormGroup>
                    <Button type="submit" disabled={$name.length === 0} on:click={join}>Join webinar</Button>
                </Form>
            </Column>
        </Row>
    </Grid>
</Content>
