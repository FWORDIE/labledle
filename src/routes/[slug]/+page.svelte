<script lang="ts">
	import About from '$lib/comps/about.svelte';
	import GameArea from '$lib/comps/gameArea/gameArea.svelte';
	import { random } from '$lib/funcs';
	import {
		itemNum,
		maskSwitchesDummy,
		debug,
		exclude,
		rotate,
		appState,
		showImg
	} from '$lib/store/store';
	import type { lableObject } from '$lib/types';
	import dataInfo from '$lib/valTestingPrunedViewBoxSorted.json';
	$: total = dataInfo.length;
	import { onMount } from 'svelte';
    export let data;
	onMount(() => {
		$itemNum = parseInt(data.num);
	});
	let maskData = new Array(1000).map(() => {
		return [];
	});

	const increment = () => {
		changeDummy();

		if ($itemNum < dataInfo.length - 1) {
			$itemNum++;
		} else {
			$itemNum = 0;
		}
	};

	const decrement = () => {
		changeDummy();

		if ($itemNum > 0) {
			$itemNum--;
		} else {
			$itemNum = dataInfo.length - 1;
		}
	};

	const changeDummy = () => {
		$maskSwitchesDummy[$itemNum] = dataInfo[$itemNum].maskSwitches;
		console.log($maskSwitchesDummy, $exclude, $rotate, dataInfo);
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

	let selected: lableObject;
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
