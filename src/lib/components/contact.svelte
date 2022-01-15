<script>
	import Button from './button.svelte';
	import Clipboard from 'svelte-clipboard';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	function sendMessage(message) {
		dispatch('message', {
			text: message
		});
	}
</script>

<section>
	<Button
		variant="primary"
		fullwidth={true}
		link="mailto:me@janospauer.com?subject=I%20saw%20your%20website!"
	>
		<span slot="label">E-Mail with default client</span>
	</Button>
</section>

<section>
	<Clipboard
		text="me@janospauer.com"
		let:copy
		on:copy={() => {
			sendMessage('Address copied to clipboard!');
		}}
	>
		<Button variant="primary" fullwidth={true} on:message={copy} preventDefault={true}>
			<span slot="label">Copy E-Mail address</span>
		</Button>
	</Clipboard>
</section>

<style lang="scss">
	section {
		margin-bottom: var(--spacing-02);
	}
</style>
