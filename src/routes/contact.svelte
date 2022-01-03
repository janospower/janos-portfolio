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

<article>
	<section>
		<h1 class="text--huge">Contact</h1>
		<Contact />
	</section>
</article>

<style lang="scss">
	article {
		margin-top: var(--spacing-10);
		grid-column-start: 2;
		grid-column-end: 7;
	}
	h2 {
		margin-top: var(--spacing-05);
	}
</style>
