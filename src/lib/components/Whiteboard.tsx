import React from 'react';
import { Excalidraw } from '@excalidraw/excalidraw';

function Whiteboard() {
	return (
		<>
			<h1 style={{ textAlign: 'center' }}>Excalidraw Example</h1>
			<div style={{ height: '500px' }}>
				<Excalidraw />
			</div>
		</>
	);
}

export default Whiteboard;
