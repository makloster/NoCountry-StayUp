import { useHeaderHeight } from "@react-navigation/elements";
import { useContext } from "react";
import { StyleSheet, useWindowDimensions } from "react-native";
import { ThemeContext } from "../../../Context/Theme";

export const FavoriteScreenStyles = () => {
	const heightHeader = useHeaderHeight();
	const { width, height } = useWindowDimensions();
	const { backTheme, textTheme } = useContext(ThemeContext);

	return StyleSheet.create({
		containerBig: {
			width: width,
			backgroundColor: backTheme,
			marginTop: heightHeader,
		},
		containerFavoritesScreen: {
			width: width,
			height: height,
			display: "flex",
			flexDirection: "column",
			justifyContent: "flex-start",
			alignItems: "flex-start",
			paddingLeft: 10,
			paddingBottom: 60,
		},
		containerLocal: {
			width: "100%",
			height: 130,
			display: "flex",
			flexDirection: "row",
			justifyContent: "flex-start",
			alignItems: "center",
		},
		containerImageHeart: {
			position: "relative",
		},
		imageLocal: {
			width: 160,
			height: 119,
			marginRight: 13,
			borderRadius: 10,
		},
		favoriteIconBg: {
			position: "absolute",
			width: 35,
			height: 35,
			backgroundColor: "white",
			right: 20,
			top: 5,
			borderRadius: 25,
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
		},
		favoriteIcon: {},
		containerInfoLocal: {
			width: 150,
			display: "flex",
			flexDirection: "column",
			justifyContent: "flex-start",
			alignItems: "flex-start",
		},
		containerRateLocal: {
			display: "flex",
			flexDirection: "row",
			justifyContent: "flex-start",
			alignItems: "center",
		},
		rateIcon: {
			marginRight: 5,
		},
		rateText: {
			fontSize: 16,
			color: textTheme,
		},
		containerTitle: {
			display: "flex",
			flexDirection: "row",
			justifyContent: "flex-start",
			alignItems: "center",
		},
		titleText: {
			fontSize: 14,
			fontWeight: "800",
			color: textTheme,
		},
		titleActivity: {
			fontSize: 14,
			fontWeight: "800",
			fontSize: 14,
			fontWeight: "800",
			color: textTheme,
		},
		containerSubTitle: {
			display: "flex",
			flexDirection: "row",
			justifyContent: "flex-start",
			alignItems: "center",
		},
		distanceText: {
			fontSize: 14,
			color: textTheme,
		},
		groupNumber: {
			fontSize: 14,
			color: textTheme,
		},
		containerPrice: {
			display: "flex",
			flexDirection: "row",
			justifyContent: "flex-start",
			alignItems: "flex-start",
		},
		priceText: {
			fontSize: 18,
			fontWeight: "800",
			marginRight: 10,
			color: textTheme,
		},
		hourText: {
			fontSize: 18,
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
	});
};
