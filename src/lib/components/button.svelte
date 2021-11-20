<script>
	import { spring } from 'svelte/motion';
	export let variant = 'primary';
	let scale = spring(1, {
		stiffness: 0.7,
		damping: 0.4
	});
</script>

<button
	class="button {variant}"
	on:mouseenter={() => scale.set(1.1)}
	on:mouseleave={() => scale.set(1)}
	on:mouseup={() => scale.set(1.1)}
	on:mousedown={() => scale.set(1)}
	on:touchstart={() => scale.set(1.05)}
	on:touchend={() => scale.set(1)}
	style="transform: scale({$scale})"
>
	{#if $$slots.label}
		{#if $$slots.icon}
			<span class="icon leading">
				<slot name="icon" />
			</span>
		{/if}

		<slot name="label" />

		{#if $$slots.iconTrailing}
			<span class="icon trailing">
				<slot name="iconTrailing" />
			</span>
		{/if}
	{:else}
		<span class="icon">
			<slot name="icon" />
		</span>
	{/if}
</button>

<style lang="scss">
	.icon {
		display: inline-flex;
		vertical-align: middle;
	}
	.leading {
		margin-right: var(--spacing-02);
	}
	.trailing {
		margin-left: var(--spacing-02);
	}
	.primary {
		background-color: var(--color-accent--on-dark--blue--transparent);
		color: var(--color-accent--on-dark--blue--opaque);
	}
	button {
		backdrop-filter: brightness(66%) saturate(50%) blur(var(--blur-radius--large));
		font-size: var(--font-size--normal);
		white-space: nowrap;
		border: 0px solid transparent;
		line-height: 1;
		text-align: center;
		padding: var(--spacing-02) var(--spacing-02-plus);
		transition: all var(--transition--200);
		cursor: pointer;
		font-family: inherit;
		font-weight: bold;
		clip-path: var(--squircle);
		will-change: transform;
		backface-visibility: hidden;
		transform: translateZ(0);
		-webkit-font-smoothing: subpixel-antialiased;
		font-smoothing: subpixel-antialiased;
	}
	button:hover {
		transform: scale(1.1);
		animation: none;
		animation-play-state: paused;
	}
	button:active {
		transform: scale(1);
		transition: all var(--transition--100);
		animation: none;
	}
	@media (max-width: 667px) {
		button {
			padding: var(--spacing-03) var(--spacing-04);
		}
	}
</style>
