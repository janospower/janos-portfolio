<script>
	import Credential from './credential.svelte';
	const delay = 0.1;
	import Parallax from './parallax.svelte';
</script>

<Parallax rate={-96} growBy={-0.15}>
	<div class="certification-wrapper grid-inner">
		<Credential skillName="User Interface Design" credentialType="University degree" />
		<Credential
			skillName="User Experience Design"
			credentialType="University degree"
			entryDelay={1 * delay}
		/>
		<Credential
			skillName="Frontend Development"
			credentialType="Assessed skill"
			entryDelay={2 * delay}
		/>
		<Credential
			skillName="Agile Methodologies"
			credentialType="Assessed skill"
			entryDelay={3 * delay}
		/>
	</div>
</Parallax>

<style lang="scss">
	.certification-wrapper {
		margin-bottom: 40vh;
	}
</style>
