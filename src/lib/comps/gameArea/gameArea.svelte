<script lang="ts">
	import type { Cat } from '$lib/types';
	export let data: Cat[];
	import ImageArea from './imageArea.svelte';
	import AnswerArea from './answerArea.svelte';
	import InputArea from './inputArea.svelte';
	import { debug, imgNum, itemNum } from '$lib/store/store';
</script>

<div class="gameArea">
	{#key $itemNum + $imgNum}
		{#if $debug}
			<div class="debug">
				N:{$itemNum}, I: {$imgNum}, C:{data[$itemNum].name}
			</div>
		{/if}
		<ImageArea thisData={data[$itemNum]}></ImageArea>

		<AnswerArea thisData={data[$itemNum]}></AnswerArea>
	{/key}
	<InputArea thisData={data[$itemNum]} {data}></InputArea>
</div>

<style lang="scss">
	.gameArea {
		position: relative;
		height: 100%;
		overflow: hidden;
		// padding: var(--padding);
	}
</style>
