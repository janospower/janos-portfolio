<script>
	import { onMount } from 'svelte';

	export let verticalScroll = 0;
	export let scrollTrigger = -500;
	let letterJ, letterA, letterN, letterO, letterS;
	let letters = [];
	const drawingSpeed = 0.006;

	onMount(() => {
		letters = [letterJ, letterA, letterN, letterO, letterS];
		for (let index = 0; index < letters.length; index++) {
			const letter = letters[index];
			letter.letterDelay = index * 100;
			letter.dashLength = letter.getTotalLength() + 8;
			letter.style.strokeDashoffset = letter.dashLength;
			letter.style.strokeDasharray = letter.dashLength;
		}
	});

	$: letters.forEach((letter) => {
		if (
			letter.dashLength -
				letter.dashLength * (verticalScroll - scrollTrigger - letter.letterDelay) * drawingSpeed <
			0
		) {
			letter.style.strokeDashoffset = 0;
		} else if (
			letter.dashLength -
				letter.dashLength * (verticalScroll - scrollTrigger - letter.letterDelay) * drawingSpeed >
			letter.dashLength
		) {
			letter.style.strokeDashoffset = letter.dashLength;
		} else {
			letter.style.strokeDashoffset =
				letter.dashLength -
				letter.dashLength * (verticalScroll - scrollTrigger - letter.letterDelay) * drawingSpeed;
		}
	});
</script>

<figure>
	<svg
		viewBox="0 0 229 108"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		aria-labelledby="signature-title signature-description"
		role="img"
		preserveAspectRatio="xMidYMid meet"
	>
		<path
			bind:this={letterS}
			d="M221.492 60.0924C218.759 57.6441 213.976 57.9161 210.013 60.0924C206.05 62.2687 194.298 68.2535 193.068 69.0696C191.838 69.8857 192.248 71.7899 197.031 72.0619C201.814 72.334 226.001 71.1098 226.958 74.7823C227.914 78.4547 212.473 84.8475 191.702 87.5679"
			stroke="currentColor"
			stroke-width="4"
			stroke-linecap="round"
		/>
		<path
			bind:this={letterO}
			d="M174.373 72.1191C169.936 72.6239 165.753 70.8573 169.683 67.5767C173.612 64.296 186.163 53.5707 188.951 56.8514C191.74 60.132 171.457 92.1818 161.95 85.999C159.161 83.4754 168.415 71.1097 173.486 69.3432"
			stroke="currentColor"
			stroke-width="4"
			stroke-linecap="round"
		/>
		<path
			bind:this={letterN}
			d="M125.947 60.1321C120.876 63.9175 116.566 69.7218 118.341 73.5072C120.115 77.2926 137.229 65.4316 140.779 62.7819C144.328 60.1321 146.61 61.6462 146.61 65.1793C146.61 68.7123 146.61 77.0402 146.61 78.5544C146.61 80.0685 151.427 80.9518 152.442 83.4754C153.456 85.999 154.723 89.4059 156.498 89.4059"
			stroke="currentColor"
			stroke-width="4"
			stroke-linecap="round"
		/>
		<path
			bind:this={letterA}
			d="M101.988 58.9966C97.1705 57.6086 93.8745 57.8609 92.6068 58.9966C91.3392 60.1322 72.9576 81.2042 71.1829 84.8635C69.4081 88.5227 70.2955 89.6583 71.1829 90.163C72.0702 90.6678 97.4241 64.4223 99.0721 62.782C100.72 61.1416 104.65 59.5013 105.157 61.8987C105.664 64.2961 101.354 83.6017 101.988 85.9991C102.622 88.3965 104.143 89.9107 108.707 84.8635"
			stroke="currentColor"
			stroke-width="4"
			stroke-linecap="round"
		/>
		<path
			bind:this={letterJ}
			d="M63.8681,2C65.9556,71.1365 51.7222,83.9815 35.5909,96.6376C19.4597,109.294 8.26269,106.083 2,104.194"
			stroke="currentColor"
			stroke-width="4"
			stroke-linecap="round"
		/>
	</svg>
</figure>

<style>
	figure {
		flex-grow: 1;
	}
	@media (min-width: 667px) {
		svg {
			margin-top: -9%;
		}
	}
	path {
		stroke-linecap: round;
	}
</style>
