import { ThemeContext } from "../../../Context/Theme";

import { useHeaderHeight } from "@react-navigation/elements";
import { useContext } from "react";
import { StyleSheet, useWindowDimensions } from "react-native";

export const UserStyles = () => {
	const heightHeader = useHeaderHeight();
	const { dark, backTheme, textTheme } = useContext(ThemeContext);
	const { width, height } = useWindowDimensions();

	return StyleSheet.create({
		containerBig: {
			width: width,
			backgroundColor: backTheme,
			paddingTop: heightHeader,
		},
		textPerfil: {
			alignSelf: "center",
			width: 350,
			fontFamily: "ChivoRegular",
			fontSize: 25,
			color: textTheme,
			padding: 15,
		},
		lineSeparator: {
			alignSelf: "center",
			width: 350,
			height: 1,
			backgroundColor: "white",
		},
		containerProfile: {
			alignSelf: "center",
			width: 340,
			display: "flex",
			flexDirection: "row",
			justifyContent: "flex-start",
			alignItems: "center",
			marginTop: 15,
			marginBottom: 15,
		},
		profilePicture: {
			width: 100,
			height: 100,
		},
		containerProfileInfo: {
			display: "flex",
			flexDirection: "column",
			justifyContent: "flex-start",
			alignItems: "flex-start",
			marginLeft: 10,
		},
		containerProfileInfoName: {
			fontFamily: "ChivoBold",
			fontSize: 20,
			color: textTheme,
			marginBottom: 5,
		},
		containerProfileStatus: {
			display: "flex",
			flexDirection: "row",
			justifyContent: "flex-start",
			alignItems: "center",
			marginBottom: 5,
		},
		logoProfile: {
			width: 80,
			height: 13,
		},
		greenDot: {
			width: 16,
			height: 16,
			marginLeft: 5,
			marginRight: 5,
		},
		profileStatusText: {
			fontFamily: "ChivoBold",
			fontSize: 14,
			color: textTheme,
		},
		groupIcon: {
			width: 21,
			height: 21,
		},
		profileGroupUser: {
			fontFamily: "ChivoRegular",
			fontSize: 14,
			marginLeft: 5,
			color: textTheme,
		},
		containerProfileOptions: {
			alignSelf: "center",
			width: 350,
			display: "flex",
			flexDirection: "column",
			justifyContent: "flex-start",
			alignItems: "flex-start",
		},
		profileOptions: {
			width: 350,
			display: "flex",
			flexDirection: "row",
			justifyContent: "space-between",
			alignItems: "center",
			padding: 16,
		},
		profileOptionsType: {
			display: "flex",
			flexDirection: "row",
			justifyContent: "flex-start",
			alignItems: "center",
		},
		profileOptionsIcons: {
			width: 26,
			height: 26,
		},
		profileOptionsText: {
			fontFamily: "ChivoRegular",
			fontSize: 16,
			color: textTheme,
			marginLeft: 15,
		},
	});
};
