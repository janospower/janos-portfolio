<script>
	import Credential from '../icons/credential.svelte';
	import IntersectionObserver from 'svelte-intersection-observer';

	let wrapper;
	let wrapperIsVisible = false;

	export let skillName = '';
	export let credentialType = '';
	export let entryDelay = 0;
</script>

<IntersectionObserver
	threshold="1"
	element={wrapper}
	on:observe={(e) => {
		wrapperIsVisible = e.detail.isIntersecting;
	}}
>
	<div
		class="certificatation-wrapper fading"
		style="transition-delay: {entryDelay}s"
		class:hidden={!wrapperIsVisible}
		bind:this={wrapper}
	>
		<section>
			<Credential size="medium" />
			<h3>{skillName}</h3>
			<p>{credentialType}</p>
		</section>
	</div>
</IntersectionObserver>

<style lang="scss">
	section {
		background-color: var(--color-neutral--800);
		padding-top: var(--spacing-05);
		padding-bottom: var(--spacing-06);
		clip-path: var(--squircle);
		transition: transform var(--transition--200), background-color 2s var(--easing--quint);
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	h3 {
		margin-top: var(--spacing-03);
		margin-bottom: var(--spacing-02);
	}
	section:hover {
		transform: scale(1.1);
	}
	.intersecting {
		background-color: red;
	}
</style>
