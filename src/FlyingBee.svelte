<script>
    import Bee from 'carbon-pictograms-svelte/lib/Bee.svelte';
    import {fly} from 'svelte/transition';

    function random(min, max) {
        return Math.random() * (max - min) + min;
    }
</script>
<div in:fly={{y: random(-1000, 1000), x: random(-1000, 1000), duration: 1000}}>
    <Bee />
</div>
