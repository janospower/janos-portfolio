<script>
	import { onMount } from 'svelte';
	export let gridColumnStart = '1';
	export let gridColumnEnd = '9';
	export let sticky = true;
	export let verticalScroll = 0;
	let hidden = true;

	$: console.log(verticalScroll);

	onMount(() => {
		hidden = false;
	});
</script>

<div
	class="wrapper"
	class:sticky-wrapper={sticky}
	style="grid-column-start:{gridColumnStart}; grid-column-end:{gridColumnEnd};"
>
	<button
		on:click={() => {
			hidden = !hidden;
		}}>clicky</button
	>
	<section class="fading" class:sticky class:hidden>
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
