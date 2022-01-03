<script>
	import IntersectionObserver from 'svelte-intersection-observer';
	import { browser } from '$app/env';
	import Case from './case.svelte';

	export let intersecting;
	$: if (browser) document.body.classList.toggle('light', intersecting);

	let element;

	$: offset = 0;

	function convertScroll() {
		if (intersecting) {
			offset = element.getBoundingClientRect().top <= 0 ? element.getBoundingClientRect().top : 0;
		}
	}
</script>

<svelte:window on:scroll={() => convertScroll()} />

<IntersectionObserver {element} bind:intersecting>
	<div class="cases-wrapper" bind:this={element}>
		<p class="text--huge mobile-only">Cases</p>
		<div class="cases">
			<div class="articles" style="transform: translateX({offset}px)">
				<article class="case"><Case /></article>
				<article class="case"><Case /></article>
				<article class="case"><Case /></article>
				<article class="case"><Case /></article>
				<article class="case"><Case /></article>
			</div>
		</div>
	</div>
</IntersectionObserver>

<style lang="scss">
	$case-width: calc(var(--page-width-inner) + (100vw - var(--page-width-inner)) / 3);

	.cases-wrapper {
		grid-column-start: 1;
		grid-column-end: 9;
	}

	.case {
		margin-bottom: var(--spacing-10);
	}

	@media (min-width: 1024px) and (pointer: fine) {
		.mobile-only {
			display: none;
		}
		.cases-wrapper {
			height: calc(4 * $case-width + 100vh - var(--spacing-03));
			margin: 0 calc((100vw - var(--page-width-inner)) / -2);
			width: 100vw;
			grid-column-start: 1;
			grid-column-end: 9;
		}
		.cases {
			padding-top: var(--spacing-12);
			padding-bottom: var(--spacing-06);
			overflow: hidden;
			height: 100vh;
			width: 100%;
			position: sticky;
			top: 0;
		}
		.articles {
			padding: 0 calc((100vw - var(--page-width-inner)) / 2);
			width: 100%;
			height: 100%;
			white-space: nowrap;
			display: flex;
		}
		.case {
			height: 100%;
			max-height: 800px;
			min-width: var(--page-width-inner);
			max-width: var(--page-width-inner);
			margin-bottom: 0;
		}
		.case:not(:last-child) {
			margin-right: calc((100vw - var(--page-width-inner)) / 3);
		}
	}

	@media (max-width: 1024px) {
		.articles {
			transform: translateX(0px) !important;
		}
		.cases-wrapper {
			grid-column-start: 1;
			grid-column-end: 9;
		}
	}
</style>
