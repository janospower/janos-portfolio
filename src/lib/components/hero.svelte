<script>
    import { onMount } from 'svelte';
    import { createScene } from "../js/scene";
    let el;
    onMount(() => {
        createScene(el)
    });
</script>

<canvas bind:this={el}></canvas>

<div class="hero" id="hero">

</div>

<style lang="scss">
    .hero {
        width: 80%;
        margin: 0 auto;
        background-color: black;
        border-radius: 50%;
        height: calc(var(--page-width) / 8 * 4 * .8);
        margin-bottom: var(--spacing-08);
    }
</style>