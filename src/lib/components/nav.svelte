<script>
	import Button from './button.svelte';
	import Modal from './modal.svelte';
	import Contact from './contact.svelte';
	import PaperPlane from '../icons/paperplane.svelte';

	let modalOpen = false;

	function openContactModal() {
		modalOpen = true;
	}
</script>

<div class="navigation__background no-select" />
<nav class="main-navigation" aria-label="Main">
	<h2><a href="/">Janos Pauer</a></h2>
	<div class="cta">
		<Button cta={true} on:message={openContactModal}>
			<PaperPlane slot="icon" size="small" circle />
			<span slot="label">Send a message</span>
		</Button>
	</div>
</nav>

<Modal {modalOpen} on:closeModal={(modalOpen = false)}>
	<h2 slot="header">Message Janos</h2>
	<Contact on:message slot="body" />
</Modal>

<style lang="scss">
	.navigation__background {
		position: fixed;
		top: 0;
		width: 100%;
		height: var(--spacing-11);
		z-index: 100;
		pointer-events: none;
	}

	nav {
		position: fixed;
		left: 0;
		right: 0;
		width: 100vw;
		top: var(--spacing-05);
		z-index: 101;
	}

	.cta {
		grid-column: 7/9;
		z-index: 101;
		display: flex;
		justify-content: flex-end;
	}

	nav h2 {
		padding-top: var(--spacing-02);
		grid-column: 1/3;
	}
	.navigation__background {
		background-color: var(--color-glass);
		mask: linear-gradient(
			to bottom,
			hsla(0, 0%, 0%, 1) 0%,
			hsla(0, 0%, 0%, 1) 20%,
			hsla(0, 0%, 0%, 0) 100%
		);
		transition: background-color 2s var(--easing--quint);
	}

	@supports ((-webkit-backdrop-filter: none) or (backdrop-filter: none)) {
		.navigation__background {
			background-color: transparent;
			backdrop-filter: var(--backdrop-filter-medium);
			transition: backdrop-filter 2s var(--easing--quint), background-color 2s var(--easing--quint);
		}
	}
	@media (max-width: 667px) {
		nav :global(.button) {
			position: fixed;
			left: var(--spacing-04);
			bottom: var(--spacing-04);
			top: auto;
			width: calc(100% - var(--spacing-04) * 2);
		}
		nav {
			position: static;
			padding: var(--spacing-04);
			& h2 {
				padding: 0;
			}
		}
		.navigation__background {
			bottom: 0;
			top: auto;
		}
		.navigation__background {
			mask: linear-gradient(
				to top,
				hsla(0, 0%, 0%, 1) 0%,
				hsla(0, 0%, 0%, 1) 20%,
				hsla(0, 0%, 0%, 0) 100%
			);
		}
	}
</style>
