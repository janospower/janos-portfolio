<script>
	import Credential from './credential.svelte';
	const delay = 0.1;
</script>

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

<style lang="scss">
</style>
