<script>
	import { spring } from 'svelte/motion';
	import MediaQuery from './mediaquery.svelte';
	import { throttle } from 'throttle-debounce';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	function sendMessage() {
		dispatch('message');
	}

	let button;
	let buttonLink;
	let buttonWidth = 0;
	let buttonHeight = 0;
	let buttonX = 0;
	let buttonY = 0;
	let mouseOffsetX = 0;
	let mouseOffsetY = 0;

	export let cta = false;
	export let variant = 'primary';

	let query = '(max-width: 667px)';

	let deviceIsMobile = false;

	let hovering = false;

	let scale = spring(1, {
		stiffness: 0.2,
		damping: 0.3
	});

	let translate = spring(
		{ x: 0, y: 0 },
		{
			stiffness: 0.1,
			damping: 0.8
		}
	);

	function onQueryResult(event) {
		deviceIsMobile = event.detail.queryresult;
	}

	// $: if (cta && !deviceIsMobile) {
	// 	setInterval(flashCTA, 10000);
	// }
	// function flashCTA() {
	// 	if (!hovering) {
	// 		scale.set(1.1);
	// 		setTimeout(() => scale.set(1), 300);
	// 	}
	// }

	const elasticButton = throttle(100, false, (event) => {
		if (!deviceIsMobile) {
			buttonWidth = button.getBoundingClientRect().width;
			buttonHeight = button.getBoundingClientRect().height;
			buttonX = button.getBoundingClientRect().x;
			buttonY = button.getBoundingClientRect().y;

			mouseOffsetX = event.x - buttonX - buttonWidth / 2;
			mouseOffsetY = event.y - buttonY - buttonHeight / 2;

			if (hovering) {
				translate.set({ x: mouseOffsetX * 0.5, y: mouseOffsetY * 0.5 });
			}
		}
	});
</script>

<MediaQuery on:queryresult={onQueryResult} {query} />

<div
	class="button"
	bind:this={button}
	on:mouseenter={() => {
		hovering = true;
		if (!deviceIsMobile) {
			scale.set(1.15);
		}
	}}
	on:mousemove={elasticButton}
	on:mouseleave={() => {
		scale.set(1);
		hovering = false;
		translate.set({ x: 0, y: 0 });
	}}
	on:mouseup={() => {
		if (!deviceIsMobile) {
			scale.set(1.15);
		}
	}}
	on:mousedown={() => scale.set(1)}
	on:touchstart={() => scale.set(0.95)}
	on:touchend={() => scale.set(1)}
	style="transform: scale({$scale})"
>
	<a
		href="/"
		bind:this={buttonLink}
		class="button-link {variant} no-select"
		style="transform: translate({$translate.x}px, {$translate.y}px)"
		on:click={sendMessage}
	>
		<span
			class="button__inner"
			style="transform: translate({$translate.x * 0.2}px, {$translate.y * 0.2}px)"
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
		</span>
	</a>
</div>

<style lang="scss">
	.icon {
		display: inline-flex;
		vertical-align: top;
	}
	.leading {
		margin-right: var(--spacing-02);
	}
	.trailing {
		margin-left: var(--spacing-02);
	}
	.primary {
		background-color: var(--color-accent--blue--transparent);
		color: var(--color-accent--blue--opaque);
	}
	.button {
		width: fit-content;
	}
	.button-link {
		display: block;
		width: fit-content;
		backdrop-filter: var(--backdrop-filter);
		font-size: var(--font-size--normal);
		white-space: nowrap;
		border: 0px solid transparent;
		line-height: 1;
		text-align: center;
		padding: var(--spacing-02) var(--spacing-02-plus);
		font-family: inherit;
		font-weight: bold;
		clip-path: var(--squircle);
		will-change: transform;
		backface-visibility: hidden;
		transform: translateZ(0);
		-webkit-font-smoothing: subpixel-antialiased;
		font-smoothing: subpixel-antialiased;
		transition: background-color 2s var(--easing--quint), color 2s var(--easing--quint);
	}
	.button__inner {
		display: block;
	}
	@media (max-width: 667px) {
		.button-link {
			padding: var(--spacing-03) var(--spacing-04);
			width: unset;
		}
	}
</style>
