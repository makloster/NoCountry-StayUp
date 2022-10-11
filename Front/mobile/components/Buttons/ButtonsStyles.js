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
		imageRegisterOtherWays: {
			width: 25,
			height: 25,
		},
		textRegisterOtherWays: {
			color: "#181818",
			width: 200,
			textAlign: "left",
		},
		buttonChangeTheme: {
			width: 30,
			height: 30,
			margin: 10,
			padding: 10,
			borderRadius: 50,
			backgroundColor: "coral",
		},
		textChangeTheme: {},
	});
};
