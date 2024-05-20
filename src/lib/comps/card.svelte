<script lang="ts">
	import { itemNum, maskSwitchesDummy,showImg, exclude,rotate } from '$lib/store/store';
	import type { lableObject } from '$lib/types';
	export let cardData: lableObject;
	let maskSvgNum = 0;
	const increment = () => {
		if (maskSvgNum < cardData.mask_svgs.length - 1) {
			maskSvgNum++;
			return;
		}

		maskSvgNum = 0;
	};

	const decrement = () => {
		if (maskSvgNum > 0) {
			maskSvgNum--;
			return;
		}2

		maskSvgNum = cardData.mask_svgs.length - 1;
	};

    const on_key_down = (event:KeyboardEvent) => {
		if (event.repeat) return;
		if (Number(event.key) && Number(event.key) > 0){
            console.log(event.key)
            cardData.maskSwitches[Number(event.key) -1] = !cardData.maskSwitches[Number(event.key) -1]
            event.preventDefault()
        }
			
	};

</script>

<svelte:window on:keydown={on_key_down} />
<div class="main" class:exclude={$exclude[$itemNum]}>
    <div class="left rel" class:rotate={$rotate[$itemNum]}>
        <img src={cardData.image} alt="" class:hideImg={!$showImg}/>
        {#each cardData.mask_svgs as mask, index}
            {#if cardData.maskSwitches[index]}
                {@html mask}
            {/if}
        {/each}
    </div>
    <div class="right rel" class:rotate={$rotate[$itemNum]}>
        <img src={cardData.image} alt="" class='hideImg'/>
        {#each cardData.mask_svgs as mask, index}
            {#if cardData.maskSwitches[index]}
                {@html mask}
            {/if}
        {/each}
    </div>

</div>
<p>{cardData.name}, {maskSvgNum}</p>
<div>
	{#each cardData.cat_info as cat}
		<span>{cat.namel}/</span>
	{/each}
	<div class="checkboxes">
        <div>-</div>
		{#each cardData.maskSwitches as maskSwitch, index}
			<input
				type="checkbox"
				name="maskswitch_{index}"
				id="maskswitch_{index}"
				bind:checked={cardData.maskSwitches[index]}
			/>
            <label for="maskswitch_{index}">{cardData.labels[index]}</label>
		{/each}
	</div>
</div>
<!-- <div class="buttonbar">
	<button on:click={increment}>+</button>
	<button on:click={decrement}>-</button>
</div> -->

<style lang="scss">
	.main {
        width: 1000px;

        display: flex;
        position: relative;
        &.exclude{
            border: red solid 2px;
        }

        .rel{
            position: relative;

            &.rotate{
                transform: rotate(90deg);
            }
        }
		img {
            // max-height: 500px;
            // max-width: 500px;
			z-index: -1;
            position: relative;
            &.hideImg{
                opacity: 0;
            }
		}
		:global(svg) {
			position: absolute;
			opacity: 0.8;
            top: 0;
            left: 0;
            pointer-events: none;

			:global(path) {
				fill: orange !important;
			}
		}
	}
</style>
