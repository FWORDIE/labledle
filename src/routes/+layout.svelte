<script lang="ts">
	import Header from '$lib/comps/header.svelte';
	import '$lib/scss/global.scss';

</script>

<main>
	<Header></Header>
	<slot></slot>
</main>

<style lang="scss">
	:global(body) {
		background-color: var(--black);
		display: flex;
		justify-content: center;
	}
	main {
		max-width: var(--max-width);
		width: 100%;
		display: flex;
		flex-direction: column;
		min-height: calc(100dvh - var(--largePadding));
		padding: var(--padding);
	}
</style>
