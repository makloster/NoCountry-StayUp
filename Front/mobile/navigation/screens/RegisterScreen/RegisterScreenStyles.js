import { useHeaderHeight } from "@react-navigation/elements";
import { useContext } from "react";
import { StyleSheet, useWindowDimensions } from "react-native";

import { ThemeContext } from "../../../Context/Theme";

export const RegisterScreenStyles = () => {
	const { backTheme, notBackTheme, textTheme } = useContext(ThemeContext);
	const heightHeader = useHeaderHeight();
	const { width, height } = useWindowDimensions();

	return StyleSheet.create({
		containerBig: {
			width: width,
			backgroundColor: backTheme,
		},
		containerRegisterScreen: {
			width: width,
			minHeight: height,
			display: "flex",
			flexDirection: "column",
			justifyContent: "flex-start",
			alignItems: "center",
			paddingTop: heightHeader,
		},
		inputUserInfo: {
			width: 300,
			height: 45,
			lineHeight: 15,
			borderRadius: 15,
			paddingLeft: 25,
			borderColor: notBackTheme,
			color: "#181818",
			borderWidth: 2,
			backgroundColor: "white",
			marginTop: 20,
			fontFamily: "ChivoRegular",
		},
		textInputUserInfo: {
			lineHeight: 45,
			color: "#a7a7a7",
			fontFamily: "ChivoRegular",
		},
		textRegisterScreen: {
			width: 320,
			color: textTheme,
			fontSize: 14,
			textAlign: "justify",
			marginBottom: 15,
			marginTop: 10,
			lineHeight: 20,
			fontFamily: "ChivoRegular",
		},
		containerButtonSelection: {
			display: "flex",
			flexDirection: "row",
			justifyContent: "center",
			alignItems: "center",
			marginTop: 10,
		},
		buttonSelection: {
			width: 100,
			height: 37,
			borderRadius: 50,
			borderColor: notBackTheme,
			borderWidth: 1,
			margin: 5,
		},
		buttonSelected: {
			width: 100,
			height: 37,
			borderRadius: 50,
			borderColor: notBackTheme,
			backgroundColor: "#F6163C",
			borderWidth: 1,
			margin: 5,
		},
		textButtonSelection: {
			color: textTheme,
			fontSize: 19,
			textAlign: "center",
			lineHeight: 37,
			fontWeight: "500",
			fontFamily: "ChivoRegular",
		},
		textButtonSelected: {
			color: "white",
			fontSize: 19,
			textAlign: "center",
			lineHeight: 37,
			fontWeight: "500",
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
	});
};
