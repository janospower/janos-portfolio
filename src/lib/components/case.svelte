<script>
	export let title = '';
	export let date = '';
	export let body = '';
	export let tags = [];
	export let imgURL = '/images/example-ui/example-ui.svg';
	export let cover = false;

	export let background;

	export let top = false;
	export let right = false;
	export let bottom = false;
	export let left = false;
</script>

<div class="case-wrapper">
	<figure
		class:cover
		class:top
		class:right
		class:bottom
		class:left
		style="background: {background}"
	>
		<img loading="lazy" src={imgURL} alt="Case hero" />
	</figure>
	<div class="description">
		<p class="date">{date}</p>
		<h3>{title}</h3>
		<p class="body">{@html body}</p>
		<div class="tags">
			{#each tags as name, i}
				<span class="tag">{name.replace(' ', ' ')}</span>
			{/each}
		</div>
	</div>
</div>

<style lang="scss">
	figure {
		background-color: var(--color-neutral--800);
		height: calc(100vw - var(--spacing-05));
		padding: var(--spacing-03);
		transition: background-color 1.5s var(--easing--quint);
		clip-path: var(--squircle);
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	figure.cover {
		padding: 0;
	}
	figure.top {
		padding-top: 0;
		& img {
			object-position: center top;
		}
	}
	figure.right {
		padding-right: 0;
	}
	figure.bottom {
		padding-bottom: 0;
		& img {
			object-position: center bottom;
		}
	}
	figure.left {
		padding-left: 0;
	}
	img {
		height: 100%;
		width: 100%;
		object-fit: contain;
	}
	.cover img {
		object-fit: cover;
	}
	.description {
		margin: var(--spacing-04) var(--spacing-03);
	}
	.date {
		color: var(--color-neutral--500);
		font-size: var(--font-size--small);
	}
	h3 {
		margin: var(--spacing-02) 0;
	}
	.tags {
		margin-top: var(--spacing-04);
		display: flex;
		flex-wrap: wrap;
	}
	.tag {
		padding: var(--spacing-00) var(--spacing-01);
		border-radius: 3px;
		color: var(--color-neutral--300);
		background-color: var(--color-neutral--800);
		margin-right: var(--spacing-02);
		font-size: var(--font-size--small);
		margin-bottom: var(--spacing-02);
	}
	.case-wrapper {
		height: 100%;
		white-space: normal;
	}

	@media (max-width: 667px) {
		.body,
		.tags {
			display: none;
		}
	}
	@media (min-width: 667px) {
		.case-wrapper {
			display: flex;
		}
		figure {
			height: 100%;
			max-height: 100%;
			width: 62.5%;
			min-width: 62.5%;
			padding: var(--spacing-05);
		}
		.description {
			margin: 0 var(--spacing-04);
		}
	}
</style>
