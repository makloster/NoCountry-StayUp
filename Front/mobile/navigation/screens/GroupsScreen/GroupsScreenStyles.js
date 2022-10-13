import { useContext } from "react";
import { StyleSheet } from "react-native";
import { ThemeContext } from "../../../Context/Theme";

export const GroupsScreenStyles = () => {
	const { textTheme } = useContext(ThemeContext);
	return StyleSheet.create({
		titulo_iniciar_sesion_grupos: {
			fontWeight: "800",
			fontSize: 16,
			color: textTheme,
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
		titulo_grupos: {
			display: "flex",
			flexDirection: "row",
			marginLeft: 20,
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
