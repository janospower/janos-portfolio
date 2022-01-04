<script>
	import { onMount } from 'svelte';
	import IntersectionObserver from 'svelte-intersection-observer';
	import { browser } from '$app/env';
	import Case from './case.svelte';

	export let intersecting;
	$: if (browser) document.body.classList.toggle('light', intersecting);

	let cases;
	let caseOne;

	function scrollToNext(direction) {
		let current = cases.scrollLeft;
		let increment = caseOne.getBoundingClientRect().width * direction;
		cases.scrollTo({
			top: 0,
			left: current + increment,
			behavior: 'smooth'
		});
	}
</script>

<IntersectionObserver element={cases} bind:intersecting>
	<p class="text--huge">Some of my projects</p>
	<button on:click={() => scrollToNext(-1)}> Scroll to previous </button>
	<button on:click={() => scrollToNext(1)}> Scroll to next </button>
	<div class="cases" bind:this={cases}>
		<article class="case" bind:this={caseOne}><Case /></article>
		<article class="case"><Case /></article>
		<article class="case"><Case /></article>
		<article class="case"><Case /></article>
		<article class="case"><Case /></article>
	</div>
</IntersectionObserver>

<style lang="scss">
	$case-width: calc(var(--page-width-inner) + (100vw - var(--page-width-inner)) / 3);

	.cases,
	.text--huge {
		grid-column-start: 1;
		grid-column-end: 9;
	}
	@media (min-width: 667px) and (pointer: fine) {
		.cases {
			margin: 0 calc((100vw - var(--page-width-inner)) / -2);
			width: 100vw;
			grid-column-start: 1;
			grid-column-end: 9;
			padding: var(--spacing-05) 0 var(--spacing-02) calc((100vw - var(--page-width-inner)) / 2);
			scroll-snap-type: x mandatory;
			overscroll-behavior-x: contain;
			overflow-x: scroll;
			height: 100vh;
			max-height: 800px;
			white-space: nowrap;
			display: flex;
		}
		.case {
			height: 100%;
			min-width: var(--page-width-inner);
			max-width: var(--page-width-inner);
			scroll-snap-align: center;
		}
		.case:not(:last-child) {
			margin-right: calc((100vw - var(--page-width-inner)) / 3);
		}
		.case:last-child {
			padding-right: calc((100vw - var(--page-width-inner)) / 2);
			min-width: calc(var(--page-width-inner) + ((100vw - var(--page-width-inner)) / 2));
		}
	}
</style>
