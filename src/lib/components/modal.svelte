<script>
	import { createEventDispatcher } from 'svelte';
	import Button from './button.svelte';
	import { fly } from 'svelte/transition';

	export let modalOpen = false;

	const dispatch = createEventDispatcher();

	function keydown(e) {
		e.stopPropagation();
		if (e.key === 'Escape') {
			closeModal();
		}
	}

	function closeModal() {
		modalOpen = false;
		dispatch('closeModal', { modalOpen });
	}
</script>

{#if modalOpen}
	<div class="modal-background" on:click={closeModal} />
	<div class="modal-wrapper" transition:fly={{ y: 32, duration: 500 }}>
		<div class="modal inverted" role="dialog" on:keydown={keydown} tabindex={0} autofocus>
			<header>
				<slot name="header" />
			</header>
			<div class="slot">
				<slot name="body">Some content</slot>
			</div>
			<footer>
				<Button
					variant="primary"
					fullwidth={true}
					error={true}
					on:message={closeModal}
					preventDefault={true}
				>
					<span slot="label">Cancel</span>
				</Button>
			</footer>
		</div>
	</div>
{/if}

<style lang="scss">
	.modal-background {
		position: fixed;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		background-color: var(--color-blanket);
		z-index: 110;
	}
	.modal-wrapper {
		display: flex;
		align-items: center;
		justify-content: center;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		position: fixed;
		z-index: 111;
		pointer-events: none;
	}
	.modal {
		max-width: 100vw;
		max-height: 100vh;
		width: calc(var(--page-width-inner) / 8 * 2);
		background-color: var(--color-overlay);
		pointer-events: auto;
		backdrop-filter: var(--backdrop-filter);
		padding: var(--spacing-03);
		clip-path: var(--squircle);
		transition: background-color 2s var(--easing--quint), color 2s var(--easing--quint);
		color: var(--color-neutral--100);
	}
	header,
	footer {
		display: block;
	}
	header {
		margin-bottom: var(--spacing-03);
	}
	@media (max-width: 667px) {
		.modal-wrapper {
			align-items: flex-end;
		}
		.modal {
			padding-bottom: var(--spacing-06);
			margin-bottom: calc(-1 * var(--spacing-03));
		}
	}
</style>
