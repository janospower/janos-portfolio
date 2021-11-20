<script>
	export let variant = 'primary';
</script>

<button class="button {variant}">
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
		height: fit-content;
		transition: all var(--transition--100);
		cursor: pointer;
		font-family: inherit;
		font-weight: bold;
		clip-path: var(--squircle);
	}
	@media (max-width: 667px) {
		button {
			padding: var(--spacing-03) var(--spacing-04);
		}
	}
</style>
