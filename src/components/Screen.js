import React, { useContext } from 'react';
import '../scss/screen.scss';
import { ThemeContext } from '../context/ThemeContext';
import { ResultContext } from '../context/ResultContext';

const Screen = () => {
	const { theme } = useContext(ThemeContext);

	const { result } = useContext(ResultContext);

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
			{result && <h1>{result}</h1>}
		</div>
	);
};

export default Screen;
