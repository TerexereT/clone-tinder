import { FC } from 'react';
import './App.css';
import Cards from './components/Cards';
import Header from './components/Header';

const App: FC = () => {
	return (
		<div className='App'>
			<Header />
			{/* Cartas */}
			<Cards />
			{/* Botones */}
		</div>
	);
};

export default App;
