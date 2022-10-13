import { useContext } from "react";
import {
	Dimensions,
	Image,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { ButtonChangeTheme } from "../../../components/Buttons/Buttons";
import { CarouselCategories } from "../../../components/CarouselCategories/CarouselCategories";
import assets from "../../../constants/assets";
import { ThemeContext } from "../../../Context/Theme";
import BotonReservas from "./BotonReservas/BotonReservas";
import CarouselHome from "./CarouselHome.js/CarouselHome";
import HomeCard from "./HomeCard";
import { HomeStyles } from "./HomeScreenStyles";

const widthScreen = Dimensions.get("window").width;
const heightImage = widthScreen - 300;

export default function Home({ navigation }) {
	const homeStyles = HomeStyles();
	const { dark } = useContext(ThemeContext);

	const arrayActivities = [
		{
			name: "Futbol",
			image: dark ? assets.futbol_light : assets.futbol_dark,
		},
		{
			name: "Basquet",
			image: dark ? assets.basket_light : assets.basket_dark,
		},
		{
			name: "Volley",
			image: dark ? assets.volley_light : assets.volley_dark,
		},
		{
			name: "Gimnasios",
			image: dark ? assets.gym_light : assets.gym_dark,
		},
		{
			name: "Skate",
			image: dark ? assets.skate_light : assets.skate_dark,
		},
		{
			name: "Playas",
			image: dark ? assets.beach_light : assets.beach_dark,
		},
		{
			name: "Plazas",
			image: dark ? assets.playground_light : assets.playground_dark,
		},
		{
			name: "Juegos de Mesa",
			image: dark ? assets.boardsGames_light : assets.boardGames_dark,
		},
		{
			name: "Salidas Nocturnas",
			image: dark ? assets.danceFloor_light : assets.danceFloor_dark,
		},
		{
			name: "Ping Pong",
			image: dark ? assets.tableTennis_light : assets.tableTennis_dark,
		},
		{
			name: "Lucha",
			image: dark ? assets.fight_light : assets.fight_dark,
		},
		{
			name: "Karting",
			image: dark ? assets.karting_light : assets.karting_dark,
		},
		{
			name: "Trekking",
			image: dark ? assets.trekking_light : assets.trekking_dark,
		},
		{
			name: "Escaladas",
			image: dark ? assets.climb_light : assets.climb_dark,
		},
		{
			name: "Pool",
			image: dark ? assets.pool_light : assets.pool_dark,
		},
		{
			name: "Adaptados",
			image: dark ? assets.adptables_light : assets.adatables_dark,
		},
	];

	return (
		<ScrollView>
			<View style={homeStyles.container}>
				<Image
					source={
						dark
							? assets.principal_logo_light
							: assets.logo_version_white
					}
					resizeMode='contain'
					style={homeStyles.logo}
				/>
				<Image
					source={dark ? assets.message_light : assets.message_dark}
					resizeMode='contain'
					style={{ width: 38, height: 36, marginLeft: 120 }}
				/>
				<Image
					source={dark ? assets.bell_light : assets.bell_dark}
					resizeMode='contain'
					style={{ width: 38, height: 38, marginRight: 15 }}
				/>
			</View>
			<View>
				<View style={homeStyles.SearchBar}>
					<Image
						source={assets.icon_finder}
						resizeMode='contain'
						style={homeStyles.lupa_search}
					/>
					<TextInput
						placeholder='¿Qué quieres hacer?'
						placeholderTextColor='grey'
						style={homeStyles.input}
						/* inlineImageLeft={assets.lupa_search} */
					/>
					<Image
						source={assets.filter_icono}
						resizeMode='contain'
						style={homeStyles.filter}
					/>
				</View>
			</View>
			<CarouselCategories arrayImages={arrayActivities} />
			<BotonReservas />
			<ButtonChangeTheme />
			<View style={homeStyles.container_cards}>
				<HomeCard />
				<HomeCard />
				<HomeCard />
				<HomeCard />
				<HomeCard />
				<HomeCard />
				<HomeCard />
			</View>
		</ScrollView>
	);
}
