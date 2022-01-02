<script>
	export let size = 'small';
	export let circle = false;
</script>

{#if size === 'small'}
	<svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg"
		><path
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M2 2.4c0-.8 0-1.3.2-1.6.1-.3.3-.5.6-.6.3-.2.8-.2 1.6-.2h7.2c.8 0 1.3 0 1.6.2.3.1.5.3.6.6.2.3.2.8.2 1.6v11.2c0 .8 0 1.3-.2 1.6-.1.3-.3.5-.6.6-.3.2-.8.2-1.6.2H4.4c-.8 0-1.3 0-1.6-.2a.9.9 0 0 1-.6-.6c-.2-.3-.2-.8-.2-1.6V2.4Zm3.3.1c0-.4.3-.8.7-.8h4a.8.8 0 0 1 0 1.6H6a.8.8 0 0 1-.8-.8Zm6.3 5.6a.8.8 0 0 0-1-1l-3.4 3.3-1.7-1.7a.8.8 0 0 0-1 1l2 2.3c.3.3.8.3 1.1 0l4-4Z"
			fill="currentColor"
		/></svg
	>
{/if}

{#if size === 'medium'}
	<svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"
		><path
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M10.1 1a1 1 0 0 0 0 2h4a1 1 0 1 0 0-2h-4Zm-2 1H5.7l-1 .1a1 1 0 0 0-.5.4v16.3l.1 2.1c.2.4.5.7 1 .9.3.2.9.2 2 .2H17c1.1 0 1.7 0 2.1-.2.4-.2.7-.5 1-.9l.1-2.1V2.6a1 1 0 0 0-.5-.5l-1-.1H16a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2Zm9.6 6.7c.3.3.3.8 0 1l-5.8 6c-.3.2-.8.2-1 0l-3.2-3.2a.7.7 0 1 1 1-1l2.6 2.5 5.4-5.3c.3-.3.8-.3 1 0Z"
			fill="currentColor"
		/></svg
	>
{/if}
