import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { ResultContext } from '../context/ResultContext';
import '../scss/buttons.scss';

const Buttons = () => {
	const { theme } = useContext(ThemeContext);

	const { result, setResult } = useContext(ResultContext);

	const handleClick = (e) => {
		setResult(result.concat(e.target.value));
	};

	const clear = () => {
		setResult('');
	};

	const handleDelete = () => {
		setResult(result.slice(0, -1));
	};

	const handleCalculate = () => {
		try {
			setResult(eval(result).toString());
		} catch (err) {
			setResult('Error');
		}
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
				value='7'
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
				value='8'
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
				value='9'
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
				value='DEL'
				onClick={handleDelete}
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
				value='4'
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
				value='5'
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
				value='6'
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
				value='+'
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
				value='1'
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
				value='2'
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
				value='3'
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
				value='-'
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
				value='.'
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
				value='0'
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
				value='/'
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
				value='*'
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
				value='RESET'
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
				value='='
				onClick={handleCalculate}
			>
				<h1>=</h1>
			</button>
		</div>
	);
};

export default Buttons;
