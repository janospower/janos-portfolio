<script>
	export let gridColumnStart = '1';
	export let gridColumnEnd = '9';
	export let sticky = true;
	export let verticalScroll = 0;

	$: console.log(verticalScroll);
</script>

<div
	class="wrapper"
	class:sticky-wrapper={sticky}
	style="grid-column-start:{gridColumnStart}; grid-column-end:{gridColumnEnd};"
>
	<section class:sticky>
		<slot />
	</section>
</div>

<style lang="scss">
	.sticky-wrapper {
		min-height: 200vh;
	}
	.sticky {
		position: sticky;
		top: calc(50vh - var(--spacing-08));
		padding-bottom: calc(50vh - var(--spacing-08));
		z-index: 0;
	}
</style>
