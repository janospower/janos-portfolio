<script>
	import Credential from '../icons/credential.svelte';

	export let skillName = '';
	export let credentialType = '';
</script>

<section>
	<Credential size="medium" />
	<h3>{skillName}</h3>
	<p>{credentialType}</p>
</section>

<style lang="scss">
	section {
		background-color: var(--color-neutral--800);
		padding-top: var(--spacing-05);
		padding-bottom: var(--spacing-06);
		clip-path: var(--squircle);
		transition: transform var(--transition--200);
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	h3 {
		margin-top: var(--spacing-03);
		margin-bottom: var(--spacing-02);
	}
	section:hover {
		transform: scale(1.1);
	}
</style>
