<button>
	<slot />
</button>

<style lang="scss">
	button {
		background-color: blue;
		clip-path: polygon(
			4px 0,
			calc(100% - 4px) 0,
			100% 4px,
			100% calc(100% - 4px),
			calc(100% - 4px) 100%,
			4px 100%,
			0 calc(100% - 4px),
			0 4px
		);
	}
</style>
