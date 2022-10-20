import { useContext } from "react";
import { StyleSheet } from "react-native";
import { ThemeContext } from "../../Context/Theme";

export const ButtonsStyles = () => {
	const { notBackTheme } = useContext(ThemeContext);

	return StyleSheet.create({
		buttonRegisterOtherWays: {
			width: 300,
			height: 45,
			lineHeight: 15,
			borderRadius: 15,
			paddingLeft: 25,
			borderColor: notBackTheme,
			borderWidth: 2,
			backgroundColor: "white",
			display: "flex",
			flexDirection: "row",
			justifyContent: "space-between",
			alignItems: "center",
			marginBottom: 20,
		},
		redButtonLogin: {
			backgroundColor: "#F6163C",
			width: 300,
			height: 55,
			alignSelf: "center",
			borderRadius: 15,
			marginTop: 25,
		},
		textButtonsLogin: {
			fontSize: 20,
			fontWeight: "400",
			textAlign: "center",
			color: "white",
			lineHeight: 55,
			fontFamily: "ChivoRegular",
		},
		imageRegisterOtherWays: {
			width: 25,
			height: 25,
		},
		textRegisterOtherWays: {
			color: "#181818",
			width: 200,
			textAlign: "left",
			fontFamily: "ChivoRegular",
		},
		textChangeTheme: {},
	});
};
