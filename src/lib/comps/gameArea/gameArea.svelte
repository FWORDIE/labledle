<script lang="ts">
	import type { lableObject } from '$lib/types';
	export let data: lableObject[];
	import ImageArea from './imageArea.svelte';
	import AnswerArea from './answerArea.svelte';
	import InputArea from './inputArea.svelte';
	import { itemNum } from '$lib/store/store';
</script>

<div class="gameArea">
    <ImageArea thisData={data[$itemNum]}></ImageArea>
    <AnswerArea thisData={data[$itemNum]}></AnswerArea>
    <InputArea {data}></InputArea>
</div>

<style lang="scss">
    .gameArea{
        position: relative;
        height: 100%;
        overflow: hidden;
        // padding: var(--padding);
    }
</style>
