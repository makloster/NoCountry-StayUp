import { StyleSheet } from "react-native";

export const GroupsScreenStyles = StyleSheet.create({
    titulo_iniciar_sesion_grupos: {
        fontWeight: "800",
        fontSize: "16",
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
        marginTop: 15,
        marginBottom: 15,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        marginLeft: 25,
    },
    textButtonVerGrupo: {
        fontSize: 20,
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
        marginTop: 15,
        marginBottom: 15,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        marginLeft: 25,
    },
    textButtonCancelarReserva: {
        fontSize: 20,
        fontWeight: "400",
        textAlign: "center",
        color: "white",
        lineHeight: 40,
    },
    titulo_descripcion_usuario: {
        fontSize: 24,
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
    titulo_iniciar_sesion_grupos: {
        fontWeight: "800",
        fontSize: "16",
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
        width: 113,
        height: 113,
        marginLeft: 18,
        marginBottom: 14,
    },
    titulo_grupos : {
        display: "flex",
        flexDirection:"row",
        marginLeft:20
    }
});

export default GroupsScreenStyles;
