<script>
	import Contact from '../lib/components/contact.svelte';
</script>

<svelte:head>
	<title>Janos Pauer • Contact</title>
	<meta
		name="description"
		content="Information for how to get in touch with Janos Pauer for projects."
	/>

	<meta property="og:title" content="Janos Pauer • Contact" />
	<!-- <meta property="og:image" content="//media.example.com/ 1234567.jpg" /> -->
	<meta
		property="og:description"
		content="Information for how to get in touch with Janos Pauer for projects."
	/>
	<meta property="og:image" content="https://janospauer.com/images/janos-pauer-portrait.jpg" />
	<meta property="og:url" content="https://janospauer.com/contact" />
</svelte:head>

<article class="grid">
	<section>
		<h2 class="text--huge">Contact</h2>
		<p>Janos Pauer • Digital Product Designer</p>
		<p>Silbersteinstraße 35, 12051 Berlin Germany</p>
		<p>me@janospauer.com</p>
		<Contact />
	</section>
</article>

<style lang="scss">
	section {
		margin-top: var(--spacing-10);
	}
	h2 {
		margin-bottom: var(--spacing-05);
	}
	p {
		margin-bottom: var(--spacing-03);
	}
</style>
