<script>
	import Button from './button.svelte';
	import PaperPlane from '../icons/paperplane.svelte';
</script>

<div class="navigation__background no-select" />
<nav class="main-navigation" aria-label="Main">
	<h2><a href="/">Portfolio • Janos Pauer</a></h2>
	<div class="cta">
		<Button cta={true}>
			<PaperPlane slot="icon" size="small" circle />
			<span slot="label">Send a message</span>
		</Button>
	</div>
</nav>

<style lang="scss">
	.navigation__background {
		position: fixed;
		top: 0;
		width: 100%;
		height: var(--spacing-12);
		z-index: 100;
	}

	nav {
		position: fixed;
		left: 0;
		right: 0;
		width: 100vw;
		top: var(--spacing-05);
		z-index: 101;
	}

	.cta {
		grid-column: 7/9;
		z-index: 101;
	}
	.cta :global(.button) {
		margin-left: auto;
	}

	nav h2 {
		padding-top: var(--spacing-02);
		grid-column: 1/3;
	}
	.navigation__background {
		background-color: var(--color-glass);
		mask: linear-gradient(
			to bottom,
			hsla(0, 0%, 0%, 1) 0%,
			hsla(0, 0%, 0%, 1) 20%,
			hsla(0, 0%, 0%, 0) 100%
		);
	}

	@supports ((-webkit-backdrop-filter: none) or (backdrop-filter: none)) {
		.navigation__background {
			background-color: transparent;
			backdrop-filter: brightness(66%) saturate(150%) blur(var(--blur-radius--medium));
		}
	}
	@media (max-width: 667px) {
		nav :global(.button) {
			position: fixed;
			left: var(--spacing-04);
			bottom: var(--spacing-04);
			top: auto;
			width: calc(100% - var(--spacing-04) * 2);
		}
		nav {
			position: static;
			padding: var(--spacing-04);
			& h2 {
				padding: 0;
			}
		}
		.navigation__background {
			bottom: 0;
			top: auto;
		}
		.navigation__background {
			mask: linear-gradient(
				to top,
				hsla(0, 0%, 0%, 1) 0%,
				hsla(0, 0%, 0%, 1) 20%,
				hsla(0, 0%, 0%, 0) 100%
			);
		}
	}
</style>
