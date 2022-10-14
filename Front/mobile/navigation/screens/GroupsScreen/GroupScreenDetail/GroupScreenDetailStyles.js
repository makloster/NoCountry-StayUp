import { useContext } from "react";
import { Dimensions, StyleSheet } from "react-native";
import { ThemeContext } from "../../../../Context/Theme";

const widthScreen = Dimensions.get("window").width;
const heightImage = widthScreen;

export const GroupScreenDetailStyles = () => {
	const { textTheme } = useContext(ThemeContext);

    return StyleSheet.create({
        contenedor_titulo: {
            display: "flex",
            flexDirection: "row",
            marginTop: "20%",
            marginBottom: 7,
        },
        image: {
            marginBottom: 10,
            padding: 10,
            height: 355,
            width: 375,
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
            borderTopRightRadius: 10,
            borderTopLeftRadius: 10,
            marginTop: 0,
        },
        cards: {
            boxShadow: "none",
            width: widthScreen,
            marginLeft: 17,
            marginTop: 2,
        },
        nombre_usuario_lista: {
            fontWeight: "800",
            fontSize: 16,
            marginTop: 10,
            color: textTheme,
        },
        contenedor_lista_usuarios_grupo: {
            display: "flex",
            flexDirection: "row",
            marginLeft: 20,
            marginTop: 5,
        },
        personas_en_el_grupo: {
            marginLeft: 20,
            fontWeight: "800",
            marginTop: 12,
            marginBottom: 5,
            fontSize: 15,
            color: textTheme,
        },
        image_profile: {
            height: 51,
            width: 51,
        },
        subtitulo_cancha: {
            color: textTheme,
        },
    });
};
