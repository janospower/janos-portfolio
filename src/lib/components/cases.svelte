<script>
	import IntersectionObserver from 'svelte-intersection-observer';
	import { browser } from '$app/env';

	export let intersecting;
	$: if (browser) document.body.classList.toggle('light', intersecting);

	let element;

	$: offset = 0;

	function convertScroll() {
		offset = element.getBoundingClientRect().top <= 0 ? element.getBoundingClientRect().top : 0;
	}
</script>

<svelte:window on:scroll={() => convertScroll()} />

<IntersectionObserver {element} bind:intersecting>
	<div class="cases-wrapper" bind:this={element}>
		<div class="cases">
			<div class="articles" style="transform: translateX({offset}px)">
				<article class="case">article</article>
				<article class="case">article</article>
				<article class="case">article</article>
				<article class="case">article</article>
				<article class="case">article</article>
			</div>
		</div>
	</div>
</IntersectionObserver>

<style lang="scss">
	$case-width: calc(
		var(--page-width-inner) + ((100vw - var(--page-width-inner)) / 2) - var(--spacing-08)
	);
	@media (min-width: 667px) and (pointer: fine) {
		.cases-wrapper {
			height: calc((100vw - var(--page-width)) + 5 * $case-width);
			margin: 0 calc((100vw - var(--page-width-inner)) / -2);
			width: 100vw;
			grid-column-start: 1;
			grid-column-end: 9;
		}
		.cases {
			padding-top: var(--spacing-11);
			padding-left: calc((100vw - var(--page-width-inner)) / 2);
			padding-right: calc((100vw - var(--page-width-inner)) / 2);
			padding-bottom: var(--spacing-06);
			overflow: hidden;
			height: 100vh;
			width: 100%;
			position: sticky;
			top: 0;
		}
		.articles {
			width: 100%;
			height: 100%;
			white-space: nowrap;
			display: flex;
		}
		.case {
			border: 1px solid red;
			height: 100%;
			min-width: var(--page-width-inner);
			max-width: var(--page-width-inner);
		}
		.case:not(:last-child) {
			margin-right: calc(((100vw - var(--page-width-inner)) / 2) - var(--spacing-08));
		}
	}
</style>
