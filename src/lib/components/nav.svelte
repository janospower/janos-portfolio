<script>
	import Button from './button.svelte';
	import PaperPlane from '../icons/paperplane.svelte';
</script>

<div class="navigation__background" />
<nav>
	<a href="/">Portfolio • Janos Pauer</a>
	<Button>
		<PaperPlane slot="icon" />
		<span slot="label">Send a message</span>
	</Button>
</nav>

<style lang="scss">
	nav,
	.navigation__background {
		position: fixed;
		top: 0;
		width: 100%;
		height: var(--spacing-10);
		padding: var(--spacing-05);
	}
	nav {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
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
			backdrop-filter: brightness(66%) saturate(150%) blur(var(--blur-radius));
		}
	}
	@media (max-width: 667px) {
		nav,
		.navigation__background {
			bottom: 0;
			top: auto;
			padding: var(--spacing-04);
		}
		.navigation__background {
			mask: linear-gradient(
				to top,
				hsla(0, 0%, 0%, 1) 0%,
				hsla(0, 0%, 0%, 1) 20%,
				hsla(0, 0%, 0%, 0) 100%
			);
		}
		a {
			display: none;
		}
		:global(.button) {
			width: 100%;
		}
	}
</style>
