import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { ResultContext } from '../context/ResultContext';
import '../scss/buttons.scss';

const Buttons = () => {
	const { theme } = useContext(ThemeContext);

	const { result, setResult } = useContext(ResultContext);

	const handleClick = (e) => {
		setResult(result.concat(e.target.name));
	};

	const clear = () => {
		setResult('');
	};

	return (
		<div
			className={
				theme === 1
					? 'buttons-container dark'
					: theme === 2
					? 'buttons-container light'
					: 'buttons-container third'
			}
		>
			<button
				className={
					theme === 1
						? 'button dark'
						: theme === 2
						? 'button light'
						: 'button third'
				}
				name='7'
				onClick={handleClick}
			>
				<h1>7</h1>
			</button>
			<button
				className={
					theme === 1
						? 'button dark'
						: theme === 2
						? 'button light'
						: 'button third'
				}
				name='8'
				onClick={handleClick}
			>
				<h1>8</h1>
			</button>
			<button
				className={
					theme === 1
						? 'button dark'
						: theme === 2
						? 'button light'
						: 'button third'
				}
				name='9'
				onClick={handleClick}
			>
				<h1>9</h1>
			</button>
			<button
				className={
					theme === 1
						? 'button__del dark'
						: theme === 2
						? 'button__del light'
						: 'button__del third'
				}
				name='DEL'
				onClick={handleClick}
			>
				<h1>DEL</h1>
			</button>
			<button
				className={
					theme === 1
						? 'button dark'
						: theme === 2
						? 'button light'
						: 'button third'
				}
				name='4'
				onClick={handleClick}
			>
				<h1>4</h1>
			</button>
			<button
				className={
					theme === 1
						? 'button dark'
						: theme === 2
						? 'button light'
						: 'button third'
				}
				name='5'
				onClick={handleClick}
			>
				<h1>5</h1>
			</button>
			<button
				className={
					theme === 1
						? 'button dark'
						: theme === 2
						? 'button light'
						: 'button third'
				}
				name='6'
				onClick={handleClick}
			>
				<h1>6</h1>
			</button>
			<button
				className={
					theme === 1
						? 'button dark'
						: theme === 2
						? 'button light'
						: 'button third'
				}
				name='+'
				onClick={handleClick}
			>
				<h1>+</h1>
			</button>
			<button
				className={
					theme === 1
						? 'button dark'
						: theme === 2
						? 'button light'
						: 'button third'
				}
				name='1'
				onClick={handleClick}
			>
				<h1>1</h1>
			</button>
			<button
				className={
					theme === 1
						? 'button dark'
						: theme === 2
						? 'button light'
						: 'button third'
				}
				name='2'
				onClick={handleClick}
			>
				<h1>2</h1>
			</button>
			<button
				className={
					theme === 1
						? 'button dark'
						: theme === 2
						? 'button light'
						: 'button third'
				}
				name='3'
				onClick={handleClick}
			>
				<h1>3</h1>
			</button>
			<button
				className={
					theme === 1
						? 'button dark'
						: theme === 2
						? 'button light'
						: 'button third'
				}
				name='-'
				onClick={handleClick}
			>
				<h1>-</h1>
			</button>
			<button
				className={
					theme === 1
						? 'button dark'
						: theme === 2
						? 'button light'
						: 'button third'
				}
				name='.'
				onClick={handleClick}
			>
				<h1>.</h1>
			</button>
			<button
				className={
					theme === 1
						? 'button dark'
						: theme === 2
						? 'button light'
						: 'button third'
				}
				name='0'
				onClick={handleClick}
			>
				<h1>0</h1>
			</button>
			<button
				className={
					theme === 1
						? 'button dark'
						: theme === 2
						? 'button light'
						: 'button third'
				}
				name='/'
				onClick={handleClick}
			>
				<h1>/</h1>
			</button>
			<button
				className={
					theme === 1
						? 'button dark'
						: theme === 2
						? 'button light'
						: 'button third'
				}
				name='x'
				onClick={handleClick}
			>
				<h1>x</h1>
			</button>
			<button
				className={
					theme === 1
						? 'button__reset dark'
						: theme === 2
						? 'button__reset light'
						: 'button__reset third'
				}
				name='RESET'
				onClick={clear}
			>
				<h1>RESET</h1>
			</button>
			<button
				className={
					theme === 1
						? 'button__equal dark'
						: theme === 2
						? 'button__equal light'
						: 'button__equal third'
				}
				name='='
				onClick={handleClick}
			>
				<h1>=</h1>
			</button>
		</div>
	);
};

export default Buttons;
