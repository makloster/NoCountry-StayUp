import Slider from "@react-native-community/slider";
import { useNavigation } from "@react-navigation/native";
import debounce from "lodash.debounce";
import { useContext, useState } from "react";

import {
	Image,
	ScrollView,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native";
import assets from "../../constants/assets";
import { LocalContext } from "../../Context/Locals";
import { ArrayActivities } from "../../data/activities";
import { HomeStyles } from "../../navigation/screens/HomeScreen/HomeScreenStyles";

export const FilterLocals = () => {
	const navigation = useNavigation();
	const homeStyles = HomeStyles();
	const arrayActivities = ArrayActivities();
	const [dayTimeSelected, setDayTimeSelected] = useState("");
	const [priceFilter, setPriceFilter] = useState(100);
	const [showFilter, setShowFilter] = useState(false);
	const [activitySelected, setActivitySelected] = useState("");
	const {
		filterLocalsByActivity,
		filterLocalsByActivityPrice,
		filterByInputValue,
	} = useContext(LocalContext);

	const handleSearch = () => {
		filterLocalsByActivityPrice(activitySelected, priceFilter);
		setShowFilter(false);
	};
	const inputSearch = debounce((value) => {
		filterByInputValue(value);
	}, 1500);

	const renderItemsCarousel = () => {
		return arrayActivities.map((activity) => (
			<TouchableOpacity
				key={activity.name}
				onPress={() => filterLocalsByActivity(activity.name)}
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

	return (
		<>
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
					onChange={(e) => inputSearch(e.target.value)}
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
							value={priceFilter}
							minimumTrackTintColor='#ffffff'
							maximumTrackTintColor='#ffffff'
							thumbTintColor='#ffffff'
							onSlidingComplete={(e) =>
								setPriceFilter(Math.round(e))
							}
						/>
						<TouchableOpacity
							style={homeStyles.buttonShowResults}
							onPress={handleSearch}>
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
		</>
	);
};
