<script>
	import { onMount } from 'svelte';
	import IntersectionObserver from 'svelte-intersection-observer';
	import { browser } from '$app/env';
	import Case from './case.svelte';
	import Button from './button.svelte';
	import ArrowLeft from '../icons/arrow-left.svelte';
	import ArrowRight from '../icons/arrow-right.svelte';

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
	<div class="slider">
		<div class="cases" bind:this={cases}>
			<article class="case" bind:this={caseOne}>
				<Case
					title="baupal"
					date="2020"
					tags={[
						{ name: 'Property Technology', certified: false },
						{ name: 'Property Technology', certified: false },
						{ name: 'Property Technology', certified: false },
						{ name: 'UI Design', certified: false },
						{ name: 'UX Design', certified: false },
						{ name: 'Design Sprint', certified: false },
						{ name: 'Web', certified: false }
					]}
					body="baupal created a platform which empowers home-owners by simplifying otherwise overly bureaucratic and expensive processes.

Together with a design strategist, I helped our client traverse the entire design process in less than a week. 

My role was to assist in facilitating various workshops and generating ideas that would best serve their users, while also turning our them into a high fidelity prototype. The prototype was used for usability testing and consequently iterated, in order to reflect our learnings and insights."
				/>
			</article>
			<article class="case">
				<Case />
			</article>
			<article class="case">
				<Case />
			</article>
			<article class="case">
				<Case />
			</article>
			<article class="case">
				<Case />
			</article>
		</div>
		<div class="button-container button-container--previous">
			<div>
				<Button on:message={() => scrollToNext(-1)}>
					<ArrowLeft slot="icon" size="medium" />
				</Button>
			</div>
		</div>
		<div class="button-container button-container--next">
			<div>
				<Button on:message={() => scrollToNext(1)}>
					<ArrowRight slot="icon" size="medium" />
				</Button>
			</div>
		</div>
	</div>
</IntersectionObserver>

<style lang="scss">
	$case-width: calc(var(--page-width-inner) + (100vw - var(--page-width-inner)) / 3);

	.cases,
	.text--huge {
		grid-column-start: 1;
		grid-column-end: 9;
	}
	@media (min-width: 667px) {
		.slider {
			margin: 0 calc((100vw - var(--page-width-inner)) / -2);
		}
	}
	.slider {
		position: relative;
		width: 100vw;
		height: 100vh;
		max-height: min(800px, calc(100vh - var(--spacing-11)));
		margin-top: var(--spacing-05);
		grid-column-start: 1;
		grid-column-end: 9;
	}
	.cases {
		width: 100%;
		height: 100%;
		padding: 0 0 var(--spacing-02) calc((100vw - var(--page-width-inner)) / 2);
		scroll-snap-type: x mandatory;
		overscroll-behavior-x: contain;
		overflow-x: scroll;
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
	.button-container {
		position: absolute;
		top: 0;
		bottom: 0;
		display: flex;
		align-items: center;
	}
	.button-container--previous {
		left: var(--spacing-03);
	}
	.button-container--next {
		right: var(--spacing-03);
	}
	@media (max-width: 667px) {
		.slider {
			margin: 0 calc(var(--spacing-03) * -1);
			margin-top: var(--spacing-05);
		}
		.button-container {
			display: none;
		}
		.cases {
			padding: 0 0 0 var(--spacing-03);
		}
		.cases::-webkit-scrollbar {
			display: none;
		}
		.cases {
			-ms-overflow-style: none; /* IE and Edge */
			scrollbar-width: none; /* Firefox */
		}
		.case {
			min-width: calc(100vw - var(--spacing-03) * 2);
			min-width: calc(100vw - var(--spacing-03) * 2);
		}
		.case:not(:last-child) {
			margin-right: calc(var(--spacing-03) / 2);
		}
		.case:last-child {
			padding-right: var(--spacing-03);
			min-width: calc((100vw - var(--spacing-03) * 2) + var(--spacing-03));
		}
	}
</style>
