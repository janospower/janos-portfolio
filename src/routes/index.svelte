<script>
	import Sticky from '../lib/components/sticky.svelte';
	import Hero from '../lib/components/hero.svelte';
	import JanosSignature from '../lib/components/janos-signature.svelte';
	import SelectedLayer from '../lib/components/selected-layer.svelte';
	import ActiveCode from '../lib/components/active-code.svelte';
	import ExampleUI from '../lib/components/example-ui.svelte';
	import Credentials from '../lib/components/credentials.svelte';

	let verticalScroll;
</script>

<svelte:head>
	<title>Janos Pauer • Portfolio</title>
	<meta name="description" content="A description of the page" />

	<meta itemprop="name" content="Content Title" />
	<meta itemprop="description" content="Content description less than 200 characters" />
	<meta itemprop="image" content="https://example.com/image.jpg" />

	<meta name="twitter:card" content="summary_large_image" />

	<meta property="og:title" content="Title of the article" />
	<meta property="og:image" content="//media.example.com/ 1234567.jpg" />
	<meta property="og:description" content="Description that will show in the preview" />
	<meta property="og:url" content="//www.example.com/URL of the article" />
</svelte:head>

<svelte:window bind:scrollY={verticalScroll} />

<Sticky gridColumnStart="3" gridColumnEnd="7" sticky={false} {verticalScroll}>
	<Hero slot="firstLine" />
</Sticky>

<Sticky gridColumnStart="3" gridColumnEnd="7" {verticalScroll} scrollTrigger={-20} delay={2000}>
	<p class="text--huge" slot="firstLine">Hi.</p>
	<div class="text--huge signature-line" slot="secondLine">
		<p>My name is&nbsp;</p>
		<JanosSignature {verticalScroll} scrollTrigger={250} />
	</div>
</Sticky>

<Sticky
	gridColumnStart="4"
	gridColumnEnd="8"
	observeIntersection={true}
	staticElement={true}
	delay={2000}
>
	<ExampleUI slot="staticElement" />
	<p class="text--huge" slot="firstLine">
		I <SelectedLayer>design</SelectedLayer> and <ActiveCode>build</ActiveCode>
	</p>
	<p class="text--huge signature-line" slot="secondLine">
		digital products for humans and for the planet.
	</p>
</Sticky>

<Sticky gridColumnStart="1" gridColumnEnd="9" observeIntersection={true} delay={2000}>
	<p class="text--huge heres-how" slot="firstLine">Here’s how</p>
	<div class="grid-inner" slot="secondLine">
		<Credentials skillName="User Interface Design" credentialType="University degree" />
		<Credentials skillName="User Experience Design" credentialType="University degree" />
		<Credentials skillName="Frontend Development" credentialType="Assessed skill" />
		<Credentials skillName="Agile Methodologies" credentialType="Assessed skill" />
	</div>
</Sticky>

<style lang="scss">
	.signature-line {
		display: flex;
	}
	.grid-inner {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: var(--spacing-03);
		margin-top: var(--spacing-06);
	}
	@media (max-width: 667px) {
		.grid-inner {
			grid-template-columns: repeat(1, 1fr);
		}
	}
	@media (min-width: 667px) {
		.heres-how {
			margin-left: 25%;
		}
	}
</style>
