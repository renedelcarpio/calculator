import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import '../scss/buttons.scss';

const Buttons = () => {
	let { theme } = useContext(ThemeContext);
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
			>
				<h1>=</h1>
			</button>
		</div>
	);
};

export default Buttons;
