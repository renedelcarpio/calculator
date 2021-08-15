import React from 'react';
import './scss/app.scss';
import Buttons from './components/Buttons';
import Header from './components/Header';
import Screen from './components/Screen';

const App = () => {
	return (
		<div className='background'>
			<div className='calculator'>
				<Header />
				<Screen />
				<Buttons />
			</div>
		</div>
	);
};

export default App;
