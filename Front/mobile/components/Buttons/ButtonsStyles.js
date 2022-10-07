import { StyleSheet } from "react-native";

export const buttonsStyles = StyleSheet.create({
	redButtonLogin: {
		backgroundColor: "#F6163C",
		width: 300,
		height: 55,
		alignSelf: "center",
		borderRadius: 15,
		marginTop: 25,
	},
	textButtonsLogin: {
		fontSize: 20,
		fontWeight: "400",
		textAlign: "center",
		color: "white",
		lineHeight: 55,
	},
	buttonRegisterOtherWays: {
		width: 315,
		height: 45,
		lineHeight: 15,
		borderRadius: 15,
		paddingLeft: 25,
		borderColor: "white",
		borderWidth: 2,
		backgroundColor: "white",
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: 20,
	},
	imageRegisterOtherWays: {
		width: 25,
		height: 25,
	},
	textRegisterOtherWays: {
		color: "black",
		width: 200,
		textAlign: "left",
	},
});
