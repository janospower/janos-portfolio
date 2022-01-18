<script>
	import { fly } from 'svelte/transition';

	export let text = '';
	export let toastOpen = false;
</script>

{#if toastOpen}
	<div class="toast-wrapper inverted" transition:fly={{ y: -96, duration: 250, opacity: 1 }}>
		<dialog class="toast" role="dialog">
			<slot />
		</dialog>
	</div>
{/if}

<style lang="scss">
	.toast-wrapper {
		z-index: 300;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		display: flex;
		justify-content: center;
		margin-top: var(--spacing-04);
	}
	.toast {
		background-color: var(--color-overlay);
		backdrop-filter: var(--backdrop-filter);
		padding: var(--spacing-03) var(--spacing-04);
		clip-path: var(--squircle);
		transition: background-color 1.5s var(--easing--quint), color 1.5s var(--easing--quint);
		color: var(--color-neutral--100);
		font-family: var(--font-family);
		font-weight: bold;
	}
</style>
