<script lang="ts">
	import { goto } from '$app/navigation';
	import { random } from '$lib/funcs';
	import { answers, appState, gameState, itemNum } from '$lib/store/store';

	let aboutText = '?';

	const openAbout = () => {
		if ($appState == 'playing') {
			$appState = 'about';
			aboutText = '<-';
		} else {
			$appState = 'playing';
			aboutText = '?';
		}
	};
	const reset = () => {
		$answers = [];
		$gameState = 'guessing';
		const thisPage = window.location.pathname;

		console.log('goto ' + thisPage);

		goto('/').then(() => goto('/'));
	};
</script>

<header>
	<h1><a href="/" data-sveltekit-reload >Labeladle</a></h1>
	<button class="textLike" on:click={openAbout}>{aboutText}</button>
</header>

<style lang="scss">
	header {
		display: flex;
		justify-content: space-between;
		padding-bottom: var(--padding);
        a{
            text-decoration: none;
            color: var(--white);
            &:hover{
                color: var(--green);
            }
        }
	}
</style>
