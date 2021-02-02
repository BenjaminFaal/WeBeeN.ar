<script lang="ts">
    import {navigate} from 'svelte-routing';
    import {generateRoomWithoutSeparator} from '@jitsi/js-utils/random'

    import {Button, Column, Content, Form, FormGroup, Grid, Row, TextInput} from "carbon-components-svelte";
    import FlyingBee from "./FlyingBee.svelte";
    import {title, name} from "./stores";

    $: localStorage.setItem('title', $title);
    $: localStorage.setItem('name', $name);

    function start() {
        navigate('/host/' + generateRoomWithoutSeparator())
    }
</script>

<Content>
    <Grid>
        <Row>
            <Column>
                <h1>Welcome to WeBeeNar! </h1>
                <FlyingBee />
                <p>WeBeeNar free webinars for everyone!</p>

                <Form on:submit={start}>
                    <FormGroup>
                        <TextInput autofocus bind:value={$title} labelText="Title" placeholder="Enter title..." invalid={$title.length === 0} invalidText="Title cannot be empty" />
                    </FormGroup>
                    <FormGroup>
                        <TextInput bind:value={$name} labelText="Name" placeholder="Enter name..." invalid={$name.length === 0} invalidText="Name cannot be empty" />
                    </FormGroup>
                    <Button type="submit" disabled={$title.length === 0 || $name.length === 0} on:click={start}>Start webinar</Button>
                </Form>
            </Column>
        </Row>
    </Grid>
</Content>
