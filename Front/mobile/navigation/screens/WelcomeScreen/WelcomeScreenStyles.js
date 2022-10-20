import { useHeaderHeight } from "@react-navigation/elements";
import { useContext } from "react";
import { StyleSheet, useWindowDimensions } from "react-native";
import { ThemeContext } from "../../../Context/Theme";

export const WelcomeScreenStyles = () => {
	const { backTheme } = useContext(ThemeContext);
	const { width, height } = useWindowDimensions();

	return StyleSheet.create({
		containerBig: {
			width: width,
			backgroundColor: backTheme,
			paddingTop: 20,
		},
		containerScreen: {
			width: 350,
			alignSelf: "center",
			minHeight: height,
			display: "flex",
			flexDirection: "column",
			justifyContent: "flex-start",
			alignItems: "center",
		},
		containerCarousel: {
			width: 350,
			height: 370,
		},
		logoIcon: {
			width: 250,
			height: 78,
		},
	});
};
