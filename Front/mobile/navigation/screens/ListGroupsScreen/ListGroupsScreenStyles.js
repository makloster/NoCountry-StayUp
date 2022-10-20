import { useHeaderHeight } from "@react-navigation/elements";
import { useContext } from "react";
import { StyleSheet, useWindowDimensions } from "react-native";
import { ThemeContext } from "../../../Context/Theme";

export const ListGroupsScreenStyles = () => {
	const { backTheme, textTheme, notBackTheme } = useContext(ThemeContext);
	const { width, height } = useWindowDimensions();
	const heightHeader = useHeaderHeight();

	return StyleSheet.create({
		containerBig: {
			width: width,
			backgroundColor: backTheme,
			marginTop: heightHeader,
		},
		containerListGroupScreen: {
			alignSelf: "center",
			width: 340,
			display: "flex",
			flexDirection: "column",
			justifyContent: "flex-start",
			alignItems: "flex-start",
		},
		containerGroup: {
			width: 300,
			height: 65,
			display: "flex",
			flexDirection: "row",
			justifyContent: "flex-start",
			alignItems: "center",
			marginTop: 5,
		},
		iconGroup: {
			width: 51,
			height: 51,
		},
		containerGroupInfo: {
			display: "flex",
			flexDirection: "column",
			justifyContent: "center",
			alignItems: "flex-start",
			paddingLeft: 10,
		},
		groupInfoName: {
			fontSize: 16,
			color: textTheme,
			fontFamily: "ChivoBold",
		},
		groupInfoDate: {
			fontSize: 14,
			color: textTheme,
			fontFamily: "ChivoRegular",
		},
		containerCreateGroup: {
			alignSelf: "center",
			width: width > 360 ? 360 : width,
			paddingTop: 10,
			paddingBottom: 10,
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			backgroundColor: notBackTheme,
			alignSelf: "center",
		},
		buttonCreateGroup: {
			width: 136,
			height: 44,
			borderRadius: 10,
			backgroundColor: "#F6163C",
		},
		buttonCreateGroupText: {
			color: "white",
			textAlign: "center",
			lineHeight: 44,
			fontSize: 20,
			fontFamily: "ChivoRegular",
		},
	});
};
