import { useHeaderHeight } from "@react-navigation/elements";
import { useContext } from "react";
import { StyleSheet, useWindowDimensions } from "react-native";
import { ThemeContext } from "../../../Context/Theme";

export const ListDateAvailableGroupScreenStyles = () => {
	const { textTheme, notTextTheme, backTheme, notBackTheme } =
		useContext(ThemeContext);
	const heightHeader = useHeaderHeight();
	const { width, height } = useWindowDimensions();

	return StyleSheet.create({
		containerBig: {
			width,
			backgroundColor: backTheme,
			marginTop: heightHeader,
		},
		containerListDates: {
			alignSelf: "center",
			width: 340,
			display: "flex",
			flexDirection: "column",
			justifyContent: "flex-start",
			alignItems: "flex-start",
		},
		containerDate: {
			width: 250,
			height: 60,
			display: "flex",
			flexDirection: "row",
			justifyContent: "flex-start",
			alignItems: "center",
		},
		imageDateGroup: {
			width: 51,
			height: 51,
			marginRight: 10,
		},
		textDateGroup: {
			color: textTheme,
			fontSize: 16,
			fontFamily: "ChivoRegular",
		},
	});
};
