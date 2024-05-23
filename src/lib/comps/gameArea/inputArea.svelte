<script lang="ts">
	import { answers, gameState, itemNum } from '$lib/store/store';
	import type { Cat } from '$lib/types';
	import Svelecte from 'svelecte'; //@ts-ignore
	import { nanoid } from 'nanoid';
	import { pause, random } from '$lib/funcs';
	import { goto } from '$app/navigation';
	export let data:Cat[];
	let selected: Cat;
	let placeHolder = "What is this segment's label?";
	let inputBox: HTMLElement;

    let listItems = JSON.parse(JSON.stringify(data)).sort((a:Cat,b:Cat) =>{return a.name.localeCompare(b.name)})

	const sumbit = async () => {
		if (selected) {
			selected.id = nanoid();
			$answers = [selected, ...$answers];
			console.log('added', selected.name);

			const autocompleteClearButton = document.querySelector(
				'button.sv-btn-indicator'
			) as HTMLInputElement;

			if (autocompleteClearButton) {
				autocompleteClearButton.click();
			}
		}
	};


	const reset = () => {
		$itemNum = Math.floor(random(0, data.length - 1));
		$answers = [];
		$gameState = 'guessing';
        goto('/'+ random(0, 123456789))
	};
</script>

<div class="inputBox" bind:this={inputBox}>
	<!-- <AutoComplete
		items={data}
		bind:selectedItem={selected}
		labelFieldName="name"
		placeholder={placeHolder}
		hideArrow
		showClear
		maxItemsToShowInList="6"
	/> -->
	{#if $gameState === 'guessing'}
		<Svelecte
			options={listItems}
			labelField="name"
			bind:value={selected}
			valueAsObject
			clearable
			placeholder={placeHolder}
			vlHeight={2}
			on:enterKey={sumbit}
		></Svelecte>
		<button class="button orange" on:click={sumbit}>Submit</button>
	{:else}
		<button class="button orange reset" on:click={reset}>free play</button>
	{/if}
</div>

<style lang="scss">
	.inputBox {
		position: sticky;
		bottom: var(--padding);
		// max-width: calc(var(--max-width) - var(--padding));
		width: 100%;
		// padding: var(--padding);
		display: flex;
		height: var(--extraLargePadding) !important;
		justify-content: space-between;
		--sv-min-height: var(--extraLargePadding);
		--sv-bg: #32363f;
		--sv-disabled-bg: #eee;
		--sv-border: 0px solid #626262;
		--sv-border-radius: 0px;
		--sv-general-padding: 4px;
		--sv-control-bg: var(--sv-bg);
		--sv-item-wrap-padding: 3px 3px 3px 6px;
		--sv-item-selected-bg: #626262;
		--sv-item-btn-color: #ccc;
		--sv-item-btn-color-hover: #ccc;
		--sv-item-btn-bg: #626262;
		--sv-item-btn-bg-hover: var(--green);
		--sv-icon-color: transparent;
		--sv-icon-color-hover: transparent;
		--sv-icon-bg: transparent;
		--sv-icon-size: 20px;
		--sv-color: var(--white);
		--sv-separator-bg: transparent;
		--sv-btn-border: 0;
		--sv-color: var(--white);
		--sv-dropdown-bg: var(--sv-bg);
		--sv-dropdown-border: var(--sv-border);
		--sv-dropdown-offset: 1px;
		--sv-dropdown-width: auto;
		--sv-dropdown-shadow: 0 1px 3px #555;
		--sv-dropdown-height: 20vh;
		--sv-dropdown-active-bg: var(--green);
        --sv-dropdown-active: var(--black);
		--sv-dropdown-selected-bg: var(--green);
		--sv-create-kbd-border: 1px solid #626262;
		--sv-create-kbd-bg: #626262;
		--sv-create-disabled-bg: var(--green);
		--sv-loader-border: 2px solid #626262;
		:global(#sv-svelecte-select-input) {
			color: var(--white);
		}
        :global(.sv-dd-item-active){
			color: var(--black);

        }		
        :global(.sv-item--wrap:hover){
			color: var(--black);

        }			

	}
	.reset {
		width: 100%;
	}
	// :global(.sv-control) {
	// 	width: 100%;
	// 	outline: none;
	// 	height: var(--extraLargePadding) !important;
	// 	background-color: var(--white) !important;
	// 	border: 0px !important;
	// 	border-radius: 0px !important;

	// 	:global(.sv-item--container ) {
	// 		padding: var(--halfPadding) var(--padding) !important;
	// 		font-size: var(--baseFont) !important;
	// 		outline: none;
	// 		height: var(--extraLargePadding) !important;
	// 		background-color: transparent;
	// 		border: solid 0px var(--orange);
	//         color: var(--black) !important;
	// 	}
	// 	:global(.autocomplete-list-item.confirmed) {
	// 		background-color: var(--green) !important;
	// 		color: var(--black) !important;
	// 	}
	// 	:global(.autocomplete-list-item.selected) {
	// 		background-color: var(--green) !important;
	// 		color: var(--black) !important;
	// 	}
	// 	:global(.autocomplete-input:focus) {
	// 		border-color: var(--orange);
	// 		outline: none;
	// 	}
	// }
</style>
