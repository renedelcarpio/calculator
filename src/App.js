import React from 'react';
import './scss/app.scss';
import Buttons from './components/Buttons';
import Header from './components/Header';
import Screen from './components/Screen';
import ThemeProvider from './context/ThemeContext';
import ResultProvider from './context/ResultContext';

const App = () => {
	return (
		<ThemeProvider>
			<ResultProvider>
				<div className='background'>
					<div className='calculator'>
						<Header />
						<Screen />
						<Buttons />
					</div>
				</div>
			</ResultProvider>
		</ThemeProvider>
	);
};

export default App;
