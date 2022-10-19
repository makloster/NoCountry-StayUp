import { useHeaderHeight } from "@react-navigation/elements";
import { useContext } from "react";
import { StyleSheet, useWindowDimensions } from "react-native";
import { ThemeContext } from "../../../Context/Theme";

export const GroupsScreenStyles = () => {
	const heightHeader = useHeaderHeight();
	const { dark, backTheme, textTheme, notBackTheme, notTextTheme } =
		useContext(ThemeContext);
	const { width, height } = useWindowDimensions();
	return StyleSheet.create({
		containerBig: {
			width: width,
			backgroundColor: backTheme,
			paddingTop: heightHeader,
		},
		title: {
			fontFamily: "ChivoRegular",
			fontSize: 25,
			color: textTheme,
			padding: 15,
		},
		cardGroup: {
			alignSelf: "center",
			width: 350,
			marginRight: 15,
			marginLeft: 15,
		},
		containerGroupInfo: {
			display: "flex",
			flexDirection: "row",
			justifyContent: "flex-start",
			alignItems: "center",
			margin: 5,
		},
		groupIcon: {
			width: 51,
			height: 51,
		},
		containerGroupInfoText: {
			display: "flex",
			flexDirection: "column",
			justifyContent: "flex-start",
			alignItems: "flex-start",
			marginLeft: 10,
		},
		groupInfoName: {
			fontFamily: "ChivoBold",
			fontSize: 16,
			color: textTheme,
		},
		groupInfoDate: {
			fontFamily: "ChivoRegular",
			fontSize: 16,
			color: textTheme,
		},
		containerLocalInfo: {
			display: "flex",
			flexDirection: "row",
			justifyContent: "flex-start",
			alignItems: "center",
			marginLeft: 5,
			marginTop: 15,
		},
		imageLocal: {
			width: 130,
			height: 120,
			borderRadius: 15,
		},
		titulo_iniciar_sesion_grupos: {
			fontWeight: "800",
			fontSize: 16,
			color: textTheme,
		},
		containerLocalInfoText: {
			display: "flex",
			flexDirection: "column",
			justifyContent: "flex-start",
			alignItems: "flex-start",
			marginLeft: 10,
		},
		localName: {
			fontSize: 14,
			fontFamily: "ChivoBold",
			color: textTheme,
		},
		localInfo: {
			fontSize: 14,
			fontFamily: "ChivoRegular",
			color: textTheme,
		},
		localStatus: {
			fontSize: 12,
			fontFamily: "ChivoRegular",
			color: "#F6163C",
		},
		containerButtons: {
			alignSelf: "center",
			width: 330,
			display: "flex",
			flexDirection: "row",
			justifyContent: "space-around",
			alignItems: "center",
			marginTop: 15,
			marginBottom: 10,
		},
		buttonGroup: {
			width: 160,
			height: 34,
			borderRadius: 15,
			backgroundColor: "#f6163c",
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
		},
		textButtonGroup: {
			fontFamily: "ChivoRegular",
			fontSize: 18,
			color: "white",
		},
		buttonCancel: {
			width: 160,
			height: 34,
			borderRadius: 15,
			backgroundColor: notBackTheme,
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
		},
		textButtonCancel: {
			fontFamily: "ChivoRegular",
			fontSize: 18,
			color: notTextTheme,
		},

		titulo: {
			fontSize: 30,
			textAlign: "left",
			marginTop: "20%",
			marginLeft: 20,
			color: textTheme,
		},
		contenedor_subtitulos: {
			marginTop: 35,
			marginLeft: 49,
			marginBottom: 5,
		},
		buttonVerGrupo: {
			backgroundColor: "#F6163C",
			width: 170,
			height: 38,
			alignSelf: "center",
			borderRadius: 15,
			marginBottom: 15,
			borderBottomLeftRadius: 30,
			borderBottomRightRadius: 30,
			borderTopRightRadius: 30,
			borderTopLeftRadius: 30,
			marginLeft: 25,
		},
		textButtonVerGrupo: {
			fontSize: 18,
			fontWeight: "400",
			textAlign: "center",
			color: "white",
			lineHeight: 40,
		},
		contenedor_botones: {
			display: "flex",
			flexDirection: "row",
		},
		buttonCancelarReserva: {
			backgroundColor: "black",
			width: 170,
			height: 38,
			alignSelf: "center",
			borderRadius: 15,
			marginBottom: 15,
			borderBottomLeftRadius: 30,
			borderBottomRightRadius: 30,
			borderTopRightRadius: 30,
			borderTopLeftRadius: 30,
			marginLeft: 25,
		},
		textButtonCancelarReserva: {
			fontSize: 18,
			fontWeight: "400",
			textAlign: "center",
			color: "white",
			lineHeight: 40,
		},
		titulo_descripcion_usuario: {
			fontSize: 16,
			fontWeight: "700",
			color: textTheme,
		},
		stayupper: {
			display: "flex",
			flexDirection: "row",
		},
		descripcion_profile: {
			marginLeft: 11,
			marginTop: 15,
		},
		contenedor_subtitulos: {
			marginTop: 5,
			marginLeft: 9,
			marginBottom: 25,
		},

		profile_card: {
			display: "flex",
			flexDirection: "row",
		},
		descripcion_profile: {
			marginLeft: 11,
			marginTop: 15,
		},
		profile_picture: {
			width: 130,
			height: 119,
			marginLeft: 18,
			marginBottom: 14,
			borderBottomLeftRadius: 10,
			borderBottomRightRadius: 10,
			borderTopRightRadius: 10,
			borderTopLeftRadius: 10,
		},
		communityGroupImageAvatar: {
			width: 32,
			marginTop: 5,
			marginBottom: 5,
		},
		faltan_personas_descripcion_usuario: {
			fontSize: 12,
			fontWeight: "700",
			color: textTheme,
		},
		subtitulo_cancha: {
			color: textTheme,
		},
	});
};

export default GroupsScreenStyles;
