<script>
	import Parallax from './parallax.svelte';
	import { spring } from 'svelte/motion';

	let gradients = {
		redX: 80,
		redY: 0,
		magentaX: 0,
		magentaY: 50,
		blueX: 80,
		blueY: 50,
		tealX: 0,
		tealY: 100,
		voltX: 80,
		voltY: 100,
		yellowX: 0,
		yellowY: 0
	};

	let gradientSpring = spring(gradients, {
		stiffness: 0.017,
		damping: 0.26
	});

	$: gradientStyle = `
			background-image:
			radial-gradient(at ${$gradientSpring.redX}% ${$gradientSpring.redY}%, var(--color-accent--red--opaque) 0, transparent 50%),
			radial-gradient(at ${$gradientSpring.magentaX}% ${$gradientSpring.magentaY}%, var(--color-accent--magenta--opaque) 0, transparent 50%),
			radial-gradient(at ${$gradientSpring.blueX}% ${$gradientSpring.blueY}%, var(--color-accent--blue--opaque) 0, transparent 50%),
			radial-gradient(at ${$gradientSpring.tealX}% ${$gradientSpring.tealY}%, var(--color-accent--teal--opaque) 0, transparent 50%),
			radial-gradient(at ${$gradientSpring.voltX}% ${$gradientSpring.voltY}%, var(--color-accent--volt--opaque) 0, transparent 50%),
			radial-gradient(at ${$gradientSpring.yellowX}% ${$gradientSpring.yellowY}%, var(--color-accent--yellow--opaque) 0, transparent 50%);
			`;
</script>

<div
	class="hero-wrapper"
	on:pointerover={() => {
		let gradientsRandom = {
			redX: Math.random() * 100,
			redY: Math.random() * 100,
			magentaX: Math.random() * 100,
			magentaY: Math.random() * 100,
			blueX: Math.random() * 100,
			blueY: Math.random() * 100,
			tealX: Math.random() * 100,
			tealY: Math.random() * 100,
			voltX: Math.random() * 100,
			voltY: Math.random() * 100,
			yellowX: Math.random() * 100,
			yellowY: Math.random() * 100
		};
		gradientSpring.set(gradientsRandom);
	}}
	on:pointerout={() => {
		gradientSpring.set(gradients);
	}}
>
	<Parallax rate={256} growBy={-0.3}>
		<div class="hero">
			<div class="canvas" style={gradientStyle} />
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
		y: flex;
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
