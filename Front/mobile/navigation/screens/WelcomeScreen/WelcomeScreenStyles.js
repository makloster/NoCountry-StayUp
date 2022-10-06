import React from "react";
import { Dimensions, StyleSheet } from "react-native";

const heightScreen = Dimensions.get("window").height - 100;

export const welcomeStyles = StyleSheet.create({
	containerBig: {
		width: "100%",
		flexDirection: "column",
		backgroundColor: "black",
	},
	containerScreen: {
		width: "100%",
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-between",
		alignItems: "center",
		paddingTop: 25,
	},
	logoIcon: {
		width: 250,
	},
	buttonFindPlaces: {
		backgroundColor: "#F6163C",
		width: 315,
		height: 65,
		alignSelf: "center",
		borderRadius: 15,
		marginTop: 25,
	},
	textButtonFindPlaces: {
		fontSize: 20,
		fontWeight: "400",
		textAlign: "center",
		color: "white",
		lineHeight: 65,
	},
});

// export const WelcomeScreenStyles = () => {
// 	return StyleSheet.create({
// 		containerBig: {
// 			width: "100%",
// 			flexDirection: "column",
// 			backgroundColor: "#181818",
// 		},
// 		containerScreen: {
// 			width: "100%",
// 			height: heightScreen,
// 			display: "flex",
// 			flexDirection: "column",
// 			justifyContent: "space-between",
// 			alignItems: "center",
// 		},
// 		logoIcon: {
// 			width: 277,
// 			height: 78,
// 		},
// 	});
// };
