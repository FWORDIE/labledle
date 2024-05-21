<script lang="ts">
	import { answers, gameState, itemNum, showImg } from '$lib/store/store';
	import type { lableObject } from '$lib/types';

	export let thisData: lableObject;
	import { onMount } from 'svelte';

	let loaded = false;
	let failed = false;
	let loading = false;

	onMount(() => {
		const img = new Image();
		img.src = thisData.image;
		loading = true;

		img.onload = () => {
			loading = false;
			loaded = true;
		};
		img.onerror = () => {
			loading = false;
			failed = true;
		};
	});
</script>

<div
	class="imageArea"
	class:success={$gameState == 'success'}
	class:failed={$gameState == 'failed'}
	class:outline={$showImg}
>
	{#if loaded}
		<div class="image">
			<img
				src={thisData.image}
				alt="What Am I"
				class:hidden={$gameState === 'guessing' && !$showImg}
			/>
			{#each thisData.mask_svgs as mask, index}
				{#if thisData.maskSwitches[index]}
					{@html mask}
				{/if}
			{/each}
		</div>
		<div class="guess">
			#{$itemNum}
			{#if $gameState === 'guessing'}undefined{:else}{thisData.name}{/if}
		</div>
	{/if}
</div>

<style lang="scss">
	.imageArea {
		display: flex;
		flex-direction: column;
		--colour: var(--orange);
		max-width: 100%;
		box-sizing: border-box;
		border: solid 2px var(--colour);
		position: relative;
        min-height: 200px;
        pointer-events: none;

		.guess {
			padding: 5px 10px;
			background-color: var(--colour);
			align-self: start;
			position: absolute;
			left: 0;
			bottom: 0;
		}
		.image {
			position: relative;
			width: 100%;

			:global(svg) {
				position: absolute;
				opacity: 1;
				top: 0;
				left: 0;
				pointer-events: none;
				width: 100%;
				height: auto;

				:global(path) {
					fill: var(--colour) !important;
				}
			}
			img {
				// max-height: 50vh;
				// height: 100%;
				width: 100%;
				max-width: 100%;
				margin: 0px;
				padding: 0px;
				display: block;
				// min-width: 40vw;
			}
			img.hidden {
				opacity: 0;
			}
		}

		&.outline {
			--colour: var(--green);
			:global(svg) {
				:global(path) {
					fill: transparent !important;
					fill-opacity: 0.1;

					stroke: var(--colour);
					stroke-width: 2px;
				}
			}
		}

		&.success {
			--colour: var(--green);
			:global(svg) {
				:global(path) {
					fill: transparent !important;
					fill-opacity: 0.1;

					stroke: var(--colour);
					stroke-width: 2px;
				}
			}
		}

		&.failed {
			--colour: var(--red);
			:global(svg) {
				:global(path) {
					fill: transparent !important;
					fill-opacity: 0.1;

					stroke: var(--colour);
					stroke-width: 2px;
				}
			}
		}
	}
</style>
