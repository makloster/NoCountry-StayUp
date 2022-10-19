import { useNavigation } from "@react-navigation/native";
import { useContext, useState } from "react";
import {
	Dimensions,
	Image,
	ScrollView,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native";
import { ButtonChangeTheme } from "../../../components/Buttons/Buttons";
import assets from "../../../constants/assets";
import { ThemeContext } from "../../../Context/Theme";
import { HomeStyles } from "./HomeScreenStyles";

export const Home = () => {
	const homeStyles = HomeStyles();
	const { dark } = useContext(ThemeContext);
	const navigation = useNavigation();
	const [favorite, setFavorite] = useState(false);

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

	const arrayGroups = [1, 2, 3];

	const renderItemsCarousel = () => {
		return arrayActivities.map((activity) => (
			<TouchableOpacity
				key={activity.name}
				onPress={() => alert(activity.name)}
				style={homeStyles.containerActivitiesInCarousel}>
				<Image
					source={activity.image}
					resizeMode='contain'
					style={homeStyles.imageActivitiesCarousel}
				/>
				<Text style={homeStyles.textActivitiesCarousel}>
					{activity.name}
				</Text>
			</TouchableOpacity>
		));
	};

	const renderCardsInGroups = () => {
		return arrayGroups.map((inProgress, index) => (
			<TouchableOpacity key={index} style={homeStyles.containerGroupInfo}>
				<View style={homeStyles.containerGroupInfoName}>
					<Image
						source={assets.group_list_icon}
						resizeMode='contain'
						style={homeStyles.iconGroupList}
					/>
					<View style={homeStyles.containerGroupInfoText}>
						<Text
							style={homeStyles.groupInfoName}
							onPress={() => {}}>
							Grupo 100
						</Text>
						<Text style={homeStyles.groupInfoText}>
							Sábado 27 de Enero - 17:00
						</Text>
					</View>
				</View>
				<Text style={homeStyles.groupInfoMembersText}>
					Falta 1 usuario(s) para confirmar.
				</Text>
			</TouchableOpacity>
		));
	};

	const onFavs = () => {
		setFavorite(!favorite);
	};

	const renderCardsLocals = () => {
		return arrayGroups.map((card, index) => (
			<TouchableOpacity
				key={`card${index}`}
				style={homeStyles.cardLocals}>
				<Image
					source={assets.dummy1}
					resizeMode='cover'
					style={homeStyles.cardsImage}
				/>
				<TouchableOpacity
					onPress={onFavs}
					style={homeStyles.iconsInteractiveLike}>
					<Image
						source={
							favorite ? assets.favorite_red_filled : assets.like
						}
						resizeMode='contain'
					/>
				</TouchableOpacity>
				<View style={homeStyles.containerLocalInfo}>
					<View style={homeStyles.containerLocalText}>
						<Text style={homeStyles.cardLocalTextTitle}>
							El rincon · Cancha de Fútbol
						</Text>
						<View style={homeStyles.cardLocalScore}>
							<Image
								source={assets.star_red}
								style={homeStyles.star_red}
							/>
							<Text style={homeStyles.cardLocalScorePoints}>
								4.0
							</Text>
						</View>
					</View>
					<Text style={homeStyles.cardLocalSubtitle}>
						A 600 m · Grupos de 10
					</Text>
					<View style={homeStyles.containerCardLocalPrice}>
						<Text style={homeStyles.cardLocalPrice}>10 USD </Text>
						<Text style={homeStyles.cardLocalPriceText}>hora</Text>
					</View>
				</View>
			</TouchableOpacity>
		));
	};

	return (
		<ScrollView style={homeStyles.containerBig}>
			<View style={homeStyles.containerLogoIcons}>
				<Image
					style={homeStyles.logoHome}
					source={
						dark
							? assets.principal_logo_light
							: assets.logo_version_white
					}
					resizeMode='contain'
				/>
				<View style={homeStyles.containerIcons}>
					<TouchableOpacity
						onPress={() => navigation.navigate("Mensajes")}
						style={homeStyles.iconBubble}>
						<Image
							source={
								dark
									? assets.message_light
									: assets.message_dark
							}
							resizeMode='contain'
							onpre
						/>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() => navigation.navigate("Notificaciones")}
						style={homeStyles.iconBell}>
						<Image
							source={dark ? assets.bell_light : assets.bell_dark}
							resizeMode='contain'
						/>
					</TouchableOpacity>
				</View>
			</View>

			<View style={homeStyles.containerSearch}>
				<Image
					source={assets.icon_finder}
					resizeMode='contain'
					style={homeStyles.iconSearch}
				/>
				<TextInput
					placeholder='¿Qué quieres hacer?'
					placeholderTextColor='grey'
					style={homeStyles.inputSearchActivity}
				/>
				<Image
					source={assets.filter_icono}
					resizeMode='contain'
					style={homeStyles.iconFilter}
				/>
			</View>

			<ScrollView
				horizontal={true}
				showsHorizontalScrollIndicator={false}
				style={homeStyles.containerCarouselActivities}>
				{renderItemsCarousel()}
			</ScrollView>

			<Text style={homeStyles.lineSeparator}></Text>

			<Text style={homeStyles.textGroupInProgress}>Actualmente en:</Text>
			<ScrollView
				horizontal={true}
				showsHorizontalScrollIndicator={false}
				style={homeStyles.containerGroupInProgress}>
				{renderCardsInGroups()}
			</ScrollView>

			<View style={homeStyles.containerCardsLocals}>
				{renderCardsLocals()}
				<ButtonChangeTheme />
			</View>
		</ScrollView>
	);
};
