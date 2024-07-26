<!-- Code by SrZorro on GitHub from https://github.com/excalidraw/excalidraw/issues/6718 -->

<script lang="ts">
	import { browser } from '$app/environment';
	if (browser) window.process = { env: { IS_PREACT: false } };

	import type { ExcalidrawImperativeAPI } from '@excalidraw/excalidraw/types/types.js';
	let excalidrawAPI: ExcalidrawImperativeAPI;
</script>

{#if browser}
	{#await import('./Excalidraw.svelte')}
		Loading Excalidraw...
	{:then { default: Excalidraw }}
		<svelte:component
			this={Excalidraw}
			bind:excalidrawAPI
			on:change={(evt) => console.log('Excali change', evt.detail)}
		/>
	{/await}
{:else}
	<p>Not browser</p>
{/if}
