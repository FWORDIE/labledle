<script lang="ts">
	import { gameType, gameState, itemNum, showImg, imgNum } from '$lib/store/store';
	import type { Cat, ObjectsEntity } from '$lib/types';

	export let thisData: Cat;
	import { onMount, tick } from 'svelte';

	let loaded = false;
	let failed = false;
	let loading = false;
	let imageArea: HTMLImageElement;
	let testImg: HTMLImageElement;
	let loadingMain = true;

	const parseSegData = (
		segmentationAll: ObjectsEntity[],
		a: HTMLImageElement,
		parent: SVGElement
	) => {
		// console.log(parent);
		for (
			let x = 0;
			x < segmentationAll.length;
			x++ // while (parent == undefined) {}
		) {
			// console.log(SVGElement);
			const segmentation = segmentationAll[x].segmentation;
			var n = segmentation.split('/');
			var q = n[0].split(',').map(Number),
				r = document.createElementNS('http://www.w3.org/2000/svg', 'path');
			// console.log(q);
			var m = '';
			for (var u = 1; u < n.length; ++u) {
				for (var w = n[u].split(',').map(Number), z = 0; z < w.length; z += 2)
					(w[z] = (w[z] * a.naturalHeight) / q[0]), (w[z + 1] = (w[z + 1] * a.naturalWidth) / q[1]);
				if (w) {
					//@ts-ignore
					z = 'M' + String(w[1]) + ' ' + String(w[0]);
					//@ts-ignore
					for (var B = 2; B < w.length; B += 2) z += 'L' + String(w[B + 1]) + ' ' + String(w[B]);
					//@ts-ignore
					w = z + ' Z';
					//@ts-ignore
				} else w = '';
				m += w + ' ';
			}
			r.setAttribute('d', m);
			parent.appendChild(r);
		}
		// console.log(`0 0${a.naturalWidth} ${a.naturalHeight}`);
		parent.setAttribute('viewBox', `0 0 ${a.naturalWidth} ${a.naturalHeight}`);
		loadingMain = false;
	};

	onMount(() => {
		const img = new Image();
		img.src = thisData.files[$imgNum].image.url;
		loading = true;

		img.onload = async () => {
			loading = false;
			loaded = true;
			testImg = img;
			await tick();
			parseSegData(thisData.files[$imgNum].objects, testImg, SVGElement);
		};
		img.onerror = () => {
			loading = false;
			failed = true;
		};
	});

	let SVGElement: SVGElement;
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
				src={thisData.files[$imgNum].image.url}
				alt="What Am I"
				class:hidden={$gameState === 'guessing' && !$showImg}
				bind:this={imageArea}
			/>
			<svg viewBox="0 0 640 480" bind:this={SVGElement}> </svg>
		</div>
	{/if}
	<div class="guess">
		#{$itemNum}
		{#if loadingMain}loading...{:else if $gameState === 'guessing'}{$gameType} undefined{:else}{thisData.name}{/if}
	</div>
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
