<script>
	export let variant = 'primary';
	export let icon = 'false';
	export let iconPosition = 'leading';
</script>

<button class="button {variant}">
	{#if icon} <span class="icon" />{/if}
	<slot />
	{#if icon && iconPosition === 'trailing'} <span class="icon right" />{/if}
</button>

<style lang="scss">
	.icon {
		display: -webkit-inline-box;
		display: -ms-inline-flexbox;
		display: inline-flex;
		-webkit-box-align: center;
		-ms-flex-align: center;
		align-items: center;
	}
	.primary {
		background-color: var(--color-accent--on-dark--blue--transparent);
		color: var(--color-accent--on-dark--blue--opaque);
	}
	button {
		white-space: nowrap;
		border: 0px solid transparent;
		line-height: 1;
		text-align: center;
		transition: all var(--transition--100);
		cursor: pointer;
		font-family: inherit;
		clip-path: var(--squircle);
	}
</style>
