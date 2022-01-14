<script>
	import { onMount } from 'svelte';
	import IntersectionObserver from 'svelte-intersection-observer';
	import { browser } from '$app/env';
	import Case from './case.svelte';
	import Button from './button.svelte';
	import ArrowLeft from '../icons/arrow-left.svelte';
	import ArrowRight from '../icons/arrow-right.svelte';
	import { fly } from 'svelte/transition';

	export let intersecting;
	$: if (browser) document.body.classList.toggle('light', intersecting);

	let cases;
	let caseOne;

	let first = true;
	let last = false;

	function scrollToNext(direction) {
		let current = cases.scrollLeft;
		let increment = caseOne.getBoundingClientRect().width * direction;
		cases.scrollTo({
			top: 0,
			left: current + increment,
			behavior: 'smooth'
		});
		checkScroll();
	}

	function checkScroll() {
		first = cases.scrollLeft > 0 ? false : true;
		last = cases.scrollWidth - (cases.scrollLeft + cases.clientWidth) > 0 ? false : true;
	}

	onMount(() => {
		setInterval(() => {
			checkScroll();
		}, 500);
	});
</script>

<IntersectionObserver element={cases} bind:intersecting>
	<div class="grid"><h3 class="text--huge">Some of my projects</h3></div>
	<div class="slider">
		<div class="cases" bind:this={cases}>
			<article class="case" bind:this={caseOne}>
				<Case
					title="Mapping Design System"
					date="2022"
					tags={[
						{ name: 'Design System', certified: false },
						{ name: 'UI / UX Design', certified: false },
						{ name: 'Project lead', certified: false },
						{ name: 'Mobile', certified: false },
						{ name: 'Web', certified: false },
						{ name: 'Mobility', certified: false },
						{ name: 'Development', certified: false }
					]}
					body="As a team lead, I helped refactor and scale a design system used by hundreds of product designers and developers to multiple target platforms over the course of a full year.</br> 
					I was heavily involved in all aspects of growing and maintaining the various component and pattern libraries such as:
					<ul>
						<li>Setting up a robust architecture of interdependent libraries;</li>
						<li>Creating and maintaining semantic design tokens in line with the brand;</li>
						<li>Building and documenting complex, theme-able component variant groups;</li>
						<li>Enforcing acceptance criteria including WCAG accessibility criteria;</li>
						<li>Inspecting and reviewing implementation in close collaboration with a team of developers;</li>
						<li>Educating a large, distributed design team about features and best practices in webinars, posts and routine meetings;</li>
						<li>Building custom Figma plugins to address unique challenges;</li>
						<li>Managing additional designers who contribute to the system;</li>
					</ul>
					The actual visual artefacts as well as the identity of the client are confidential."
				/>
			</article>
			<article class="case">
				<Case
					title="baupal"
					date="2020"
					tags={[
						{ name: 'Property Technology', certified: false },
						{ name: 'UI / UX Design', certified: false },
						{ name: 'Design Sprint', certified: false },
						{ name: 'Web', certified: false },
						{ name: 'Prototype', certified: false }
					]}
					body="baupal created a platform which empowers home-owners by simplifying otherwise overly bureaucratic and expensive processes.</br>
			
			Together with a design strategist, I helped our client traverse the entire design process in less than aweek.</br> 
			
			My role was to assist in facilitating various workshops and generating ideas that would best serve their users, while also turning our them into a high fidelity prototype. The prototype was used for usability testing and consequently iterated, in order to reflect ourlearnings and insights.</br></br>
			&ldquo;Having this clickable prototype helped us to identify the full potential of our product and showed us how we could solve possible weaknesses on our journey.&rdquo;</br>
			— Justus Menten, Co-founder and CEO of baupal"
				/>
			</article>
			<article class="case">
				<Case
					title="Figma Plugins"
					date="2022"
					tags={[
						{ name: 'Development', certified: false },
						{ name: 'JavaScript', certified: false },
						{ name: 'Svelte', certified: false },
						{ name: 'UI / UX Design', certified: false },
						{ name: 'Personal Project', certified: false }
					]}
					body="Extending the functionality of the tool I use professionally on a daily basis has grown to become a passion of mine. I give back to the community by identifying and filling gaps in the existing ecosystem, all while learning and practicing interesting technologies.</br>

My plugins address niche topics that empower their users to efficiently craft designs that are polished in every detail."
				/>
			</article>
			<article class="case">
				<Case
					title="Digital Anti-Depressants"
					date="2020"
					tags={[
						{ name: 'UI / UX Design', certified: false },
						{ name: 'Healthcare', certified: false },
						{ name: 'Branding', certified: false },
						{ name: 'Mobile', certified: false },
						{ name: 'Data Visualization', certified: false },
						{ name: 'Client Communication', certified: false }
					]}
					body="In a small, cross-disciplinary team, we created an MVP to treat mental health conditions.</br>

The challenge was to package a very technical solution, which had been used in elaborate trials into a state-of-the-art mobile experience that helps users build habits and improve their wellbeing.</br>

To comply with regulatory and scientific constraints, we needed to help our users understand medical concepts, make exhaustive surveys become both engaging and digestible, and visualize trends.</br>

In addition to work on the product itself, I expanded their visual brand and identity for the context of a mobile app.</br></br>

The actual visual artefacts as well as the identity of the client are confidential."
				/>
			</article>
			<article class="case">
				<Case
					title="Virtual Assistant"
					date="2020"
					tags={[
						{ name: 'Thesis', certified: false },
						{ name: 'UI / UX Design', certified: false },
						{ name: 'Voice UI', certified: false },
						{ name: 'High Fidelity Prototype', certified: false },
						{ name: 'User Research', certified: false },
						{ name: 'Vue', certified: false },
						{ name: 'Animation', certified: false },
						{ name: 'Gender', certified: false }
					]}
					body="University project exploring gender-neutral, multi-modal conversational user interfaces.</br> 
					Feature concepts were developed based on semi-structured interviews and extensive literature research as well as benchmarking of current best practivces.</br>
					The final prototype was built using vue.js rather than existing no-code prototyping tools to implement functional voice interactions and visual details like spring animations and supperelliptical corner radii."
				/>
			</article>
		</div>
		<div class="button-container button-container--previous">
			{#if !first}
				<div transition:fly={{ y: 32, duration: 500 }}>
					<Button on:message={() => scrollToNext(-1)}>
						<ArrowLeft slot="icon" size="medium" />
					</Button>
				</div>
			{/if}
		</div>
		<div class="button-container button-container--next">
			{#if !last}
				<div transition:fly={{ y: 32, duration: 500 }}>
					<Button on:message={() => scrollToNext(1)}>
						<ArrowRight slot="icon" size="medium" />
					</Button>
				</div>
			{/if}
		</div>
	</div>
</IntersectionObserver>

<style lang="scss">
	$case-width: calc(var(--page-width-inner) + (100vw - var(--page-width-inner)) / 3);

	h3 {
		grid-column-start: 1;
		grid-column-end: 9;
	}

	.slider {
		position: relative;
		width: 100vw;
		height: 100vh;
		max-height: min(800px, calc(100vh - var(--spacing-11)));
		margin-top: var(--spacing-05);
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
