<script>
	import IntersectionObserver from 'svelte-intersection-observer';
	import { browser } from '$app/env';

	export let intersecting;
	$: if (browser) document.body.classList.toggle('light', intersecting);

	let element;
</script>

<IntersectionObserver {element} bind:intersecting>
	<div class="caseswrapper" bind:this={element}>test</div>
</IntersectionObserver>

<style lang="scss">
	@media (min-width: 667px) and (pointer: fine) {
	}
</style>
