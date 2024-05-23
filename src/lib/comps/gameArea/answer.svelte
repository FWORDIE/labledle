<script lang="ts">
	import { pause } from '$lib/funcs';
	import { answers, gameState } from '$lib/store/store';
	import type { Cat, CatsEntity } from '$lib/types';
	import { onMount } from 'svelte';

	export let correctCats:CatsEntity[];
	export let index: number;
	export let answer:Cat;

	let colouring: boolean[] = [];

	const gameCheck = async () => {
		if ($answers.length - index > 5) return;
		console.log('checking', $answers.length - index);
		if (
			correctCats[correctCats.length - 1].name ===
			answer.cats[answer.cats.length - 1].name
		) {
			console.log('success');
			await pause(500);

			$gameState = 'success';
			return;
		}
		if ($answers.length - index > 4) {
			console.log('failed');
			await pause(500);

			$gameState = 'failed';
			return;
		}
	};

	$: introText = (state: string) => {
		if ($answers.length - index < 6) {
			return `[${$answers.length - index}/5]: `;
		} else {
			return state + ':';
		}
	};

	onMount(async () => {
		colouring = new Array(answer.cats.length).fill(false);
		for (let index = 0; index < answer.cats.length; index++) {
			if (correctCats[index] && correctCats[index].name === answer.cats[index].name) {
				await pause(500);
				colouring[index] = correctCats[index].name === answer.cats[index].name;
			}
		}
		await pause(500);
		gameCheck();
	});
</script>

{#if $answers.length - index < 6 || $gameState !== 'guessing'}
	<span class={$gameState}>{introText($gameState)}</span>
	{#each answer.cats as cat, i (i)}
		<div class="cat">
			<p class:correct={colouring[i]}>
				{cat.name}
			</p>
			{#if i < answer.cats.length - 1}
				<p>/</p>
			{/if}
		</div>
	{/each}
{/if}

<style lang="scss">
	span {
		display: inline;
		display: flex;
		flex-wrap: wrap;
		margin-block: 2px;
		margin-right: 10px;
	}
	.cat {
		display: inline;
		display: flex;
		flex-wrap: wrap;
		margin-block: 2px;
		p {
			margin-block: 0px;

			&.correct {
				color: var(--green);
			}
		}
	}

	.failed.final {
		color: var(--red) !important;
	}
</style>
