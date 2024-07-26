import { screen, render } from '@testing-library/svelte';
import AsyncExcalidraw from './AsyncExcalidraw.svelte';

import { describe, test, expect } from 'vitest';

describe('AsyncExcalidraw Tests', () => {
	test('Appears', () => {
		render(AsyncExcalidraw);
		// see if board appears by checking for number 7 (draw key)
		expect(screen.getByLabelText('7'));
		//.toBeInTheDocument()
	});
});
