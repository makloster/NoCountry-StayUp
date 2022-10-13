import { useContext } from "react";
import { StyleSheet, useWindowDimensions } from "react-native";
import { ThemeContext } from "../../../Context/Theme";

export const WelcomeScreenStyles = () => {
	const { width, height } = useWindowDimensions();
	const { backTheme } = useContext(ThemeContext);

	return StyleSheet.create({
		containerBig: {
			width: width,
			backgroundColor: backTheme,
		},
		containerScreen: {
			width: width,
			minHeight: height,
			display: "flex",
			flexDirection: "column",
			justifyContent: "center",
			alignItems: "center",
		},
		containerCarousel: {
			width: "100%",
			height: 370,
		},
		logoIcon: {
			width: 250,
			height: 78,
		},
	});
};
