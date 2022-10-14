import { useHeaderHeight } from "@react-navigation/elements";
import { useContext } from "react";
import { StyleSheet, useWindowDimensions } from "react-native";

import { ThemeContext } from "../../../Context/Theme";

export const LoginScreenStyles = () => {
	const { backTheme, notBackTheme } = useContext(ThemeContext);
	const heightHeader = useHeaderHeight();
	const { width, height } = useWindowDimensions();

	return StyleSheet.create({
		containerBig: {
			width: width,
			backgroundColor: backTheme,
		},
		containerEmailScreen: {
			width: width,
			minHeight: height,
			display: "flex",
			flexDirection: "column",
			justifyContent: "flex-start",
			alignItems: "center",
			paddingTop: heightHeader,
		},
		registerInput: {
			width: 300,
			height: 45,
			lineHeight: 15,
			borderRadius: 15,
			paddingLeft: 25,
			borderColor: notBackTheme,
			color: "#181818",
			borderWidth: 2,
			backgroundColor: "white",
			marginTop: 15,
			fontFamily: "ChivoRegular",
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
		errorMessageText: {
			color: "#F6163C",
			width: 300,
			textAlign: "left",
			paddingLeft: 10,
			fontSize: 10,
			marginTop: 5,
			fontFamily: "ChivoRegular",
		},
		containerPassword: {
			width: 300,
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
			position: "relative",
		},
		containerIconHideShow: {
			width: 15,
			height: 15,
			position: "absolute",
			right: 40,
			bottom: 15,
		},
		iconHideShowPassword: {
			width: 15,
			height: 15,
			zIndex: 10,
		},
		containerSeparator: {
			width: "100%",
			height: 10,
			marginTop: 20,
			marginBottom: 20,
			display: "flex",
			flexDirection: "row",
			justifyContent: "center",
			alignItems: "center",
		},
		lineSeparator: {
			width: 140,
			height: 1,
			backgroundColor: notBackTheme,
		},
		circleSeparator: {
			width: 8,
			height: 8,
			marginLeft: 10,
			marginRight: 10,
			borderRadius: 50,
			borderWidth: 1,
			borderColor: "#e4e5e7",
		},
		containerContinueButtonsWays: {
			width: "100%",
			marginTop: 20,
			marginBottom: 20,
			display: "flex",
			flexDirection: "column",
			justifyContent: "center",
			alignItems: "center",
		},
	});
};
