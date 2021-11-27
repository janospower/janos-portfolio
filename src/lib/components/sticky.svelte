<script>
    export let gridColumnStart = "1"
    export let gridColumnEnd = "9"
    export let sticky = true;
</script>

<div 
    class="sticky-wrapper"
    style="grid-column-start:{gridColumnStart}; grid-column-end:{gridColumnEnd};" 
>
    <section 
        
        class:sticky={sticky}
    >
        <slot></slot>
    </section>
</div>

<style lang="scss">
    .sticky {
        position: sticky;
        top: var(--spacing-10);
        z-index: 0;
    }
</style>