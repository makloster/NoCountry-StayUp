import { useHeaderHeight } from "@react-navigation/elements";
import { useContext } from "react";
import { StyleSheet, useWindowDimensions } from "react-native";
import { ThemeContext } from "../../../Context/Theme";

export const ChatWithStyles = () => {
	const heightHeader = useHeaderHeight();
	const { width, height } = useWindowDimensions();
	const { backTheme, textTheme, notBackTheme, notTextTheme } =
		useContext(ThemeContext);

	return StyleSheet.create({
		containerBig: {
			width: width,
			backgroundColor: backTheme,
			paddingTop: heightHeader,
			paddingRight: 15,
			paddingLeft: 15,
		},
		friendAvatar: {
			width: 51,
			height: 51,
			marginRight: 10,
		},
		containerFriend: {
			display: "flex",
			flexDirection: "row",
			justifyContent: "flex-start",
			alignItems: "center",
			marginBottom: 10,
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
		containerMessenger: {
			width: width,
			display: "flex",
			flexDirection: "column",
			justifyContent: "center",
			alignItems: "center",
		},
		containerMessageRecibed: {
			width: "100%",
			display: "flex",
			flexDirection: "row",
			justifyContent: "flex-start",
			alignItems: "center",
			marginBottom: 20,
		},
		containerMessageSent: {
			width: "80%",
			display: "flex",
			flexDirection: "row",
			justifyContent: "flex-end",
			alignItems: "center",
			marginBottom: 20,
		},
		chatAvatar: {
			width: 51,
			height: 51,
			margin: 5,
		},
		textChatRecibed: {
			fontSize: 15,
			fontFamily: "ChivoRegular",
			color: notTextTheme,
			backgroundColor: notBackTheme,
			width: 240,
			height: 65,
			padding: 10,
			borderTopRightRadius: 15,
			borderBottomRightRadius: 15,
			borderTopLeftRadius: 15,
		},
		textChatSend: {
			fontSize: 15,
			fontFamily: "ChivoRegular",
			color: "white",
			backgroundColor: "#F6163C",
			width: 240,
			height: 65,
			padding: 10,
			borderTopLeftRadius: 15,
			borderBottomLeftRadius: 15,
			borderTopRightRadius: 15,
		},
		containerBoxWriteMessage: {
			alignSelf: "center",
			width: width,
			position: "relative",
			display: "flex",
			flexDirection: "row",
			justifyContent: "space-between",
			alignItems: "center",
			backgroundColor: backTheme,
			padding: 10,
		},
		chatInput: {
			width: 280,
			minHeight: 45,
			color: "#181818",
			backgroundColor: "white",
			borderColor: "#181818",
			borderWidth: 1,
			borderRadius: 50,
			fontFamily: "ChivoRegular",
			paddingLeft: 50,
		},
		buttonSendMessageText: {
			color: "white",
			fontFamily: "ChivoBold",
		},
		iconsInputMessage: {
			width: 45,
			height: 45,
		},

		containerSmileIcon: {
			position: "absolute",
			left: 20,
			top: 18,
			zIndex: 5,
			borderRadius: 50,
		},
		iconSmile: {
			width: 29,
			height: 29,
		},
	});
};
