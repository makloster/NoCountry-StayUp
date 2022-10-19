import { useHeaderHeight } from "@react-navigation/elements";
import { useContext } from "react";
import { StyleSheet, useWindowDimensions } from "react-native";
import { ThemeContext } from "../../../Context/Theme";

export const NotificationsScreenStyles = () => {
	const { textTheme, notTextTheme, backTheme, notBackTheme } =
		useContext(ThemeContext);
	const { width, height } = useWindowDimensions();
	const heightHeader = useHeaderHeight();

	return StyleSheet.create({
		containerBig: {
			width: width,
			backgroundColor: backTheme,
			paddingTop: heightHeader,
			paddingLeft: 15,
			paddingRight: 15,
		},
		containerOptions: {
			width: 330,
			height: 40,
			display: "flex",
			flexDirection: "row",
			justifyContent: "center",
			alignItems: "center",
		},
		lineNotification: {
			width: "50%",
			height: 2,
			backgroundColor: notBackTheme,
			alignSelf: "flex-start",
		},
		optionsText: {
			width: "50%",
			textAlign: "center",
			fontFamily: "ChivoRegular",
			fontSize: 16,
			color: textTheme,
		},
		containerSections: {
			width: 330,
			minHeight: height,
			display: "flex",
			flexDirection: "column",
			justifyContent: "flex-start",
			alignItems: "center",
		},
		containerNotification: {
			width: 330,
			height: 110,
			display: "flex",
			flexDirection: "column",
			justifyContent: "center",
			alignItems: "center",
		},
		containerNotificationInfo: {
			display: "flex",
			flexDirection: "row",
			justifyContent: "flex-start",
			alignItems: "center",
			alignSelf: "flex-start",
		},
		containerNotificationText: {
			width: 240,
			display: "flex",
			flexDirection: "row",
			flexWrap: "wrap",
			justifyContent: "flex-start",
			alignItems: "center",
			color: textTheme,
		},
		notificationText: {
			fontSize: 16,
			fontFamily: "ChivoRegular",
			color: textTheme,
		},
		notificationTextBold: {
			fontSize: 16,
			fontFamily: "ChivoBold",
			color: textTheme,
		},
		notificationButtonsText: {
			fontSize: 18,
			fontFamily: "ChivoRegular",
			color: "white",
		},
		iconGroup: {
			width: 51,
			height: 51,
			marginRight: 10,
		},
		makeReservationButton: {
			width: 239,
			height: 34,
			marginTop: 5,
			borderRadius: 20,
			backgroundColor: "#F6163C",
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
		},
		messageToButton: {
			width: 239,
			height: 34,
			marginTop: 5,
			borderRadius: 20,
			backgroundColor: notBackTheme,
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
		},
		messageToButtonText: {
			fontSize: 18,
			fontFamily: "ChivoRegular",
			color: notTextTheme,
		},
		containerNotificationButtons: {
			marginTop: 10,
			display: "flex",
			flexDirection: "row",
		},
		buttonJoin: {
			width: 113,
			height: 34,
			backgroundColor: "#F6163C",
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
			borderRadius: 20,
			marginRight: 8,
		},
		buttonMessageSmall: {
			width: 113,
			height: 34,
			backgroundColor: notBackTheme,
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
			borderRadius: 20,
			marginLeft: 8,
		},
		linePromotions: {
			width: "50%",
			height: 2,
			backgroundColor: notBackTheme,
			alignSelf: "flex-end",
		},
		imagePromotion: {
			width: width - 25,
			height: 137,
		},
	});
};
