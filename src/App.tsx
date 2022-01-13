import { FC, useLayoutEffect } from 'react';
import './App.css';
import Cards from './components/Cards';
import Header from './components/Header';
import SwipeButtons from './components/SwipeButtons';

const App: FC = () => {
	useLayoutEffect(() => {
		document.title = 'Tinder Clone by Armando Rivas 2022';
	});
	return (
		<div className='App'>
			<Header />
			{/* Cartas */}
			<Cards />
			{/* Botones */}
			<SwipeButtons />
		</div>
	);
};

export default App;
