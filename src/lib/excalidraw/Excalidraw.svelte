<!-- Code by SrZorro on GitHub from https://github.com/excalidraw/excalidraw/issues/6718 -->

<script lang="ts">
	import ReactComponent from './ReactComponent.svelte';
	import { Excalidraw, MainMenu, exportToBlob } from '@excalidraw/excalidraw';
	import type { ExcalidrawElement } from '@excalidraw/excalidraw/types/element/types.js';
	import type {
		AppState,
		ExcalidrawImperativeAPI,
		ExcalidrawInitialDataState
	} from '@excalidraw/excalidraw/types/types.js';
	import React from 'react';
	import { createEventDispatcher } from 'svelte';

	export let initialData: ExcalidrawInitialDataState = {};
	export let excalidrawAPI: ExcalidrawImperativeAPI;

	// Excalidraw has its own internal API that it uses (which we can use in React)
	// However, because we're creating a wrapper for Excalidraw element, we need to grant
	// Svelte access to Excalidraw's own API and capture it as soon as the element has been initialized
	function setAPI(api: ExcalidrawImperativeAPI) {
		// console.log("SET API");
		excalidrawAPI = api;
		dispatcher('init');
	}

	/**
	 * deploy an event, in form of map, type -> details of event
	 * on init, no details
	 * on change, elements and appstate are details
	 * on blob, blob is detail
	 */
	const dispatcher = createEventDispatcher<{
		init: void;
		change: { elements: ExcalidrawElement[]; state: AppState };
		blob: Blob;
	}>();

	function onChange(elements: ExcalidrawElement[], state: AppState) {
		dispatcher('change', { elements, state });
	}
	const reactMainMenu = React.createElement(MainMenu, null, [
		React.createElement(MainMenu.DefaultItems.SaveAsImage, { key: 'SaveAsImage' }),
		React.createElement(MainMenu.DefaultItems.Export, { key: 'Export' })
	]);
</script>

<!-- ref: when element mounts, sets API -->
<ReactComponent
	{onChange}
	ref={setAPI}
	this={Excalidraw}
	{initialData}
	langCode="en-EN"
	children={reactMainMenu}
/>
