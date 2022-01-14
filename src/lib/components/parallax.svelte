<script>
	import { onMount } from 'svelte';
	import { spring } from 'svelte/motion';

	export let rate = 32;

	let container;
	let innerHeight;
	let containerHeight;
	let containerCenter;

	let translateSpring = spring(0, { stiffness: 0.017, damping: 0.26 });

	onMount(() => {
		setDimensions();

		window.addEventListener('scroll', () => {
			containerCenter = container.getBoundingClientRect().top + containerHeight / 2;
			let offset = (containerCenter - innerHeight / 2) / innerHeight;
			translateSpring.set(offset * rate);
		});
	});

	function setDimensions() {
		containerHeight = container.getBoundingClientRect().height;
		innerHeight = window.innerHeight;
	}
</script>

<div
	class="parallax-container"
	style="transform: translate(0px, {$translateSpring}px);"
	bind:this={container}
>
	<slot />
</div>
