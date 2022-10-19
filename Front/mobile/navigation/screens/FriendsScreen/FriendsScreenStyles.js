import { useHeaderHeight } from "@react-navigation/elements";
import { useContext } from "react";
import { StyleSheet, useWindowDimensions } from "react-native";
import { ThemeContext } from "../../../Context/Theme";

export const FriendsScreenStyles = () => {
	const heightHeader = useHeaderHeight();
	const { width, height } = useWindowDimensions();
	const { backTheme, textTheme, notBackTheme } = useContext(ThemeContext);

	return StyleSheet.create({
		containerBig: {
			width: width,
			backgroundColor: backTheme,
			paddingTop: heightHeader,
			paddingRight: 15,
			paddingLeft: 15,
		},
		containerInput: {
			width: 320,
			height: 60,
			display: "flex",
			flexDirection: "row",
			justifyContent: "flex-start",
			alignItems: "center",
		},
		searchIcon: {
			width: 37,
			height: 37,
			marginRight: 15,
		},
		searchFriendsInput: {
			width: 250,
			height: 45,
			color: "#181818",
			backgroundColor: "white",
			borderRadius: 25,
			fontFamily: "ChivoRegular",
			paddingLeft: 20,
		},
		containerFriendsInfo: {
			display: "flex",
			flexDirection: "column",
			justifyContent: "center",
			alignItems: "center",
		},
		avatarIcon: {
			width: 62,
			height: 62,
		},
		friendNameInfo: {
			fontFamily: "ChivoRegular",
			fontSize: 11,
			color: textTheme,
		},
		containerListFriends: {
			width: 320,
			display: "flex",
			flexDirection: "column",
			alignItems: "flex-start",
			justifyContent: "flex-start",
			marginTop: 30,
		},
		containerFriend: {
			display: "flex",
			flexDirection: "row",
			justifyContent: "flex-start",
			alignItems: "center",
			marginTop: 10,
		},
		friendAvatar: {
			width: 51,
			height: 51,
			marginRight: 10,
		},
		containerFriendText: {
			display: "flex",
			flexDirection: "column",
			alignItems: "flex-start",
			justifyContent: "flex-start",
		},
		friendName: {
			fontFamily: "ChivoBold",
			fontSize: 16,
			color: textTheme,
		},
		friendLastMessage: {
			fontFamily: "ChivoLight",
			fontSize: 16,
			color: textTheme,
		},
		friendTime: {},
	});
};
