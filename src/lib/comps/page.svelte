<script lang="ts">
	import About from '$lib/comps/about.svelte';
	import GameArea from '$lib/comps/gameArea/gameArea.svelte';
	import { random } from '$lib/funcs';
	import {
		itemNum,
		imgNum,
		debug,
		appState,
		showImg,

		gameType

	} from '$lib/store/store';
	import dataInfo from '$lib/data.json';
	$: total = dataInfo.length;
	import { onMount } from 'svelte';
	import type { gameTypeType } from '$lib/types';
	export let data;
    export let type:gameTypeType

	onMount(() => {
		$itemNum = data.itemNums.catNum;
		$imgNum = data.itemNums.imgNum;
        $gameType = type
	});

	const increment = () => {
		if ($itemNum < dataInfo.length - 1) {
			$itemNum++;
		} else {
			$itemNum = 0;
		}
	};

	const decrement = () => {
		if ($itemNum > 0) {
			$itemNum--;
		} else {
			$itemNum = dataInfo.length - 1;
		}
	};

	const on_key_down = (event: KeyboardEvent) => {
		if (event.key == '&') {
			$debug = !$debug;
		}
		if (event.repeat || !$debug) return;
		switch (event.key) {
			case 'ArrowRight':
				increment();
				// By using `preventDefault`, it tells the Browser not to handle the
				// key stroke for its own shortcuts or text input.
				event.preventDefault();
				break;

			case 'ArrowLeft':
				event.preventDefault();
				decrement();
				break;
			case 'ArrowUp':
				event.preventDefault();
				$showImg = !$showImg;
				break;
			case 'ArrowDown':
				event.preventDefault();
				console.log(dataInfo[$itemNum]);
				break;
		}
	};
</script>

<svelte:window on:keydown={on_key_down} />

{#if $itemNum > 0}
	{#if $appState == 'playing' || $appState == 'intro'}
		<GameArea data={dataInfo}></GameArea>
	{:else if $appState == 'about'}
		<About></About>
	{/if}
{/if}

<style lang="scss">
</style>
