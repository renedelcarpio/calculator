import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { ResultContext } from '../context/ResultContext';
import '../scss/buttons.scss';

const Buttons = () => {
	const { theme } = useContext(ThemeContext);

	const { result, setResult } = useContext(ResultContext);

	const characters = [7, 8, 9, '+', 4, 5, 6, '-', 1, 2, 3, '*', '.', 0, '/'];

	const handleClick = (e) => {
		setResult(result + e.target.value);
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
			{characters.map((item) => {
				return (
					<button
						className={
							theme === 1
								? 'button dark'
								: theme === 2
								? 'button light'
								: 'button third'
						}
						key={item}
						value={item}
						onClick={handleClick}
					>
						{item}
					</button>
				);
			})}

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
				<h2>DEL</h2>
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
				<h2>RESET</h2>
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
				<h2>=</h2>
			</button>
		</div>
	);
};

export default Buttons;
