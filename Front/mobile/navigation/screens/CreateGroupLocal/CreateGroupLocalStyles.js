import { useHeaderHeight } from "@react-navigation/elements";
import { useContext } from "react";
import { StyleSheet, useWindowDimensions } from "react-native";
import { ThemeContext } from "../../../Context/Theme";

export const CreateGroupLocalStyles = () => {
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
		containerCreateNewGroup: {
			alignSelf: "center",
			width: 340,
			minHeight: height,
			display: "flex",
			flexDirection: "column",
			justifyContent: "flex-start",
			alignItems: "flex-start",
		},
		containerInfoGroup: {
			alignSelf: "center",
			width: 340,
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
			alignSelf: "center",
			width: 340,
			height: 220,
			borderRadius: 5,
			marginBottom: 5,
			backgroundColor: backTheme,
		},
		containerNameRateCrateGroup: {
			alignSelf: "center",
			width: 335,
			display: "flex",
			flexDirection: "row",
			justifyContent: "space-between",
			alignItems: "center",
		},
		containerNameCrateGroup: {
			display: "flex",
			flexDirection: "row",
			justifyContent: "flex-start",
			alignItems: "center",
		},
		containerRateCrateGroup: {
			width: 50,
			display: "flex",
			flexDirection: "row",
			justifyContent: "flex-end",
			alignItems: "center",
		},
		iconStar: {
			width: 13,
			height: 13,
		},
		nameGroup: {
			fontFamily: "ChivoBold",
			fontSize: 16,
			color: textTheme,
		},
		infoGroup: {
			fontFamily: "ChivoRegular",
			fontSize: 16,
			color: textTheme,
		},
		containerDistanceGroupInfo: {
			alignSelf: "center",
			width: 335,
			display: "flex",
			flexDirection: "row",
			justifyContent: "flex-start",
			alignItems: "center",
			fontFamily: "ChivoRegular",
			color: textTheme,
		},
		iconRedAvatar: {
			width: 32,
			height: 32,
			marginTop: 15,
			marginBottom: 15,
		},
		textCreateGroup: {
			fontSize: 14,
			fontFamily: "ChivoRegular",
			color: textTheme,
		},
		dotSeparator: {
			width: 5,
			height: 5,
			backgroundColor: textTheme,
			borderRadius: 50,
			marginLeft: 5,
			marginRight: 5,
		},
		descriptionCreateGroup: {
			alignSelf: "center",
			width: 340,
			textAlign: "justify",
			fontSize: 14,
			fontFamily: "ChivoRegular",
			color: textTheme,
			letterSpacing: 0.5,
		},
		containerMakeReservation: {
			alignSelf: "center",
			width: width > 400 ? 400 : width,
			height: 70,
			backgroundColor: notBackTheme,
			display: "flex",
			flexDirection: "row",
			justifyContent: "space-around",
			alignItems: "center",
			position: "absolute",
			bottom: 0,
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
