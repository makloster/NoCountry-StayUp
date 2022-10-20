import { useHeaderHeight } from "@react-navigation/elements";
import { useContext } from "react";
import { StyleSheet, useWindowDimensions } from "react-native";
import { ThemeContext } from "../../../Context/Theme";

export const ConfirmReservationStyles = () => {
	const { textTheme, notTextTheme, backTheme, notBackTheme } =
		useContext(ThemeContext);
	const heightHeader = useHeaderHeight();
	const { width, height } = useWindowDimensions();

	return StyleSheet.create({
		containerBig: {
			width: width,
			backgroundColor: backTheme,
			marginTop: heightHeader,
		},
		containerConfirmation: {
			alignSelf: "center",
			width: 350,
			minHeight: height,
			display: "flex",
			flexDirection: "column",
			justifyContent: "flex-start",
			alignItems: "center",
		},
		imageWithIcons: {
			width: 200,
			height: 120,
		},
		containerInfoGroup: {
			width: 300,
			height: 100,
			display: "flex",
			flexDirection: "row",
			justifyContent: "flex-start",
			alignItems: "center",
		},
		iconGroup: {
			width: 51,
			height: 51,
			marginRight: 10,
		},
		imageGroup: {
			width: 330,
			height: 220,
			borderRadius: 5,
			marginBottom: 5,
			backgroundColor: backTheme,
		},
		confirmReservation: {
			fontSize: 20,
			fontFamily: "ChivoBold",
			color: textTheme,
		},
		nameGroup: {
			fontFamily: "ChivoBold",
			fontSize: 16,
			color: textTheme,
		},
		infoGroup: {
			fontFamily: "ChivoBold",
			fontSize: 16,
			color: textTheme,
		},
		makeReservationButton: {
			width: 140,
			height: 44,
			borderRadius: 10,
			backgroundColor: "#F6163C",
		},
		makeReservationButtonText: {
			color: "white",
			textAlign: "center",
			lineHeight: 45,
			fontSize: 20,
			fontFamily: "ChivoBold",
		},
	});
};
