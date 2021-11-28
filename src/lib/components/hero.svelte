<script>
    import { onMount } from 'svelte';
    import { createScene } from "../js/scene";
    let el;
    onMount(() => {
        createScene(el)
    });
</script>

<div class="hero-wrapper">
    <div class="hero" id="hero">
        <canvas bind:this={el}>
        <div class="placeholder"></div>
        </canvas>
    </div>
</div>

<style lang="scss">
    .hero-wrapper {
        margin-bottom: var(--spacing-08);
    }
    .hero {
        width: calc(410px + 300px);
        margin: 0 auto;
        background: radial-gradient(closest-side, hsla(331, 100%, 70%, 30%) 200px, hsla(310, 100%, 50%, 10%) 215px, hsla(280, 100%, 50%, 0%) 100%);
        padding: 150px;
        margin:-150px;
    }
    .placeholder {
        width: 410px;
        height: 410px;
        background-color: black;
        border-radius: 50%;
    }
</style>