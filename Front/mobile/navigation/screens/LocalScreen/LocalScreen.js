import { useNavigation } from "@react-navigation/native";
import React, { useContext, useState } from "react";
import {
	Dimensions,
	FlatList,
	Image,
	ScrollView,
	Share,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import { ButtonChangeTheme } from "../../../components/Buttons/Buttons";
import { CarouselCustom } from "../../../components/CarouselCustom/CarouselCustom";
import { CarouselLocalScreenReviews } from "../../../components/CarouselLocalScreenReviews/CarouselLocalScreenReviews";
import assets from "../../../constants/assets";
import { ThemeContext } from "../../../Context/Theme";
import { LocalStyles } from "./LocalScreenStyles";

const imagesArray = [
	{
		image: assets.dummy1,
	},
	{
		image: assets.dummy2,
	},
	{
		image: assets.dummy3,
	},
	{
		image: assets.dummy4,
	},
];

const reviewsArray = [
	{
		name: "Nico1",
		date: "Septiembre de 2022",
		description:
			"Use por primera vez la app con este lugar y fue fenomenal,	disfrute mucho con gente desconocida, buena atención.",
	},
	{
		name: "Nico2",
		date: "Noviembre de 2022",
		description:
			"Fue fenomenal 🔥🔥🔥,	disfrute mucho con gente desconocida 💪, buena atención.",
	},
	{
		name: "Nico3",
		date: "Diciembre de 2022",
		description:
			"Use por primera vez la app con este lugar y no me gusto,	la cancha estaba en mal estado, mala atención.",
	},
];

const daysArray = [
	{
		day: "Domingo",
		time: "10:00 a 00:00 hs",
	},
	{
		day: "Lunes",
		time: "No Abre",
	},
	{
		day: "Martes",
		time: "10:00 a 00:00 hs",
	},
	{
		day: "Miercoles",
		time: "10:00 a 00:00 hs",
	},
	{
		day: "Jueves",
		time: "10:00 a 00:00 hs",
	},
	{
		day: "Viernes",
		time: "10:00 a 00:00 hs",
	},
	{
		day: "Sabado",
		time: "10:00 a 00:00 hs",
	},
];

const reviewsLocal = {
	total: "20",
	score: "4.0",
	reviews: [
		{
			name: "Atencion Al Cliente",
			score: "4.0",
		},
		{
			name: "Limpieza Y Matenimiento",
			score: "4.0",
		},
		{
			name: "Calidad-Precio",
			score: "4.0",
		},
		{
			name: "Comodidad",
			score: "4.0",
		},
		{
			name: "Concurrencia",
			score: "4.0",
		},
		{
			name: "Servicios",
			score: "4.0",
		},
	],
};

const widthScreen = Dimensions.get("window").width;
const heightImage = widthScreen - 121;

export const LocalScreen = () => {
	const navigation = useNavigation();
	const { dark } = useContext(ThemeContext);
	const [favorite, setFavorite] = useState(false);
	const servicesArray = [
		{
			name: "Baños",
			icon: dark ? assets.bathdroom_light : assets.bathdroom_dark,
		},
		{
			name: "Estacionamiento",
			icon: dark ? assets.parking_light : assets.parking_dark,
		},
		{
			name: "Duchas / Vestuario",
			icon: dark ? assets.shower_light : assets.shower_dark,
		},
		{
			name: "Hidratación Disponible",
			icon: dark ? assets.water_light : assets.water_dark,
		},
		{
			name: "Agua Caliente",
			icon: dark ? assets.hotwater_light : assets.hotwater_dark,
		},
	];
	const localStyles = LocalStyles();

	const onShare = async () => {
		await Share.share({
			message: "Mira este lugar en la app StyUp!",
		});
	};

	const onFavs = () => {
		setFavorite(!favorite);
	};

	const renderServices = () => {
		return servicesArray.map((service) => (
			<View key={service.name} style={localStyles.servicesOffered}>
				<Image
					source={service.icon}
					resizeMode='contain'
					style={localStyles.servicesOfferedIcons}
				/>
				<Text style={localStyles.servicesOfferedName}>
					{service.name}
				</Text>
			</View>
		));
	};

	const renderDays = () => {
		return daysArray.map((day) => (
			<View key={day.day} style={localStyles.containerScheduleByDay}>
				<Text style={localStyles.containerScheduleDay}>{day.day}</Text>
				<Text style={localStyles.containerScheduleTime}>
					{day.time}
				</Text>
			</View>
		));
	};

	const renderReviews = () => {
		return reviewsLocal.reviews.map((review) => (
			<View key={review.name} style={localStyles.conainerReviewEachType}>
				<Text style={localStyles.reviewTypeName}>{review.name}</Text>
				<View style={localStyles.containerReviewTypeScore}>
					<Text style={localStyles.reviewTypeLine}></Text>
					<Text style={localStyles.reviewTypeValue}>
						{review.score}
					</Text>
				</View>
			</View>
		));
	};

	return (
		<>
			<ScrollView style={localStyles.containerBig}>
				<View style={localStyles.containerImageAndIcons}>
					<View style={localStyles.containerIconsInteractive}>
						<View
							style={localStyles.containerIconsInteractiveGroup}>
							<TouchableOpacity onPress={onShare}>
								<Image
									source={assets.share}
									resizeMode='contain'
									style={localStyles.iconsInteractiveShare}
								/>
							</TouchableOpacity>
							<TouchableOpacity onPress={onFavs}>
								<Image
									source={
										favorite
											? assets.favorite_red_filled
											: assets.like
									}
									resizeMode='contain'
									style={localStyles.iconsInteractiveLike}
								/>
							</TouchableOpacity>
						</View>
					</View>
					<CarouselCustom
						arrayImages={imagesArray}
						width={widthScreen}
						height={heightImage}
						dotsPosition={0}
					/>
				</View>
				<View style={localStyles.containerLocalInfo}>
					<View style={localStyles.containerLocalInfoTitle}>
						<Text style={localStyles.localInfoTitle}>
							El rincon{" "}
						</Text>
						<Text style={localStyles.localInfoDistance}>
							102 m2
						</Text>
					</View>
					<Text style={localStyles.localInfoActivity}>
						Cancha de futbol
					</Text>
					<View style={localStyles.containerInfoReviewAndPrice}>
						<Image
							source={assets.star_red}
							resizeMode='contain'
							style={localStyles.imageInfoReview}
						/>
						<Text style={localStyles.infoReviewAndPrice}>
							4.0 - 20 opiniones - 1 USD
						</Text>
						<Text style={localStyles.infoReviewAndPriceHour}>
							hora por persona
						</Text>
					</View>
				</View>
				<View style={localStyles.descriptionContainer}>
					<Text style={localStyles.descriptionTitle}>
						Descripción
					</Text>
					<Text style={localStyles.descriptionParagraph}>
						Disfruta de nuestro establecimiento con la mejor cancha
						de fútbol. Tenemos horarios en la mañana, tarde y noche.
						Siempre estamos para ofrecerte el mejor servicio en
						nuestras instalaciones, puedes venir con un grupo
						grande, te recibiremos con la mejor disposición como nos
						caracteriza.
					</Text>
				</View>
				<View style={localStyles.containerLineSeparator}></View>
				<View style={localStyles.containerServices}>
					<Text style={localStyles.servicesTitle}>Servicios</Text>
					<View style={localStyles.containerServicesOffered}>
						{renderServices()}
					</View>
				</View>
				<View style={localStyles.containerLineSeparator}></View>

				<View style={localStyles.locationContainer}>
					<Text style={localStyles.locationTitle}>Como llegar:</Text>
					<Image
						source={assets.dummy5}
						resizeMode='contain'
						style={localStyles.locationImage}
					/>
					<Text style={localStyles.locationAdress}>
						Dirección: Venezuela 1564
					</Text>
				</View>
				<View style={localStyles.containerLineSeparator}></View>
				<View style={localStyles.scheduleContainer}>
					<Text style={localStyles.scheduleTitle}>Horarios</Text>
					{renderDays()}
				</View>
				<View style={localStyles.containerCommunity}>
					<View style={localStyles.containerCommuinityTitle}>
						<Text style={localStyles.communityTitleText}>
							Qué tan
						</Text>
						<Image
							source={dark ? assets.logo_dark : assets.logo_light}
							resizeMode='contain'
							style={localStyles.comunnityTitleLogo}
						/>
						<Text style={localStyles.communityTitleText}>
							{" "}
							sos?
						</Text>
					</View>
					<Text style={localStyles.communityDescription}>
						¡Únete con la comunidad y anímate a juntarte con
						desconocidos ya!
					</Text>
					<View style={localStyles.containerCommunityGroups}>
						<Text style={localStyles.communityGroupTitle}>
							Grupos armados en este momento:
						</Text>
						<View style={localStyles.containerCommunityGroupsLives}>
							<View style={localStyles.communityGroupListAvatars}>
								<Image
									source={
										dark
											? assets.user_dark
											: assets.user_light
									}
									resizeMode='contain'
									style={
										localStyles.communityGroupImageAvatar
									}
								/>
								<Image
									source={
										dark
											? assets.user_dark
											: assets.user_light
									}
									resizeMode='contain'
									style={
										localStyles.communityGroupImageAvatar
									}
								/>
								<Image
									source={
										dark
											? assets.user_dark
											: assets.user_light
									}
									resizeMode='contain'
									style={
										localStyles.communityGroupImageAvatar
									}
								/>
								<Image
									source={
										dark
											? assets.user_dark
											: assets.user_light
									}
									resizeMode='contain'
									style={
										localStyles.communityGroupImageAvatar
									}
								/>
							</View>
							<View
								style={
									localStyles.containerCommunityGroupsLivesInfo
								}>
								<Text
									style={localStyles.communityGroupNameGroup}>
									Grupo 1
								</Text>
								<Text
									style={
										localStyles.communityGroupDetailGroup
									}>
									Faltan 2 personas más
								</Text>
							</View>
						</View>
						<View style={localStyles.containerCommunityGroupsLives}>
							<View style={localStyles.communityGroupListAvatars}>
								<Image
									source={
										dark
											? assets.user_dark
											: assets.user_light
									}
									resizeMode='contain'
									style={
										localStyles.communityGroupImageAvatar
									}
								/>
								<Image
									source={
										dark
											? assets.user_dark
											: assets.user_light
									}
									resizeMode='contain'
									style={
										localStyles.communityGroupImageAvatar
									}
								/>
								<Image
									source={
										dark
											? assets.user_dark
											: assets.user_light
									}
									resizeMode='contain'
									style={
										localStyles.communityGroupImageAvatar
									}
								/>
							</View>
							<View
								style={
									localStyles.containerCommunityGroupsLivesInfo
								}>
								<Text
									style={localStyles.communityGroupNameGroup}>
									Grupo 2
								</Text>
								<Text
									style={
										localStyles.communityGroupDetailGroup
									}>
									Faltan 6 personas más
								</Text>
							</View>
						</View>
					</View>
					<Text style={localStyles.communityFooter}>
						Hay más de 10 grupos disponibles para unirse.
					</Text>
				</View>

				{/* OPINIONES */}
				<View style={localStyles.containerReviews}>
					<View style={localStyles.containerReviewsTitle}>
						<Image
							source={assets.star_red}
							resizeMode='contain'
							style={localStyles.reviewTitleIcon}
						/>
						<Text style={localStyles.reviewTitleText}>
							{reviewsLocal.score} - {reviewsLocal.total}{" "}
							Opiniones
						</Text>
					</View>
					{/* VALORES */}
					<ButtonChangeTheme />
					<View style={localStyles.containerReviewTypes}>
						{renderReviews()}
					</View>

					{/* CAROUSEL OPINIONES */}
					<CarouselLocalScreenReviews reviewsArray={reviewsArray} />
				</View>
			</ScrollView>
			{/* MAKE RESERVATION */}
			<View style={localStyles.containerMakeReservation}>
				<View style={localStyles.containerMakeReservationInfo}>
					<Text style={localStyles.makeReservationInfoPrice}>
						1 USD{" "}
						<Text style={localStyles.makeReservationInfoPriceHour}>
							hora por persona
						</Text>
					</Text>
					<Text style={localStyles.makeReservationInfoText}>
						Selecciona tu grupo o crea uno
					</Text>
				</View>
				<View style={localStyles.containerMakeReservationButton}>
					<TouchableOpacity
						style={localStyles.makeReservationButton}
						onPress={() =>
							navigation.navigate("Seleccione un grupo")
						}>
						<Text style={localStyles.makeReservationButtonText}>
							Reservar
						</Text>
					</TouchableOpacity>
				</View>
			</View>
		</>
	);
};
