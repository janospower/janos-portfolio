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
			I built this portfolio site from scratch to make it as light-weight as possible. <br />
			I don't place cookies or clog your bandwidth with unnecessarily large files. <br />
			The carbon footprint of your visit is estimated to be
			<a
				href="https://www.websitecarbon.com/website/janospauer-com/"
				target="_blank"
				alt="Carbon footprint assessment of janospauer.com">less than 88% of pages visited</a
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
	}
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-bottom: var(--spacing-03);
	}
	h4 {
		margin-top: var(--spacing-04);
		margin-bottom: var(--spacing-03);
	}
	p {
		font-size: var(--font-size--large);
		line-height: 130%;
	}

	@media (max-width: 667px) {
		aside {
			display: none;
		}
	}
</style>
