<!-- Code by SrZorro on GitHub from https://github.com/excalidraw/excalidraw/issues/6718 -->

<script lang="ts">
	import * as React from 'react';
	import { createRoot } from 'react-dom/client'; // create root node in DOM
	import { afterUpdate, onDestroy } from 'svelte'; // lifecycle

	let container: HTMLElement;

	// root node in DOM to display React component https://react.dev/reference/react-dom/client/createRoot
	let root: ReturnType<typeof createRoot>;
	// once DOM has been updated, run this code
	afterUpdate(() => {
		root = createRoot(container);
		// set props for react component
		const { this: component, children, ...props } = $$props;

		root.render(React.createElement(component, props, children));
	});

	onDestroy(() => {
		root.unmount();
	});
</script>

<div class="reactComponent" bind:this={container} />

<style>
	.reactComponent {
		/* TODO fix height */
		height: 75vh;
		width: 100%;
	}
</style>
