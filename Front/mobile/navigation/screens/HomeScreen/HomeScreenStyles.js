import { useHeaderHeight } from "@react-navigation/elements";
import { useContext } from "react";
import { Dimensions, StyleSheet, useWindowDimensions } from "react-native";
import { ThemeContext } from "../../../Context/Theme";

const widthScreen = Dimensions.get("window").width;
const heightImage = widthScreen;

export const HomeStyles = () => {
	const heightHeader = useHeaderHeight();
	const { dark, backTheme, textTheme } = useContext(ThemeContext);
	const { width, height } = useWindowDimensions();

	return StyleSheet.create({
		containerBig: {
			width: width,
			backgroundColor: backTheme,
			paddingTop: heightHeader,
		},
		containerLogoIcons: {
			alignSelf: "center",
			width: 340,
			display: "flex",
			flexDirection: "row",
			justifyContent: "space-between",
			alignItems: "center",
			marginTop: 10,
		},
		logoHome: {
			width: 150,
			height: 45,
		},
		containerIcons: {
			height: 35,
			display: "flex",
			flexDirection: "row",
			justifyContent: "center",
			alignItems: "center",
		},
		iconBell: {
			width: 30,
			height: 30,
			marginLeft: 15,
		},
		iconBubble: {
			width: 30,
			height: 30,
		},
		containerSearch: {
			alignSelf: "center",
			width: 325,
			display: "flex",
			flexDirection: "row",
			justifyContent: "center",
			alignItems: "center",
			position: "relative",
			marginTop: 16,
		},
		iconSearch: {
			position: "absolute",
			zIndex: 5,
			left: 10,
			width: 37,
			height: 37,
		},
		iconFilter: {
			position: "absolute",
			zIndex: 5,
			right: 10,
			width: 37,
			height: 37,
		},
		inputSearchActivity: {
			width: 320,
			borderRadius: 50,
			paddingLeft: 55,
			paddingRight: 35,
			height: 45,
			backgroundColor: dark ? "#2E2B2B" : backTheme,
			fontFamily: "ChivoRegular",
		},
		containerCarouselActivities: {
			backgroundColor: backTheme,
			marginTop: 16,
		},
		containerActivitiesInCarousel: {
			display: "flex",
			flexDirection: "column",
			justifyContent: "flex-start",
			alignItems: "center",
		},
		imageActivitiesCarousel: {
			width: 50,
			height: 50,
		},
		textActivitiesCarousel: {
			width: 65,
			textAlign: "center",
			color: textTheme,
			fontSize: 14,
			fontFamily: "ChivoRegular",
		},
		lineSeparator: {
			alignSelf: "center",
			width: width,
			height: 1,
			backgroundColor: "#2E2B2B",
		},
		textGroupInProgress: {
			width,
			paddingLeft: 15,
			fontFamily: "ChivoBold",
			fontSize: 16,
			marginTop: 10,
			marginBottom: 10,
			color: textTheme,
		},
		containerGroupInProgress: {
			alignSelf: "center",
			width: 360,
			height: 100,
		},
		containerGroupInfo: {
			display: "flex",
			flexDirection: "column",
			justifyContent: "flex-start",
			alignItems: "flex-start",
			backgroundColor: "#F6163C",
			width: 320,
			height: 95,
			alignSelf: "center",
			borderRadius: 15,
			marginLeft: 10,
		},
		containerGroupInfoName: {
			display: "flex",
			flexDirection: "row",
			justifyContent: "flex-start",
			alignItems: "center",
		},
		containerGroupInfoText: {
			display: "flex",
			flexDirection: "column",
			justifyContent: "center",
			alignItems: "flex-start",
		},
		groupInfoName: {
			fontFamily: "ChivoBold",
			fontSize: 14,
			color: "white",
		},
		groupInfoText: {
			fontFamily: "ChivoRegular",
			fontSize: 14,
			color: "white",
		},
		groupInfoMembersText: {
			fontFamily: "ChivoRegular",
			fontSize: 16,
			color: "white",
			paddingLeft: 10,
		},
		containerCardsLocals: {
			display: "flex",
			flexDirection: "column",
			justifyContent: "flex-start",
			alignItems: "center",
			marginTop: 15,
			position: "relative",
		},
		cardLocals: {
			width: 335,
			height: 400,
			marginBottom: 15,
		},
		cardsImage: {
			width: 335,
			height: 310,
			borderRadius: 20,
		},
		iconsInteractiveLike: {
			position: "absolute",
			right: 15,
			top: 15,
			zIndex: 5,
			width: 27,
			height: 27,
		},
		containerLocalInfo: {
			alignSelf: "center",
			width: 325,
			display: "flex",
			flexDirection: "column",
			justifyContent: "flex-start",
			alignItems: "flex-start",
		},
		containerLocalText: {
			width: 315,
			display: "flex",
			flexDirection: "row",
			justifyContent: "space-between",
			alignItems: "center",
			marginTop: 5,
		},
		cardLocalTextTitle: {
			fontFamily: "ChivoBold",
			fontSize: 16,
			color: textTheme,
		},
		cardLocalScore: {
			display: "flex",
			flexDirection: "row",
			justifyContent: "center",
			alignItems: "center",
		},
		star_red: {
			width: 15,
			height: 15,
		},
		cardLocalScorePoints: {
			fontFamily: "ChivoRegular",
			fontSize: 16,
			color: textTheme,
		},
		cardLocalSubtitle: {
			fontFamily: "ChivoRegular",
			fontSize: 16,
			color: textTheme,
		},
		containerCardLocalPrice: {
			display: "flex",
			flexDirection: "row",
		},
		cardLocalPrice: {
			fontFamily: "ChivoBold",
			fontSize: 16,
			color: textTheme,
		},
		cardLocalPriceText: {
			fontFamily: "ChivoRegular",
			fontSize: 16,
			color: textTheme,
		},

		corazon_en_card: {
			width: 37,
			height: 37,
			zIndex: 10,
			position: "absolute",
			right: 10,
			top: 10,
			backgroundColor: "white",
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			borderRadius: 50,
		},

		cards: {
			boxShadow: "none",
			width: widthScreen - 25,
			marginLeft: 18,
			marginTop: 17,
			position: "relative",
		},
		nombre_cancha: {
			flexDirection: "row",
		},
		titulo_descripcion_cancha: {
			fontWeight: "600",
			fontSize: 16,
			marginRight: 10,
			color: textTheme,
		},
		subtitulo_descripcion_cancha: {
			fontWeight: "600",
			fontSize: 14,
			marginRight: 10,
			color: textTheme,
		},
		boton_ver_mas_categorias: {
			color: "red",
			display: "flex",
			//alignItems:"flex-end",
			alignSelf: "flex-end",
			fontSize: 12,
			marginRight: 18,
			marginTop: 4,
			marginBottom: 2,
			//justifyContent:"flex-end",
			//marginLeft:250,
			backgroundColor: backTheme,
		},
		lista_flex_iconos: {
			display: "flex",
			flexWrap: "wrap",
			flexDirection: "row",
			width: widthScreen,
			height: heightImage,
			justifyContent: "space-evenly",
			padding: 18,
		},
		container_cards: {
			backgroundColor: backTheme,
		},
		container_boton_categoria: {
			backgroundColor: backTheme,
		},
		contenedor_input: {
			borderBottomLeftRadius: 30,
			borderBottomRightRadius: 30,
			borderTopRightRadius: 30,
			borderTopLeftRadius: 30,
			borderWidth: "thin",
			borderBottomWidth: 1,
			borderTopWidth: 1,
			borderRightWidth: 1,
			borderLeftWidth: 1,
		},
		buttonFindPlaces: {
			backgroundColor: "#F6163C",
			width: 340,
			height: 95,
			alignSelf: "center",
			borderRadius: 15,
		},
		textButtonFindPlaces: {
			fontSize: 20,
			fontWeight: "400",
			textAlign: "center",
			color: backTheme,
			lineHeight: 30,
		},
		contenedor_boton_reservas: {
			backgroundColor: backTheme,
		},
		actualmente_en: {
			marginLeft: 22,
			fontSize: 16,
			fontWeight: "700",
			color: textTheme,
		},
		container_categorias: {
			backgroundColor: backTheme,
		},
	});
};
