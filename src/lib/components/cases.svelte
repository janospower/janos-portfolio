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
	<div class="grid">
		<div class="title">
			<h3 class="text--huge">Some of my projects</h3>
		</div>
	</div>
	<div class="slider">
		<div class="cases" bind:this={cases}>
			<article class="case" bind:this={caseOne}>
				<Case
					title="Scalable Design System"
					date="2022"
					tags={[
						'Design System',
						'UI / UX Design',
						'Project lead',
						'Mobile',
						'Web',
						'Mobility',
						'Development'
					]}
					imgURL="images/cases/design-system.webp"
					imgWidth={620}
					imgHeights={612}
					cover={true}
					body="As a team lead, I helped refactor and scale a design system used by hundreds of product designers and developers to multiple target platforms over the course of a full year.</br> 
					I was heavily involved in all aspects of growing and maintaining the various component and pattern libraries, including:
					<ul>
						<li>Setting up a robust architecture of interdependent libraries;</li>
						<li>Creating and maintaining semantic design tokens;</li>
						<li>Building and documenting complex, theme-able component variant groups;</li>
						<li>Enforcing WCAG accessibility criteria;</li>
						<li>Training and supporting a large, distributed design team about features and best practices;</li>
						<li>Building private Figma plugins to address unique challenges;</li>
					</ul>"
				/>
			</article>
			<article class="case">
				<Case
					title="Digital Anti-Depressants"
					date="2020"
					tags={[
						'UI / UX Design',
						'Healthcare',
						'Branding',
						'Mobile',
						'Data Visualization',
						'Client Communication'
					]}
					imgURL="images/cases/digital-antidepressants.webp"
					imgWidth={620}
					imgHeights={612}
					cover={true}
					body="In a small, cross-disciplinary team, we created an MVP to treat mental health conditions.</br>

The challenge was to package a very technical solution into a state-of-the-art mobile experience that helps users build habits and improve their wellbeing.</br>

To comply with regulatory and scientific constraints, we needed to help our users understand medical concepts, make exhaustive surveys become both engaging and digestible, and visualize trends.</br>

In addition to work on the product itself, I expanded their visual brand and identity for the context of a mobile app."
				/>
			</article>
			<article class="case">
				<Case
					title="Figma Plugins"
					date="2022"
					tags={['Development', 'JavaScript', 'Svelte', 'UI / UX Design', 'Personal Project']}
					imgURL="images/cases/figma-plugins.webp"
					imgWidth={620}
					imgHeights={612}
					cover={true}
					body="Extending the functionality of the tool I use professionally on a daily basis has grown to become a passion of mine. I give back to the community by identifying and filling gaps in the existing ecosystem, all while learning and practicing interesting technologies.</br>

My plugins address niche topics that empower their users to efficiently craft designs that are polished in every detail."
				/>
			</article>
			<article class="case">
				<Case
					title="baupal"
					date="2020"
					imgURL="images/cases/baupal.webp"
					imgWidth={556}
					imgHeights={548}
					tags={['Property Technology', 'UI / UX Design', 'Design Sprint', 'Web', 'Prototype']}
					body="baupal created a platform which empowers home-owners by simplifying otherwise overly bureaucratic and expensive processes.</br>
			
			Together with a design strategist, I helped our client traverse the entire design process in less than aweek.</br> 
			
			My role was to assist in facilitating various workshops and generating ideas that would best serve their users, while also turning our them into a high fidelity prototype. The prototype was used for usability testing and consequently iterated, in order to reflect ourlearnings and insights."
				/>
			</article>
			<article class="case">
				<Case
					title="Virtual Assistant"
					date="2020"
					tags={[
						'Thesis',
						'UI / UX Design',
						'Voice UI',
						'High Fidelity Prototype',
						'User Research',
						'Vue',
						'Animation',
						'Gender'
					]}
					imgURL="images/cases/virtual-assistant.webp"
					imgWidth={556}
					imgHeights={580}
					top={true}
					background="linear-gradient(to bottom right, hsla(344, 100%, 60%, 1), hsla(26, 100%, 51%, 1))"
					body="University project exploring gender-neutral, multi-modal conversational user interfaces.</br> 
					Feature concepts were developed based on semi-structured interviews and extensive literature research as well as benchmarking of current best practivces.</br>
					The final prototype was built using vue.js rather than existing no-code prototyping tools to implement functional voice interactions and visual details like spring animations and supperelliptical corner radii."
				/>
			</article>
		</div>
		<div class="button-container button-container--previous">
			<div class:hidden={first}>
				<Button on:message={() => scrollToNext(-1)}>
					<ArrowLeft slot="icon" size="medium" />
				</Button>
			</div>
		</div>
		<div class="button-container button-container--next">
			<div class:hidden={last}>
				<Button on:message={() => scrollToNext(1)}>
					<ArrowRight slot="icon" size="medium" />
				</Button>
			</div>
		</div>
	</div>
</IntersectionObserver>

<style lang="scss">
	h3 {
		grid-column-start: 1;
		grid-column-end: 9;
	}

	.title {
		grid-column: span 5;
	}

	.slider {
		position: relative;
		width: 100vw;
		height: calc(var(--page-width-inner) * 0.625);
		max-height: calc(var(--page-width-inner) * 0.625);
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
	.cases::-webkit-scrollbar {
		display: none;
	}
	@media (max-width: 667px) {
		.slider {
			margin-top: var(--spacing-05);
			height: auto;
			max-height: auto;
		}
		.button-container {
			display: none;
		}
		.cases {
			padding: 0 0 0 var(--spacing-05);
			-ms-overflow-style: none; /* IE and Edge */
			scrollbar-width: none; /* Firefox */
		}
		.case {
			min-width: calc(100vw - var(--spacing-05) * 2);
			width: calc(100vw - var(--spacing-05) * 2);
		}
		.case:not(:last-child) {
			margin-right: calc(var(--spacing-05) / 2);
		}
		.case:last-child {
			padding-right: var(--spacing-05);
			min-width: calc((100vw - var(--spacing-05) * 2) + var(--spacing-05));
		}
	}
</style>
