<script>
	import Button from './button.svelte';
	import PaperPlane from '../icons/paperplane.svelte';
</script>

<div class="navigation__background" />
<nav>
	<h2><a href="/">Portfolio • Janos Pauer</a></h2>
	<Button>
		<PaperPlane slot="icon" size="small" circle />
		<span slot="label">Send a message</span>
	</Button>
</nav>

<style lang="scss">
	.navigation__background {
		position: fixed;
		top: 0;
		width: 100%;
		height: var(--spacing-10);
	}
	nav :global(.button) {
		position: fixed;
		top: var(--spacing-05);
		right: var(--spacing-05);
	}
	nav h2 {
		position: fixed;
		top: var(--spacing-05);
		left: var(--spacing-05);
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
			left: var(--spacing-04);
			bottom: var(--spacing-04);
			top: auto;
		}
		nav {
			padding: var(--spacing-04);
			& h2 {
				position: static;
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
