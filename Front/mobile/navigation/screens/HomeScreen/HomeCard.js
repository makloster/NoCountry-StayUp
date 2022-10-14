import React, { useContext, useState } from "react";
import {
	Dimensions,
	FlatList,
	Image,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native";
import {
	Alert,
	Button,
	Card,
	Icon,
	ListItem,
	SearchBar,
} from "react-native-elements";
import assets from "../../../constants/assets";
import { ThemeContext } from "../../../Context/Theme";
import { HomeStyles } from "./HomeScreenStyles";

const HomeCard = () => {
	const homeStyles = HomeStyles();
	const { dark } = useContext(ThemeContext);

	const [corazonOn, setCorazonOn] = useState(true);

	const handleFavs = () => {
		setCorazonOn(!corazonOn);
	};
	return (
		<View style={homeStyles.cards}>
			<TouchableOpacity
				onPress={handleFavs}
				style={homeStyles.corazon_en_card}>
				<Image
					source={
						corazonOn ? assets.like : assets.favorite_red_filled
					}
					resizeMode='contain'
				/>
			</TouchableOpacity>

			<Card.Image style={homeStyles.image} source={assets.dummy1} />

			<View style={homeStyles.nombre_cancha}>
				<Text style={homeStyles.titulo_descripcion_cancha}>
					El rincon · Cancha de Fútbol
				</Text>
				<Card.Image
					source={assets.star_red}
					style={homeStyles.star_red}
				/>
				<Text style={homeStyles.titulo_descripcion_cancha}>4.0</Text>
			</View>

			<Text style={homeStyles.subtitulo_descripcion_cancha}>
				A 600 m · Grupos de 10
			</Text>
			<Text
				style={homeStyles.titulo_descripcion_cancha}
				onPress={() => {
					console.log("hola");
				}}>
				10 USD hora
			</Text>
		</View>
	);
};

export default HomeCard;
