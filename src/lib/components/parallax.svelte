<script>
	import { onMount } from 'svelte';
	import { spring } from 'svelte/motion';
	import { throttle } from 'throttle-debounce';

	export let rate = 32;
	export let growBy = 0;

	let container;
	let innerHeight;
	let containerHeight;
	let containerCenter;

	let translateSpring = spring(
		{
			y: 0,
			scale: 1
		},
		{
			stiffness: 0.017,
			damping: 0.26
		}
	);

	onMount(() => {
		setDimensions();
		adjustTranslation();

		window.addEventListener('scroll', () => {
			throttleFunc();
		});

		const throttleFunc = throttle(1000 / 60, false, () => adjustTranslation());
	});

	function setDimensions() {
		containerHeight = container.getBoundingClientRect().height;
		innerHeight = window.innerHeight;
	}

	function adjustTranslation() {
		containerCenter = container.getBoundingClientRect().top + containerHeight / 2;
		let offset = (containerCenter - innerHeight / 2) / innerHeight;
		let scale = 1 + Math.abs(offset) * growBy;
		translateSpring.set({
			y: offset * rate,
			scale: scale > 0 ? scale : 1
		});
	}
</script>

<div
	class="parallax-container"
	style="transform: translate(0px, {$translateSpring.y}px) scale({$translateSpring.scale});"
	bind:this={container}
>
	<slot />
</div>
