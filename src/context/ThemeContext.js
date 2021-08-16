import React, { createContext, useState } from 'react';
import '../scss/global.scss';

export const ThemeContext = createContext();

const darkmode = 'darkmode';
const lightmode = 'lightmode';
const thirdmode = 'thirdmode';

const themes = {
	dark: darkmode,
	light: lightmode,
	third: thirdmode,
};

const ThemeProvider = ({ children }) => {
	const [theme, setTheme] = useState(themes.dark);

	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};

export default ThemeProvider;
