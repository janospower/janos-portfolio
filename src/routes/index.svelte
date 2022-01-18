<script>
	import Sticky from '../lib/components/sticky.svelte';
	import Hero from '../lib/components/hero.svelte';
	import JanosSignature from '../lib/components/janos-signature.svelte';
	import SelectedLayer from '../lib/components/selected-layer.svelte';
	import ActiveCode from '../lib/components/active-code.svelte';
	import ExampleUI from '../lib/components/example-ui.svelte';
	import Credentials from '../lib/components/credentials.svelte';
	import Cases from '../lib/components/cases.svelte';
	import Disclaimer from '../lib/components/disclaimer.svelte';

	let verticalScroll;
</script>

<svelte:head>
	<title>Janos Pauer • Portfolio</title>
	<meta
		name="description"
		content="Janos Pauer is a Berlin-based UI / UX Designer available for projects."
	/>

	<meta property="og:title" content="Janos Pauer • Digital Product Design Portfolio" />
	<meta property="og:image" content="https://janospauer.com/images/preview.png" />
	<meta
		property="og:description"
		content="Janos Pauer is a Berlin-based UI / UX Designer and Creative Technologist available for projects."
	/>
	<meta property="og:url" content="https://janospauer.com/" />
</svelte:head>

<svelte:window bind:scrollY={verticalScroll} />

<div class="grid">
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

	<Sticky
		gridColumnStart="1"
		gridColumnEnd="9"
		observeIntersection={true}
		delay={2000}
		sticky={false}
	>
		<p class="text--huge heres-how" slot="firstLine">Here’s how</p>
		<div slot="secondLine">
			<Credentials />
		</div>
	</Sticky>
</div>

<Cases />

<Disclaimer />

<style lang="scss">
	@media (min-width: 667px) {
		.signature-line {
			display: flex;
		}
		.heres-how {
			margin-left: 25%;
		}
	}
</style>
