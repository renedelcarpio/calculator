import React from 'react';
import './scss/app.scss';
import Buttons from './components/Buttons';
import Header from './components/Header';
import Screen from './components/Screen';
import ThemeProvider from './context/ThemeContext';

const App = () => {
	return (
		<ThemeProvider>
			<div className='background'>
				<div className='calculator'>
					<Header />
					<Screen />
					<Buttons />
				</div>
			</div>
		</ThemeProvider>
	);
};

export default App;
