<script>
	import { onMount } from 'svelte';
	import IntersectionObserver from 'svelte-intersection-observer';

	export let gridColumnStart = '1';
	export let gridColumnEnd = '9';
	export let sticky = true;
	export let verticalScroll = 0;
	export let scrollTrigger = -500;
	export let delay = 0;
	export let observeIntersection = false;

	let mounted = false;

	let element;

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

{#if observeIntersection}
	<IntersectionObserver
		{element}
		on:observe={(e) => {
			firstRowHidden = !e.detail.isIntersecting;
			secondRowHidden = !e.detail.isIntersecting;
		}}
	>
		<div
			class="wrapper"
			class:sticky-wrapper={sticky}
			style="grid-column-start:{gridColumnStart}; grid-column-end:{gridColumnEnd};"
			bind:this={element}
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
	</IntersectionObserver>
{:else}
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
{/if}

<style lang="scss">
	.sticky-wrapper {
		min-height: 1500px;
	}
	.sticky {
		position: sticky;
		top: calc(50vh - var(--spacing-08));
		padding-bottom: calc(50vh - var(--spacing-08));
		z-index: 0;
	}
</style>
