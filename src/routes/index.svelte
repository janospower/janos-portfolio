<script>
	import Sticky from '../lib/components/sticky.svelte';
	import Hero from '../lib/components/hero.svelte';

	let verticalScroll;
</script>

<svelte:head>
	<title>Janos Pauer • Portfolio</title>
	<meta name="description" content="A description of the page" />

	<meta itemprop="name" content="Content Title" />
	<meta itemprop="description" content="Content description less than 200 characters" />
	<meta itemprop="image" content="https://example.com/image.jpg" />

	<meta name="twitter:card" content="summary_large_image" />

	<meta property="og:title" content="Title of the article" />
	<meta property="og:image" content="//media.example.com/ 1234567.jpg" />
	<meta property="og:description" content="Description that will show in the preview" />
	<meta property="og:url" content="//www.example.com/URL of the article" />
</svelte:head>

<svelte:window bind:scrollY={verticalScroll} />

<Sticky gridColumnStart="3" gridColumnEnd="7" sticky={false} verticalScroll={verticalScroll}>
	<Hero />
</Sticky>

<Sticky gridColumnStart="3" gridColumnEnd="7" verticalScroll={verticalScroll}>
	<div class="text--huge">
		<p>Hi.</p>
		<p>My name is Janos.</p>
	</div>
</Sticky>

<Sticky gridColumnStart="3" gridColumnEnd="7" verticalScroll={verticalScroll}>
	Hi.
</Sticky>

<Sticky gridColumnStart="3" gridColumnEnd="7" verticalScroll={verticalScroll}>
	Hi.
</Sticky>

