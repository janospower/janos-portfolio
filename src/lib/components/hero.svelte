<script>
    import { onMount } from 'svelte';
    import { createScene } from "../js/scene";
    let el;
    onMount(() => {
        createScene(el)
    });
</script>

<div class="hero" id="hero">
    <canvas bind:this={el}>
    <div class="placeholder"></div>
    </canvas>
</div>

<style lang="scss">
    .hero {
        width: 80%;
        margin: 0 auto;
        margin-bottom: var(--spacing-08);
    }
    .placeholder {
        width: 410px;
        height: 410px;
        background-color: black;
        border-radius: 50%;
    }
</style>