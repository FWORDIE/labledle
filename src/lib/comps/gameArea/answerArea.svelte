<script lang="ts">
	import { answers, appState, gameState } from '$lib/store/store';
	import type { lableObject } from '$lib/types';
	import { quintOut } from 'svelte/easing';
	import { fly, slide } from 'svelte/transition';
	import Answer from './answer.svelte';
	import About from '../about.svelte';
	export let thisData: lableObject;
	$: correctCats = thisData.cat_info;
</script>

<div class="answers">
	{#if $answers.length < 1}
		<div class="intro" transition:fly={{ delay: 0, duration: 500, easing: quintOut, y: 100 }}>
			<p>Welcome to Labeladle</p>
			<p>Your task is to guess the AI generated label for the highlighted segment.</p>
			<p>Every wrong answer will reveal overlapping correct catogories in green.</p>
			<div class="answer s--sogsqurOxPw" style="">
				<span class="guessing">e.g. </span>
				<div class="cat">
					<p class=" correct">artifact</p>
					<p class="">/</p>
				</div>
				<div class="cat">
					<p class=" correct">instrumentality</p>
					<p class="">/</p>
				</div>
				<div class="cat">
					<p class=" correct">container</p>
					<p class="">/</p>
				</div>
				<div class="cat">
					<p class=" correct">wheeled vehicle</p>
					<p class="">/</p>
				</div>
				<div class="cat">
					<p class=" correct">self-propelled vehicle</p>
					<p class="">/</p>
				</div>
				<div class="cat">
					<p class="">motor vehicle</p>
					<p class="">/</p>
				</div>
				<div class="cat">
					<p class="">truck</p>
					<p class="">/</p>
				</div>
				<div class="cat">
					<p class="">van</p>
					<p class="">/</p>
				</div>
				<div class="cat"><p class="">police van</p></div>
			</div>
			<p>You have 5 attempts to guess the right label.</p>
		</div>
	{/if}
	{#if $gameState != 'guessing'}
		<div class="finalText {$gameState}">
			<span class="gameState"
				>{$gameState}
				{#if $gameState == 'success'}
					, you got it in {$answers.length} trys!
				{:else}, here is the correct label:{/if}</span
			>
			{#if $gameState == 'failed'}
				<span>
					{#each thisData.cat_info as cat, i (i)}
						<div class="cat">
							<p class={$gameState}>
								{cat.namel}
							</p>
							{#if i < thisData.cat_info.length - 1}
								<p>/</p>
							{/if}
						</div>
					{/each}
				</span>
			{/if}

			<!-- {#each answer.cat_info as cat, i (i)}
            <div class="cat">
                <p class={$gameState} class:final={$answers.length - index > 5}>
                    {cat.namel}
                </p>
                {#if i < answer.cat_info.length - 1}
                    <p>/</p>
                {/if}
            </div>
        {/each} -->
		</div>
	{/if}
	{#each $answers as answer, index (answer.id)}
		<div class="answer" transition:fly={{ delay: 500, duration: 500, easing: quintOut, y: -100 }}>
			<Answer {correctCats} {index} {answer}></Answer>
		</div>
	{/each}
</div>

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
	.answers {
		overflow: auto;
		height: 100%;
		margin-top: var(--largePadding);
		margin-bottom: var(--extraextraLargePadding);
	}
	.answer {
		margin-block: var(--halfPadding);
		display: flex;
		flex-wrap: wrap;
	}

	.failed {
		color: var(--red) !important;
	}

	.success {
		color: var(--green) !important;
	}

	.finalText {
		.gameState {
			text-transform: capitalize;
		}
		span {
			display: inline;
			display: flex;
			flex-wrap: wrap;
			margin-block: 2px;
			margin-right: 10px;
			color: inherit;
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
	}
</style>
