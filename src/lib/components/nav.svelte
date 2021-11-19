<script>
	import Button from './button.svelte';
</script>

<div class="navigation__background" />
<nav>
	<a href="/">Portfolio • Janos Pauer</a>
	<Button>Send a message</Button>
</nav>

<style lang="scss">
	nav,
	.navigation__background {
		position: fixed;
		top: 0;
		width: 100%;
		height: var(--spacing-10);
	}
	nav {
		padding: var(--spacing-05);
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
</style>
