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
				d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM10.0404 4.62623C9.64992 4.2357 9.01675 4.2357 8.62623 4.62623C8.2357 5.01675 8.2357 5.64992 8.62623 6.04044L9.58579 7H4C3.44772 7 3 7.44772 3 8C3 8.55229 3.44772 9 4 9H9.58579L8.62623 9.95956C8.2357 10.3501 8.2357 10.9833 8.62623 11.3738C9.01675 11.7643 9.64992 11.7643 10.0404 11.3738L12.7071 8.70711C13.0976 8.31658 13.0976 7.68342 12.7071 7.29289L10.0404 4.62623Z"
				fill="currentColor"
			/>
		</svg>
	{/if}

	{#if size === 'medium'}
		<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24ZM14.7071 7.29289C14.3166 6.90237 13.6834 6.90237 13.2929 7.29289C12.9024 7.68342 12.9024 8.31658 13.2929 8.70711L15.5858 11H6C5.44772 11 5 11.4477 5 12C5 12.5523 5.44772 13 6 13H15.5858L13.2929 15.2929C12.9024 15.6834 12.9024 16.3166 13.2929 16.7071C13.6834 17.0976 14.3166 17.0976 14.7071 16.7071L18.7071 12.7071C19.0976 12.3166 19.0976 11.6834 18.7071 11.2929L14.7071 7.29289Z"
				fill="currentColor"
			/>
		</svg>
	{/if}
{:else}
	{#if size === 'small'}
		<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M4 7.99998H12M12 7.99998L9.33333 5.33331M12 7.99998L9.33333 10.6666"
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
				d="M6 12H18M18 12L14 8M18 12L14 16"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</svg>
	{/if}
{/if}
