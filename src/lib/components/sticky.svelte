<script>
    export let gridColumnStart = "1"
    export let gridColumnEnd = "9"
</script>

<section style="grid-column-start:{gridColumnStart}; grid-column-end:{gridColumnEnd};">
    <slot></slot>
</section>

<style lang="scss">
    section {
        position: sticky;
    }
</style>