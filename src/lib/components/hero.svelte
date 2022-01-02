<script>
</script>

<div class="hero-wrapper">
	<div class="hero" id="hero">
		<div class="placeholder" />
	</div>
</div>

<style lang="scss">
	.hero-wrapper {
		margin-bottom: var(--spacing-08);
		display: flex;
		align-items: center;
		flex-direction: column;
	}
	.hero {
		width: 100vw;
		height: 100vw;
		margin: 0 auto;
		background: radial-gradient(
			closest-side,
			black 200px,
			hsla(331, 100%, 90%, 30%) 202px,
			hsla(310, 100%, 50%, 12%) 210px,
			hsla(240, 100%, 50%, 7%) 280px,
			hsla(280, 100%, 50%, 0%) 100%
		);
		padding: calc(50vw - 205px);
		margin: calc((50vw - 205px) * -1);
	}
</style>
