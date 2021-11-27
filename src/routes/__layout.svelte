<script>
	import Nav from '../lib/components/nav.svelte';
	import Footer from '../lib/components/footer.svelte';
</script>

<Nav />

<div class="page">
	<slot />
</div>

<Footer />

<style global lang="scss">
	@import '../app.scss';
</style>
