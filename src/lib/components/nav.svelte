<nav>
	<a href="/">Portfolio • Janos Pauer</a>
	<button>Message Janos</button>
</nav>

<style lang="scss">
	nav {
		position: fixed;
		top: 0;
		width: 100%;
		height: var(--spacing-10);
		background-color: hsla(0, 0%, 100%, 0.9);
		mask: linear-gradient(
			to bottom,
			hsla(0, 0%, 0%, 1) 0%,
			hsla(0, 0%, 0%, 1) 20%,
			hsla(0, 0%, 0%, 0) 100%
		);
	}

	@supports ((-webkit-backdrop-filter: none) or (backdrop-filter: none)) {
		nav {
			background-color: transparent;
			backdrop-filter: brightness(90%) saturate(150%) blur(4px);
		}
	}

	main {
		max-width: 500px;
		font-family: sans-serif;
		margin: 640px auto;
		border: 1px solid black;
		padding: 32px;
		line-height: 1.5rem;
	}

	main img {
		max-width: 100%;
	}
</style>
