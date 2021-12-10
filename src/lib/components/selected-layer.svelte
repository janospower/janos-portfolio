<span>
	<slot />
</span>

<style lang="scss">
	span {
		/* Fallback: Set a background color. */
		background-color: #ca4246;

		/* Create the gradient. */
		background-image: linear-gradient(
			45deg,
			#ca4246 16.666%,
			#e16541 16.666%,
			#e16541 33.333%,
			#f18f43 33.333%,
			#f18f43 50%,
			#8b9862 50%,
			#8b9862 66.666%,
			#476098 66.666%,
			#476098 83.333%,
			#a7489b 83.333%
		);

		background-size: 100%;
		background-repeat: repeat;

		background-clip: text;
		-webkit-text-fill-color: transparent;

		animation: gradient 0.75s ease infinite;
	}

	@keyframes gradient {
		0% {
			background-size: 100%;
		}
		80% {
			background-size: 650%;
		}
		100% {
			background-size: 650%;
		}
	}
</style>
