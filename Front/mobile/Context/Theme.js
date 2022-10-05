import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
	const [dark, setDark] = useState(true);
	const [backTheme, setBackTheme] = useState("white");
	const [notBackTheme, setNotBackTheme] = useState("black");
	const [textTheme, setTextTheme] = useState("black");
	const [notTextTheme, setNotTextTheme] = useState("white");

	useEffect(() => {
		changeTheme();
	}, [dark]);

	const changeTheme = () => {
		if (dark) {
			setBackTheme("black");
			setNotBackTheme("white");
			setTextTheme("white");
			setNotTextTheme("black");
			setDark(true);
		} else {
			setBackTheme("white");
			setNotBackTheme("black");
			setTextTheme("black");
			setNotTextTheme("white");

			setDark(false);
		}
	};

	return (
		<ThemeContext.Provider
			value={{
				dark,
				setDark,
				textTheme,
				backTheme,
				notBackTheme,
				notTextTheme,
			}}>
			{children}
		</ThemeContext.Provider>
	);
};
