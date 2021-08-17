import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import '../scss/header.scss';

const Header = () => {
	let { theme, setTheme } = useContext(ThemeContext);

	const handleClick = () => {
		setTheme(theme > 2 ? (theme = 1) : theme + 1);
	};

	return (
		<div className='header'>
			<h1 className='text'>calc</h1>
			<div className='header__toogle'>
				<button className='toogle__button' onClick={handleClick}>
					THEME
				</button>
				<div className='toogle__buttons'>
					<span className={theme === 1 ? 'toogle dark' : 'toogle'}>1</span>
					<span className={theme === 2 ? 'toogle light' : 'toogle'}>2</span>
					<span className={theme === 3 ? 'toogle third' : 'toogle'}>3</span>
				</div>
			</div>
		</div>
	);
};

export default Header;
