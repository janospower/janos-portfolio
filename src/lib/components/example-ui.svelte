<script>
	import Parallax from './parallax.svelte';
</script>

<figure>
	<Parallax rate={96} growBy={-0.3}>
		<img
			class="background"
			src="/images/example-ui/example-ui.svg"
			alt="Example of a mobile user interface"
		/>
	</Parallax>
	<div class="foreground">
		<Parallax rate={128} growBy={-0.3}>
			<img
				src="/images/example-ui/example-ui__highlight.svg"
				alt="Example of a mobile user interface highlight"
			/>
		</Parallax>
	</div>
</figure>

<style lang="scss">
	figure {
		position: relative;
		transform: rotate(-7deg);
	}
	.foreground {
		position: absolute;
		left: -5px;
		top: 125px;
	}
</style>
