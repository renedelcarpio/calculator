import React, { useContext } from 'react';
import '../scss/screen.scss';
import { ThemeContext } from '../context/ThemeContext';

const Screen = () => {
	let { theme } = useContext(ThemeContext);
	return (
		<div
			className={
				theme === 1
					? 'screen-container dark'
					: theme === 2
					? 'screen-container light'
					: 'screen-container third'
			}
		>
			<h1>Result</h1>
		</div>
	);
};

export default Screen;
