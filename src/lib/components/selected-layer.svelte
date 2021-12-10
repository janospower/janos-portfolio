<span>
	<slot />
</span>

<style lang="scss">
	span {
		/* Fallback: Set a background color. */
		background-color: var(--color-accent--on-dark--teal--opaque);

		/* Create the gradient. */
		background-image: var(--gradient-on-dark--volt-teal);

		background-size: 200%;
		background-repeat: repeat;

		background-clip: text;
		-webkit-text-fill-color: transparent;

		animation: gradient 10s ease infinite;
	}

	@keyframes gradient {
		0% {
			background-position-x: 0%;
		}
		50% {
			background-position-x: 100%;
		}
		100% {
			background-position-x: 0%;
		}
	}
</style>
