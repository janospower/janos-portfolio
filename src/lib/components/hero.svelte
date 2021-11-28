<script>
	import { onMount } from 'svelte';
	import { createScene } from '../js/scene';
	let el;
	onMount(() => {
		createScene(el);
	});
</script>

<div class="hero-wrapper">
	<div class="hero" id="hero">
		<canvas bind:this={el}>
			<div class="placeholder" />
		</canvas>
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
		$bloom-radius: 500px;
		width: calc(410px + $bloom-radius * 2);
		height: calc(410px + $bloom-radius * 2);
		margin: 0 auto;
		background: radial-gradient(
			closest-side,
			black 200px,
			hsla(331, 100%, 90%, 30%) 202px,
			hsla(310, 100%, 50%, 12%) 210px,
			hsla(240, 100%, 50%, 7%) 280px,
			hsla(280, 100%, 50%, 0%) 100%
		);
		padding: $bloom-radius;
		margin: calc($bloom-radius * -1);
	}
	.placeholder {
		width: 410px;
		height: 410px;
		background-color: black;
		border-radius: 50%;
	}
</style>
