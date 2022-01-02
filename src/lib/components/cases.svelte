<script>
	import IntersectionObserver from 'svelte-intersection-observer';
	import { browser } from '$app/env';

	export let intersecting;
	$: if (browser) document.body.classList.toggle('light', intersecting);

	let element;
</script>

<!-- <svelte:body class:dark={intersecting} /> -->

<IntersectionObserver {element} bind:intersecting>
	<div bind:this={element}>test</div>
</IntersectionObserver>

<style lang="scss"></style>
