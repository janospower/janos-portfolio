<span>
	<slot />
</span>

<style lang="scss">
	span {
		// display: inline-block;
		background-color: var(--color-accent--teal--opaque);
		color: var(--color-accent--teal--opaque);

		background-image: var(--gradient-volt-teal);

		background-size: 200%;
		background-repeat: repeat;

		background-clip: text;
		-webkit-text-fill-color: transparent;

		animation: gradient 10s ease infinite;

		border: 6px solid;
		border-image: url('/images/selection-border.svg');
		border-image-slice: 3;
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
