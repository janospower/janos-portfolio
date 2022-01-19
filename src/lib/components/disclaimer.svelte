<script>
	import { onMount } from 'svelte';
	import Button from './button.svelte';
	import Leaf from '../icons/leaf.svelte';

	let disclaimerIsHidden = true;

	onMount(() => {
		setTimeout(() => {
			disclaimerIsHidden = false;
		}, 7000);
	});
</script>

<aside class:hidden={disclaimerIsHidden} class="disclaimer fading">
	<div class="content">
		<Leaf />
		<h4>No unnecessary data collected!</h4>
		<p>
			I built this site using server-side rendering to make it as light-weight as possible and I
			don't serve any cookies or other tracking technology.
		</p>
		<p>
			The carbon footprint of your visit is estimated to be
			<a
				href="https://www.websitecarbon.com/website/janospauer-com/"
				target="_blank"
				alt="Carbon footprint assessment of janospauer.com">cleaner than 88% of pages tested</a
			>.
		</p>
	</div>

	<Button
		variant="primary"
		fullwidth={true}
		link="/"
		on:message={() => {
			disclaimerIsHidden = true;
		}}
		preventDefault={true}
	>
		<span slot="label">Close</span>
	</Button>
</aside>

<style lang="scss">
	a {
		color: var(--color-accent--blue--opaque);
	}

	aside {
		width: 375px;
		position: fixed;
		bottom: var(--spacing-05);
		right: var(--spacing-05);
		background-color: var(--color-neutral--800);
		padding: var(--spacing-05);
		padding-top: var(--spacing-06);
		clip-path: var(--squircle);
		font-size: var(--font-size--large);
		line-height: 130%;
	}
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	h4 {
		margin-top: var(--spacing-04);
		margin-bottom: var(--spacing-03);
	}

	p {
		margin-bottom: var(--spacing-03);
	}

	@media (max-width: 667px) {
		aside {
			display: none;
		}
	}
</style>
