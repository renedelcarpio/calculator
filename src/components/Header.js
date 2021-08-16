import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import '../scss/header.scss';

const Header = () => {
	const { setTheme } = useContext(ThemeContext);

	const handleClick = (e) => {
		setTheme(e.target.value);
	};

	return (
		<div className='header'>
			<h1 className='text'>calc</h1>
			<div className='header__toogle'>
				<h4 className='text'>THEME</h4>
				<div className='toogle__buttons'>
					<button className='header__toogle--button' onClick={handleClick}>
						1
					</button>
					<button className='header__toogle--button'>2</button>
					<button className='header__toogle--button'>3</button>
				</div>
			</div>
		</div>
	);
};

export default Header;
