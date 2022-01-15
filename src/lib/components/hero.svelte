<script>
	let hero;
	let canvas;
</script>

<div class="hero-wrapper">
	<div
		class="hero"
		id="hero"
		bind:this={hero}
		on:pointermove={(e) => {
			// boundingBox = hero.getBoundingClientRect();
			// offsetX = (e.clientX - boundingBox.left - boundingBox.width / 2) * 0.01;
			// offsetY = (e.clientY - boundingBox.top - boundingBox.height / 2) * 0.01;
			// e.preventDefault();
		}}
	>
		<div class="canvas" bind:this={canvas} />
	</div>
</div>

<style lang="scss">
	.canvas {
		width: 100%;
		height: 100%;
		border-radius: 50%;
		background-image: radial-gradient(
				at 40% 40%,
				var(--color-accent--red--opaque) 0,
				transparent 50%
			),
			radial-gradient(at 80% 0%, var(--color-accent--red--opaque) 0, transparent 50%),
			radial-gradient(at 0% 50%, var(--color-accent--magenta--opaque) 0, transparent 50%),
			radial-gradient(at 80% 50%, var(--color-accent--blue--opaque) 0, transparent 50%),
			radial-gradient(at 0% 100%, var(--color-accent--teal--opaque) 0, transparent 50%),
			radial-gradient(at 80% 100%, var(--color-accent--volt--opaque) 0, transparent 50%),
			radial-gradient(at 0% 0%, var(--color-accent--yellow--opaque) 0, transparent 50%);
		background-position: center;
		background-size: cover;
		background-repeat: no-repeat;
	}
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
		background-image: radial-gradient(
			closest-side,
			hsla(0, 0%, 100%, 100%) 205px,
			hsla(331, 50%, 90%, 50%) 206px,
			hsla(290, 80%, 80%, 13%) 210px,
			hsla(240, 100%, 50%, 7%) 280px,
			hsla(280, 100%, 50%, 0%) 100%
		);
		padding: calc(50vw - 205px);
		margin: calc((50vw - 205px) * -1);
	}
	@media (max-width: 667px) {
		.hero {
			width: 100%;
			height: 100%;
			border-radius: 50%;
			background: radial-gradient(
				closest-side,
				hsla(0, 0%, 0%, 50%) 90%,
				hsla(0, 0%, 4%, 50%) 95%,
				hsla(0, 0%, 20%, 50%) 99%,
				hsla(0, 0%, 40%, 50%) 100%
			);
		}
	}
</style>
