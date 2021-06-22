import './App.css';
import { useState, useEffect } from 'react';
import MakeGrid from './components/MakeGrid';
import MakeBlock from './components/MakeBlocks';

const App = () => {
	const [playGroundData , setPlayGroundData] = useState(Array.from(Array(20), () => new Array(10).fill(null)));

	return (
		<div className="wrap">
			<div className="header">0</div>
			<MakeGrid playGroundData={playGroundData}/>
			<MakeBlock setPlayGroundData={setPlayGroundData}/>
		</div>
	);
}

export default App;
