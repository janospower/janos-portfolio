<script>
	export let size = 'small';
	export let circle = false;
</script>

{#if circle}
	{#if size === 'small'}
		<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16ZM5.95956 4.62623C6.35008 4.2357 6.98325 4.2357 7.37377 4.62623C7.7643 5.01675 7.7643 5.64992 7.37377 6.04044L6.41421 7H12C12.5523 7 13 7.44772 13 8C13 8.55229 12.5523 9 12 9H6.41421L7.37377 9.95956C7.7643 10.3501 7.7643 10.9833 7.37377 11.3738C6.98325 11.7643 6.35008 11.7643 5.95956 11.3738L3.29289 8.70711C2.90237 8.31658 2.90237 7.68342 3.29289 7.29289L5.95956 4.62623Z"
				fill="currentColor"
			/>
		</svg>
	{/if}

	{#if size === 'medium'}
		<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24ZM9.29289 7.29289C9.68342 6.90237 10.3166 6.90237 10.7071 7.29289C11.0976 7.68342 11.0976 8.31658 10.7071 8.70711L8.41421 11H18C18.5523 11 19 11.4477 19 12C19 12.5523 18.5523 13 18 13H8.41421L10.7071 15.2929C11.0976 15.6834 11.0976 16.3166 10.7071 16.7071C10.3166 17.0976 9.68342 17.0976 9.29289 16.7071L5.29289 12.7071C4.90237 12.3166 4.90237 11.6834 5.29289 11.2929L9.29289 7.29289Z"
				fill="currentColor"
			/>
		</svg>
	{/if}
{:else}
	{#if size === 'small'}
		<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M12 7.99998H4M4 7.99998L6.66667 5.33331M4 7.99998L6.66667 10.6666"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</svg>
	{/if}

	{#if size === 'medium'}
		<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M18 12H6M6 12L10 8M6 12L10 16"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</svg>
	{/if}
{/if}
