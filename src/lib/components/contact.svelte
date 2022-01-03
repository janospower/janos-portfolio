<script>
	import Button from './button.svelte';
</script>

<section>
	<Button variant="primary" fullwidth={true}>
		<span slot="label">E-Mail with default client</span>
	</Button>
</section>

<section>
	<Button variant="primary" fullwidth={true}>
		<span slot="label">Copy E-Mail address</span>
	</Button>
</section>

<section>
	<Button variant="primary" fullwidth={true}>
		<span slot="label">Message on LinkedIn</span>
	</Button>
</section>

<section>
	<input type="text" />
</section>

<section>
	<Button variant="primary" fullwidth={true}>
		<span slot="label">Send</span>
	</Button>
</section>

<style lang="scss">
	section {
		margin-bottom: var(--spacing-02);
	}
</style>
