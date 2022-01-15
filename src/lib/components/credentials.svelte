<script>
	import Credential from './credential.svelte';
	const delay = 0.1;
	import Parallax from './parallax.svelte';
</script>

<Parallax rate={-96} growBy={-0.15}>
	<div class="certification-wrapper grid-inner">
		<Credential
			skillName="User Interface Design"
			credentialType="University degree"
			link="https://www.linkedin.com/in/janospauer/detail/skills/(ACoAABjM5t0Br3uEQCkfmYUJ7ReYa2nPyi5Ngf8,2)/"
		/>
		<Credential
			skillName="User Experience Design"
			credentialType="University degree"
			entryDelay={1 * delay}
			link="https://www.linkedin.com/in/janospauer/detail/skills/(ACoAABjM5t0Br3uEQCkfmYUJ7ReYa2nPyi5Ngf8,6)/"
		/>
		<Credential
			skillName="Frontend Development"
			credentialType="Assessed skill"
			entryDelay={2 * delay}
			link="https://www.linkedin.com/in/janospauer/detail/skills/(ACoAABjM5t0Br3uEQCkfmYUJ7ReYa2nPyi5Ngf8,31)/"
		/>
		<Credential
			skillName="Agile Methodologies"
			credentialType="Assessed skill"
			entryDelay={3 * delay}
			link="https://www.linkedin.com/in/janospauer/detail/skills/(ACoAABjM5t0Br3uEQCkfmYUJ7ReYa2nPyi5Ngf8,17)/"
		/>
	</div>
</Parallax>

<style lang="scss">
	.certification-wrapper {
		margin-bottom: 40vh;
	}
</style>
