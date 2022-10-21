import { useHeaderHeight } from "@react-navigation/elements";
import { useContext } from "react";
import { StyleSheet, useWindowDimensions } from "react-native";
import { ThemeContext } from "../../../Context/Theme";

export const GroupDetailReservationStyles = () => {
	const { backTheme, textTheme, notBackTheme, notTextTheme } =
		useContext(ThemeContext);
	const { width, height } = useWindowDimensions();
	const heightHeader = useHeaderHeight();

	return StyleSheet.create({
		containerBig: {
			width: width,
			backgroundColor: backTheme,
			paddingTop: heightHeader,
		},
		title: {
			fontFamily: "ChivoRegular",
			fontSize: 14,
			color: textTheme,
			padding: 15,
		},
		cardLocals: {
			alignSelf: "center",
			width: 335,
			marginBottom: 15,
		},
		cardsImage: {
			width: 335,
			height: 310,
			borderRadius: 20,
		},
		containerLocalInfo: {
			alignSelf: "center",
			width: 325,
			display: "flex",
			flexDirection: "column",
			justifyContent: "flex-start",
			alignItems: "flex-start",
		},
		containerLocalText: {
			width: 315,
			display: "flex",
			flexDirection: "row",
			justifyContent: "space-between",
			alignItems: "center",
			marginTop: 5,
		},
		cardLocalTextTitle: {
			fontFamily: "ChivoBold",
			fontSize: 16,
			color: textTheme,
		},
		cardLocalScore: {
			display: "flex",
			flexDirection: "row",
			justifyContent: "center",
			alignItems: "center",
		},
		cardLocalScorePoints: {
			fontFamily: "ChivoRegular",
			fontSize: 16,
			color: textTheme,
		},
		cardLocalSubtitle: {
			fontFamily: "ChivoRegular",
			fontSize: 16,
			color: textTheme,
		},
		containerCardLocalPrice: {
			display: "flex",
			flexDirection: "row",
		},
		cardLocalPrice: {
			fontFamily: "ChivoBold",
			fontSize: 16,
			color: textTheme,
		},
		cardLocalPriceText: {
			fontFamily: "ChivoRegular",
			fontSize: 16,
			color: textTheme,
		},
		localStatus: {
			alignSelf: "center",
			fontSize: 12,
			fontFamily: "ChivoRegular",
			color: "#F6163C",
		},

		containerMakeReservation: {
			height: 70,
			backgroundColor: notBackTheme,
			display: "flex",
			flexDirection: "row",
			justifyContent: "space-around",
			alignItems: "center",
			position: "absolute",
			bottom: 0,
			left: 0,
			right: 0,
			borderBottomColor: backTheme,
			borderBottomWidth: 1,
			zIndex: 10,
		},
		containerMakeReservationInfo: {
			width: 180,
			display: "flex",
			flexDirection: "column",
			justifyContent: "flex-start",
			alignItems: "flex-start",
			marginLeft: 15,
		},
		makeReservationInfoPrice: {
			width: 160,
			color: notTextTheme,
			fontSize: 18,
			textAlign: "left",
			fontFamily: "ChivoBold",
		},
		makeReservationInfoPriceHour: {
			textAlign: "left",
			color: notTextTheme,
			fontSize: 14,
			fontFamily: "ChivoRegular",
		},
		makeReservationInfoText: {
			width: 155,
			color: notTextTheme,
			fontSize: 10,
			textAlign: "left",
			fontFamily: "ChivoBold",
		},
		containerMakeReservationButton: {
			width: 180,
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
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
