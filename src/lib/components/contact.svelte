<script>
	import Button from './button.svelte';
	import Clipboard from 'svelte-clipboard';
</script>

<section>
	<Button variant="primary" fullwidth={true}>
		<span slot="label">E-Mail with default client</span>
	</Button>
</section>

<section>
	<Clipboard
		text="me@janospauer.com"
		let:copy
		on:copy={() => {
			console.log('Has Copied');
		}}
	>
		<Button variant="primary" fullwidth={true} on:message={copy}>
			<span slot="label">Copy E-Mail address</span>
		</Button>
	</Clipboard>
</section>

<section>
	<Button variant="primary" fullwidth={true}>
		<span slot="label">Message on LinkedIn</span>
	</Button>
</section>

<style lang="scss">
	section {
		margin-bottom: var(--spacing-02);
	}
</style>
