<script>
	import Button from './button.svelte';
	import PaperPlane from '../icons/paperplane.svelte';
</script>

<div class="navigation__background" />
<nav>
	<h2><a href="/">Portfolio • Janos Pauer</a></h2>
	<Button>
		<PaperPlane slot="icon" size="small" circle />
		<span slot="label">Send a message</span>
	</Button>
</nav>

<style lang="scss">
	.navigation__background {
		position: fixed;
		top: 0;
		width: 100%;
		height: var(--spacing-10);
	}
	nav :global(.button) {
		position: fixed;
		top: var(--spacing-05);
		right: var(--spacing-05);
		animation-name: message;
		animation-delay: 10s;
		animation-duration: 10s;
		animation-iteration-count: infinite;
		animation-timing-function: var(--easing--out-back);
	}

	@keyframes message {
		0% {
			transform: scale(1);
		}
		5% {
			transform: scale(1.1);
		}
		7% {
			transform: scale(1);
		}
	}
	nav h2 {
		position: fixed;
		top: var(--spacing-05);
		left: var(--spacing-05);
		padding-top: var(--spacing-02);
	}
	.navigation__background {
		background-color: var(--color-glass);
		mask: linear-gradient(
			to bottom,
			hsla(0, 0%, 0%, 1) 0%,
			hsla(0, 0%, 0%, 1) 20%,
			hsla(0, 0%, 0%, 0) 100%
		);
	}

	@supports ((-webkit-backdrop-filter: none) or (backdrop-filter: none)) {
		.navigation__background {
			background-color: transparent;
			backdrop-filter: brightness(66%) saturate(150%) blur(var(--blur-radius--medium));
		}
	}
	@media (max-width: 667px) {
		nav :global(.button) {
			left: var(--spacing-04);
			bottom: var(--spacing-04);
			top: auto;
			animation: none;
		}
		nav {
			padding: var(--spacing-04);
			& h2 {
				position: static;
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
