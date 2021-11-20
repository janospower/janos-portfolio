<script>
	import { onMount } from 'svelte';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	export let query;

	let wasMounted = false;

	onMount(() => {
		wasMounted = true;
	});

	$: {
		if (wasMounted) {
			let mediaQueryList = window.matchMedia(query);
			let queryresult = mediaQueryList.matches;
			dispatch('queryresult', {
				queryresult
			});
		}
	}
</script>
