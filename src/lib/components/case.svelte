<script>
	export let title = 'Title of Project';
	export let date = '2022';
	export let body =
		'Lorem ipsum dolor sit amet consectetur adipisicing elit. A minima ex, dignissimos optio quaerat consequuntur tempore aut nam expedita placeat distinctio soluta tenetur blanditiis doloribus, quasi in repellat et laudantium.';
	export let highlightColorHSLA = { h: 0, s: '50%', l: '50%', a: 0.1 };
	let highlightColor = `${highlightColorHSLA.h}, ${highlightColorHSLA.s}, ${highlightColorHSLA.l}`;
	let backgroundColor = `${highlightColorHSLA.h}, 100%, 50%, 0.07`;
	let color = `${highlightColorHSLA.h}, 100%, 10%`;
	export let tags = [
		{ name: 'Tag Name 1', certified: false },
		{ name: 'Tag Name 2', certified: false }
	];
	export let imgURL = '/images/example-ui/example-ui.svg';
</script>

<div class="case-wrapper">
	<figure>
		<img loading="lazy" src={imgURL} alt="Case hero" />
	</figure>
	<div class="description">
		<p class="date">{date}</p>
		<h3>{title}</h3>
		<p class="body">{@html body}</p>
		<div class="tags">
			{#each tags as { name, certified }, i}
				<span class="tag" style="color: hsl({color}); background-color: hsla({backgroundColor})"
					>{name.replace(' ', ' ')}</span
				>
			{/each}
		</div>
	</div>
</div>

<style lang="scss">
	figure {
		background-color: var(--color-neutral--800);
		height: calc(100vw - var(--spacing-05));
		padding: var(--spacing-05);
		transition: background-color 2s var(--easing--quint);
		clip-path: var(--squircle);
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	img {
		height: 100%;
		width: 100%;
		object-fit: contain;
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
			padding: var(--spacing-10);
		}
		.description {
			margin: 0 var(--spacing-04);
		}
	}
</style>
