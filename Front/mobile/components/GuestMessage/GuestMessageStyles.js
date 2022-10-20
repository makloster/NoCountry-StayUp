import { useContext } from "react";
import { StyleSheet } from "react-native";
import { ThemeContext } from "../../Context/Theme";

export const GuestMessageStyles = () => {
	const { textTheme } = useContext(ThemeContext);
	return StyleSheet.create({
		containerLogInMessage: {
			alignSelf: "center",
			width: 350,
			padding: 15,
		},
		logInMessage: {
			fontSize: 18,
			fontFamily: "ChivoBold",
			color: textTheme,
			marginBottom: 5,
		},
		logInSubtitle: {
			fontSize: 14,
			fontFamily: "ChivoRegular",
			color: textTheme,
		},
		buttonLogIn: {
			alignSelf: "center",
			width: 315,
			backgroundColor: "#F6163C",
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
			height: 58,
			borderRadius: 15,
		},
		buttonLogInText: {
			fontSize: 18,
			color: "white",
			fontFamily: "ChivoBold",
		},
	});
};
