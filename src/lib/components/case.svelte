<script>
	export let title = 'Title';
	export let date = '2022';
	export let body = 'Body text';
	export let highlightColor = '0, 0, 0';
	export let tags = ['tag 1', 'tag 2'];
</script>

<div class="case-wrapper">
	<figure>
		<img
			src="/images/example-ui/example-ui.svg"
			alt="Case hero"
			style="filter: 
            drop-shadow(0px 2.2px 3.74px rgba({highlightColor}, 0.045))
			drop-shadow(0px 5.56px 9.47px rgba({highlightColor}, 0.0646))
			drop-shadow(0px 11.34px 19.32px rgba({highlightColor}, 0.08))
			drop-shadow(0px 23.36px 39.79px rgba({highlightColor}, 0.0954))
			drop-shadow(0px 64px 109px rgba({highlightColor}, 0.115));"
		/>
	</figure>
	<div class="description">
		<h3>{title}</h3>
		<p>{date}</p>
		<p>{body}</p>
	</div>
</div>

<style lang="scss">
	.case-wrapper {
		height: 100%;
		display: flex;
	}
	figure {
		background-color: var(--color-neutral--800);
		height: 100%;
		transition: background-color 2s var(--easing--quint);
		clip-path: var(--squircle);
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 62.5%;
	}
	.description {
		flex-grow: 1;
		margin: 0 var(--spacing-04);
	}
</style>
