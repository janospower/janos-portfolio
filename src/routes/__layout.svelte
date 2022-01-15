<script>
	import Nav from '../lib/components/nav.svelte';
	import Footer from '../lib/components/footer.svelte';
	import Toast from '../lib/components/toast.svelte';

	let toastMessage = '';
	let toastOpen = false;
	function handleMessage(event) {
		toastMessage = event.detail.text;
		toastOpen = true;
		setTimeout(() => {
			toastOpen = false;
		}, 5000);
	}
</script>

<Nav on:message={handleMessage} />

<main>
	<slot />
</main>

<Footer />

<Toast {toastOpen}>{toastMessage}</Toast>

<style global lang="scss">
	@import '../app.scss';
	main {
		min-height: 100vh;
	}
</style>
