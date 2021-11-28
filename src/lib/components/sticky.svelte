<script>
	import { onMount } from 'svelte';
	export let gridColumnStart = '1';
	export let gridColumnEnd = '9';
	export let sticky = true;
	export let verticalScroll = 0;
	export let scrollTrigger = -500;
	export let delay = 0;
	let hidden = true;
	let mounted = false;

	let firstRowHidden = true;
	let secondRowHidden = true;

	$: if (verticalScroll >= scrollTrigger && mounted) {
		firstRowHidden = false;
	} else {
		firstRowHidden = true;
	}

	$: if (verticalScroll >= scrollTrigger + 100 && mounted) {
		secondRowHidden = false;
	} else {
		secondRowHidden = true;
	}

	onMount(() => {
		setTimeout(() => {
			mounted = true;
		}, delay);
	});
</script>

<div
	class="wrapper"
	class:sticky-wrapper={sticky}
	style="grid-column-start:{gridColumnStart}; grid-column-end:{gridColumnEnd};"
>
	<section class:sticky>
		<div class="fading" class:hidden={firstRowHidden}>
			<slot name="firstLine" />
		</div>

		{#if $$slots.secondLine}
			<div class="fading" class:hidden={secondRowHidden}>
				<slot name="secondLine" />
			</div>
		{/if}
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
