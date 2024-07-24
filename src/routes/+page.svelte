<script>
	import Excali from '$lib/excalidraw/AsyncExcalidraw.svelte';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<header>
	<h1>Violet: Convert Handwriting to Text</h1>
</header>

<Excali />

<style>
	h1 {
		width: 100%;
	}
</style>
