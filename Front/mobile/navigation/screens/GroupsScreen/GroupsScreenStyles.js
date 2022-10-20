import { useHeaderHeight } from "@react-navigation/elements";
import { useContext } from "react";
import { StyleSheet, useWindowDimensions } from "react-native";
import { ThemeContext } from "../../../Context/Theme";

export const GroupsScreenStyles = () => {
	const heightHeader = useHeaderHeight();
	const { dark, backTheme, textTheme, notBackTheme, notTextTheme } =
		useContext(ThemeContext);
	const { width, height } = useWindowDimensions();
	return StyleSheet.create({
		containerBig: {
			width: width,
			backgroundColor: backTheme,
		},
		title: {
			alignSelf: "center",
			width: 350,
			fontFamily: "ChivoRegular",
			fontSize: 25,
			color: textTheme,
			padding: 15,
		},
		cardGroup: {
			alignSelf: "center",
			width: 350,
			marginRight: 15,
			marginLeft: 15,
		},
		containerGroupInfo: {
			display: "flex",
			flexDirection: "row",
			justifyContent: "flex-start",
			alignItems: "center",
			margin: 5,
		},
		groupIcon: {
			width: 51,
			height: 51,
		},
		containerGroupInfoText: {
			display: "flex",
			flexDirection: "column",
			justifyContent: "flex-start",
			alignItems: "flex-start",
			marginLeft: 10,
		},
		groupInfoName: {
			fontFamily: "ChivoBold",
			fontSize: 16,
			color: textTheme,
		},
		groupInfoDate: {
			fontFamily: "ChivoRegular",
			fontSize: 16,
			color: textTheme,
		},
		containerLocalInfo: {
			display: "flex",
			flexDirection: "row",
			justifyContent: "flex-start",
			alignItems: "center",
			marginLeft: 5,
			marginTop: 15,
		},
		imageLocal: {
			width: 130,
			height: 120,
			borderRadius: 15,
		},
		containerLocalInfoText: {
			display: "flex",
			flexDirection: "column",
			justifyContent: "flex-start",
			alignItems: "flex-start",
			marginLeft: 10,
		},
		localName: {
			fontSize: 14,
			fontFamily: "ChivoBold",
			color: textTheme,
		},
		localInfo: {
			fontSize: 14,
			fontFamily: "ChivoRegular",
			color: textTheme,
		},
		localStatus: {
			fontSize: 12,
			fontFamily: "ChivoRegular",
			color: "#F6163C",
		},
		containerButtons: {
			alignSelf: "center",
			width: 340,
			display: "flex",
			flexDirection: "row",
			justifyContent: "space-between",
			alignItems: "center",
			marginTop: 15,
			marginBottom: 10,
		},
		buttonGroup: {
			width: 170,
			height: 34,
			borderRadius: 15,
			backgroundColor: "#f6163c",
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
		},
		textButtonGroup: {
			fontFamily: "ChivoRegular",
			fontSize: 18,
			color: "white",
		},
		buttonCancel: {
			width: 160,
			height: 34,
			borderRadius: 15,
			backgroundColor: notBackTheme,
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
		},
		textButtonCancel: {
			fontFamily: "ChivoRegular",
			fontSize: 18,
			color: notTextTheme,
		},
	});
};
