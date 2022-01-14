<script>
	import { onMount } from 'svelte';
	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';

	// let center = window.innerWidth / 2;
	let figure;
	let windowHeight = 0;
	let windowWidth = 0;
	let position = 0;
	let rect;
	let middle = 0;
	let y;

	let tiltX = tweened(0, {
		duration: 400,
		easing: cubicOut
	});
	let tiltY = tweened(0, {
		duration: 400,
		easing: cubicOut
	});

	$: position = (middle - y) / windowHeight - 0.5;

	onMount(() => {
		windowHeight = window.innerHeight;
		windowWidth = window.innerWidth;
		getCoords(figure);
	});

	function getCoords(element) {
		rect = element.getBoundingClientRect();

		let body = document.body;
		let docEl = document.documentElement;

		let scrollTop = y;

		let clientTop = docEl.clientTop || body.clientTop || 0;

		let trueTop = rect.top + scrollTop - clientTop;
		let trueBottom = rect.bottom + scrollTop - clientTop;

		let top = Math.round(trueTop);
		let bottom = Math.round(trueBottom);
		middle = top + (bottom - top) / 2;
	}
</script>

<svelte:window
	bind:scrollY={y}
	on:scroll={() => tiltX.set(position)}
	on:mousemove={(e) => tiltY.set(e.clientX / windowWidth - 0.5)}
/>

<figure
	style="transform: perspective(500px) rotateX({$tiltX * 10}deg) rotateY({$tiltY *
		20}deg) rotateZ(-5deg);"
	bind:this={figure}
>
	<img
		class="background"
		src="/images/example-ui/example-ui.svg"
		alt="Example of a mobile user interface"
	/>
	<img
		class="foreground"
		src="/images/example-ui/example-ui__highlight.svg"
		alt="Example of a mobile user interface highlight"
	/>
</figure>

<style lang="scss">
	figure {
		transform-style: preserve-3d;
		position: relative;
	}
	img {
		filter: var(--drop-shadow--large);
	}
	.foreground {
		position: absolute;
		left: -5px;
		top: 125px;
		transform: translateZ(30px);
	}
</style>
