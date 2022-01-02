<span>
	<!-- prettier-ignore -->
	<slot /><div class="caret" />
</span>

<style lang="scss">
	span {
		background-color: var(--color-accent--on-dark--red--transparent);
		color: var(--color-accent--on-dark--red--opaque);
		padding: var(--spacing-01) var(--spacing-02);
		border-radius: 3px;
	}

	.caret {
		display: inline-block;
		width: var(--spacing-00);
		height: var(--spacing-06);
		background-color: var(--color-neutral--200);
		margin: 0 -2px -2px 0;

		animation: caret 1.5s ease infinite;
	}

	@keyframes caret {
		0% {
			opacity: 0;
		}
		35% {
			opacity: 0;
		}
		50% {
			opacity: 1;
		}
		85% {
			opacity: 1;
		}
		100% {
			opacity: 0;
		}
	}
</style>
