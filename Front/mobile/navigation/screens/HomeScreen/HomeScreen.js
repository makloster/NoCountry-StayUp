import Slider from "@react-native-community/slider";
import { useNavigation } from "@react-navigation/native";
import { useContext, useState } from "react";
import {
	Image,
	ScrollView,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native";
import assets from "../../../constants/assets";
import { ThemeContext } from "../../../Context/Theme";
import { UserContext } from "../../../Context/UserContext";
import { ArrayActivities } from "../../../data/activities";
import LocalsFromJson from "../../../data/Locales.json";
import { renderImage } from "../../../helpers/renderImage";
import { HomeStyles } from "./HomeScreenStyles";

export const Home = () => {
	const arrayActivities = ArrayActivities();
	const homeStyles = HomeStyles();
	const { dark } = useContext(ThemeContext);
	const { isGuest } = useContext(UserContext);
	const navigation = useNavigation();
	const [favorite, setFavorite] = useState(false);
	const [priceFilter, setPriceFilter] = useState(0);
	const [dayTimeSelected, setDayTimeSelected] = useState("");
	const [activitySelected, setActivitySelected] = useState("");
	const [showFilter, setShowFilter] = useState(false);
	const [dataJson, setDataJson] = useState(LocalsFromJson);

	const [arrayFiltered, setArrayFiltered] = useState([]);

	const renderItemsCarousel = () => {
		return arrayActivities.map((activity) => (
			<TouchableOpacity
				key={activity.name}
				onPress={() => filterArray(activity.name)}
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
	const renderItemsCarouselFilter = () => {
		return arrayActivities.map((activity) => (
			<TouchableOpacity
				key={activity.name}
				onPress={() => setActivitySelected(activity.name)}
				style={homeStyles.containerActivitiesInCarousel}>
				<Image
					source={activity.image}
					resizeMode='contain'
					style={homeStyles.imageActivitiesCarousel}
				/>
				<Text
					style={
						activitySelected === activity.name
							? homeStyles.textActivitiesCarouselFilterSelected
							: homeStyles.textActivitiesCarouselFilter
					}>
					{activity.name}
				</Text>
			</TouchableOpacity>
		));
	};
	const renderCardsInGroups = () => {
		return dataJson.map((inProgress, index) => (
			<View key={index} style={homeStyles.containerGroupInfo}>
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
			</View>
		));
	};
	const renderCardsLocals = () => {
		return arrayFiltered.length > 0
			? arrayFiltered.map((local) => (
					<TouchableOpacity
						key={`card${local.id}`}
						onPress={() =>
							navigation.navigate("Local", {
								local,
								imageDemo: renderImage(local.activity),
							})
						}
						style={homeStyles.cardLocals}>
						<Image
							source={renderImage(local.activity)}
							resizeMode='cover'
							style={homeStyles.cardsImage}
						/>
						{!isGuest && (
							<TouchableOpacity
								onPress={onFavs}
								style={homeStyles.iconsInteractiveLike}>
								<Image
									source={
										favorite
											? assets.favorite_red_filled
											: assets.like
									}
									resizeMode='contain'
								/>
							</TouchableOpacity>
						)}
						<View style={homeStyles.containerLocalInfo}>
							<View style={homeStyles.containerLocalText}>
								<Text style={homeStyles.cardLocalTextTitle}>
									{local.name} · {local.rent}
								</Text>
								<View style={homeStyles.cardLocalScore}>
									<Image
										source={assets.star_red}
										style={homeStyles.star_red}
									/>
									<Text
										style={homeStyles.cardLocalScorePoints}>
										{local.reviewsInfo.score}
									</Text>
								</View>
							</View>
							<Text style={homeStyles.cardLocalSubtitle}>
								A 600 m · Grupos de {local.totalPeoplePerGroup}
							</Text>
							<View style={homeStyles.containerCardLocalPrice}>
								<Text style={homeStyles.cardLocalPrice}>
									{local.priceGroup} USD{" "}
								</Text>
								<Text style={homeStyles.cardLocalPriceText}>
									hora
								</Text>
							</View>
						</View>
					</TouchableOpacity>
			  ))
			: dataJson.map((local) => (
					<TouchableOpacity
						key={`card${local.id}`}
						onPress={() =>
							navigation.navigate("Local", {
								local,
								imageDemo: renderImage(local.activity),
							})
						}
						style={homeStyles.cardLocals}>
						<Image
							source={renderImage(local.activity)}
							resizeMode='cover'
							style={homeStyles.cardsImage}
						/>
						{!isGuest && (
							<TouchableOpacity
								onPress={onFavs}
								style={homeStyles.iconsInteractiveLike}>
								<Image
									source={
										favorite
											? assets.favorite_red_filled
											: assets.like
									}
									resizeMode='contain'
								/>
							</TouchableOpacity>
						)}
						<View style={homeStyles.containerLocalInfo}>
							<View style={homeStyles.containerLocalText}>
								<Text style={homeStyles.cardLocalTextTitle}>
									{local.name} · {local.rent}
								</Text>
								<View style={homeStyles.cardLocalScore}>
									<Image
										source={assets.star_red}
										style={homeStyles.star_red}
									/>
									<Text
										style={homeStyles.cardLocalScorePoints}>
										{local.reviewsInfo.score}
									</Text>
								</View>
							</View>
							<Text style={homeStyles.cardLocalSubtitle}>
								A 600 m · Grupos de {local.totalPeoplePerGroup}
							</Text>
							<View style={homeStyles.containerCardLocalPrice}>
								<Text style={homeStyles.cardLocalPrice}>
									{local.priceGroup} USD{" "}
								</Text>
								<Text style={homeStyles.cardLocalPriceText}>
									hora
								</Text>
							</View>
						</View>
					</TouchableOpacity>
			  ));
	};
	const showFilterApplies = () => {
		const filterApplies = {
			priceFilter,
			dayTimeSelected,
			activitySelected,
		};
	};
	const onFavs = () => {
		setFavorite(!favorite);
	};

	const filterArray = (activity) => {
		if (activity === "Todos") {
			setArrayFiltered([]);
		} else {
			setArrayFiltered(
				dataJson.filter((local) => local.activity === activity)
			);
		}
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
							source={
								dark
									? assets.bell_light_dot
									: assets.bell_dark_dot
							}
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
				<TouchableOpacity
					style={homeStyles.iconFilter}
					onPress={() => setShowFilter(!showFilter)}>
					<Image
						source={
							showFilter
								? assets.filter_active
								: assets.filter_icono
						}
						resizeMode='contain'
						style={
							showFilter
								? homeStyles.iconFilterActive
								: homeStyles.iconFilter
						}
					/>
				</TouchableOpacity>
			</View>

			{showFilter ? (
				<View style={homeStyles.containerFiltersSearch}>
					<ScrollView
						horizontal={true}
						showsHorizontalScrollIndicator={false}
						style={homeStyles.containerCarouselFilter}>
						{renderItemsCarouselFilter()}
					</ScrollView>
					<View style={homeStyles.containerCarouselFilterDayTimes}>
						<Text style={homeStyles.textDayTimes}>Horarios </Text>
						<ScrollView horizontal={true}>
							<Text
								onPress={() => setDayTimeSelected(1)}
								style={
									dayTimeSelected === 1
										? homeStyles.textDayTimeChipsSelected
										: homeStyles.textDayTimeChips
								}>
								Mañana
							</Text>
							<Text
								onPress={() => setDayTimeSelected(2)}
								style={
									dayTimeSelected === 2
										? homeStyles.textDayTimeChipsSelected
										: homeStyles.textDayTimeChips
								}>
								Tarde
							</Text>
							<Text
								onPress={() => setDayTimeSelected(3)}
								style={
									dayTimeSelected === 3
										? homeStyles.textDayTimeChipsSelected
										: homeStyles.textDayTimeChips
								}>
								Noche
							</Text>
							<Text
								onPress={() => setDayTimeSelected(4)}
								style={
									dayTimeSelected === 4
										? homeStyles.textDayTimeChipsSelected
										: homeStyles.textDayTimeChips
								}>
								Fin de Semana
							</Text>
						</ScrollView>
						<Text style={homeStyles.textDayTimes}>Precio</Text>
						<Text style={homeStyles.textPriceSlider}>
							0 - {priceFilter} USD
						</Text>
						<Slider
							style={homeStyles.sliderPrice}
							minimumValue={0}
							maximumValue={100}
							minimumTrackTintColor='#ffffff'
							maximumTrackTintColor='#ffffff'
							thumbTintColor='#ffffff'
							onSlidingComplete={(e) =>
								setPriceFilter(Math.round(e))
							}
						/>
						<TouchableOpacity
							onPress={() => showFilterApplies()}
							style={homeStyles.buttonShowResults}>
							<Text style={homeStyles.textButtonShowResult}>
								Mostrar Resultados
							</Text>
						</TouchableOpacity>
					</View>
				</View>
			) : (
				<ScrollView
					horizontal={true}
					showsHorizontalScrollIndicator={false}
					style={homeStyles.containerCarouselActivities}>
					{renderItemsCarousel()}
				</ScrollView>
			)}

			<Text style={homeStyles.lineSeparator}></Text>

			{!isGuest && (
				<>
					<Text style={homeStyles.textGroupInProgress}>
						Actualmente en:
					</Text>
					<ScrollView
						horizontal={true}
						showsHorizontalScrollIndicator={false}
						style={homeStyles.containerGroupInProgress}>
						{renderCardsInGroups()}
					</ScrollView>
				</>
			)}

			<View style={homeStyles.containerCardsLocals}>
				{renderCardsLocals()}
			</View>
		</ScrollView>
	);
};
