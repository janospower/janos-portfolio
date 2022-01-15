<script>
	import Parallax from './parallax.svelte';

	let gradients = [
		{
			x: 80,
			y: 0
		},
		{
			x: 0,
			y: 50
		},
		{
			x: 80,
			y: 50
		},
		{
			x: 0,
			y: 100
		},
		{
			x: 80,
			y: 100
		},
		{
			x: 0,
			y: 0
		}
	];

	let style = `
			background-image:
			radial-gradient(at ${gradients[0].x}% ${gradients[0].y}%, var(--color-accent--red--opaque) 0, transparent 50%),
			radial-gradient(at ${gradients[1].x}% ${gradients[1].y}%, var(--color-accent--magenta--opaque) 0, transparent 50%),
			radial-gradient(at ${gradients[2].x}% ${gradients[2].y}%, var(--color-accent--blue--opaque) 0, transparent 50%),
			radial-gradient(at ${gradients[3].x}% ${gradients[3].y}%, var(--color-accent--teal--opaque) 0, transparent 50%),
			radial-gradient(at ${gradients[4].x}% ${gradients[4].y}%, var(--color-accent--volt--opaque) 0, transparent 50%),
			radial-gradient(at ${gradients[5].x}% ${gradients[5].y}%, var(--color-accent--yellow--opaque) 0, transparent 50%);
			`;
</script>

<div class="hero-wrapper">
	<Parallax rate={256} growBy={-0.3}>
		<div class="hero">
			<div class="canvas" {style} />
		</div>
	</Parallax>
</div>

<style lang="scss">
	.canvas {
		width: 100%;
		height: 100%;
		border-radius: 50%;
		background-position: center;
		background-size: cover;
		background-repeat: no-repeat;
	}
	.hero-wrapper {
		margin-top: var(--spacing-03);
		margin-bottom: var(--spacing-07);
		display: flex;
		align-items: center;
		flex-direction: column;
	}
	.hero {
		width: 410px;
		height: 410px;
		margin: 0 auto;
		background: white;
		border-radius: 50%;
	}
	@media (max-width: 667px) {
		.hero {
			width: calc(100vw - var(--spacing-05) * 2);
			height: calc(100vw - var(--spacing-05) * 2);
			border-radius: 50%;
		}
	}
</style>
