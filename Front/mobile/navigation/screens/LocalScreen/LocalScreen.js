import { useNavigation } from "@react-navigation/native";
import React, { useContext, useEffect, useState } from "react";
import {
	Dimensions,
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
import { UserContext } from "../../../Context/UserContext";
import { ArrayServices } from "../../../data/services";
import { LocalStyles } from "./LocalScreenStyles";

const widthScreen = Dimensions.get("window").width;
const heightImage = widthScreen - 121;

export const LocalScreen = ({ route }) => {
	const { local, imageDemo } = route.params;
	const servicesArray = ArrayServices();
	const localStyles = LocalStyles();
	const navigation = useNavigation();
	const { dark } = useContext(ThemeContext);
	const { isGuest } = useContext(UserContext);

	const [localParams, setLocalParams] = useState(local);
	const [favorite, setFavorite] = useState(false);
	const imagesArray = [
		{
			image: imageDemo,
		},
		{
			image: imageDemo,
		},
		{
			image: imageDemo,
		},
		{
			image: imageDemo,
		},
	];

	useEffect(() => {
		navigation.setOptions({
			title: localParams.name,
			headerTitleStyle: {
				fontSize: 20,
			},
		});
	}, []);

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

	const renderDays = (arrayDays) => {
		return arrayDays.map((day) => (
			<View key={day.day} style={localStyles.containerScheduleByDay}>
				<Text style={localStyles.containerScheduleDay}>{day.day}</Text>
				<Text style={localStyles.containerScheduleTime}>
					{day.time}
				</Text>
			</View>
		));
	};

	const renderGroupsActive = (arrayGroupsAvailable) => {
		return arrayGroupsAvailable.map((group) => (
			<View
				key={group.name}
				style={localStyles.containerCommunityGroupsLives}>
				<View style={localStyles.communityGroupListAvatars}>
					<Image
						source={dark ? assets.user_dark : assets.user_light}
						resizeMode='contain'
						style={localStyles.communityGroupImageAvatar}
					/>
				</View>
				<View style={localStyles.containerCommunityGroupsLivesInfo}>
					<Text style={localStyles.communityGroupNameGroup}>
						{group.name}
					</Text>
					<Text style={localStyles.communityGroupDetailGroup}>
						Faltan {group.missing} personas más
					</Text>
				</View>
			</View>
		));
	};

	const renderReviews = (arrayReviews) => {
		return arrayReviews.map((review) => (
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
							{!isGuest && (
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
							)}
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
							{localParams.name}{" "}
						</Text>
						<Text style={localStyles.localInfoDistance}>
							{localParams.size}
						</Text>
					</View>
					<Text style={localStyles.localInfoActivity}>
						{localParams.rent}
					</Text>
					<View style={localStyles.containerInfoReviewAndPrice}>
						<Image
							source={assets.star_red}
							resizeMode='contain'
							style={localStyles.imageInfoReview}
						/>
						<Text style={localStyles.infoReviewAndPrice}>
							{localParams.reviewsInfo.score} -{" "}
							{localParams.reviewsInfo.total} opiniones -{" "}
							{localParams.pricePerPerson}
							USD
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
						{localParams.description}
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
						Dirección: {localParams.adress}
					</Text>
				</View>
				<View style={localStyles.containerLineSeparator}></View>
				<View style={localStyles.scheduleContainer}>
					<Text style={localStyles.scheduleTitle}>Horarios</Text>
					{renderDays(localParams.timeOpen)}
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
						{renderGroupsActive(localParams.groupsActiveInLocal)}
					</View>
					<Text style={localStyles.communityFooter}>
						Hay más de {localParams.quantityGroupsActives} grupos
						disponibles para unirse.
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
							{localParams.reviewsInfo.score} -{" "}
							{localParams.reviewsInfo.total} Opiniones
						</Text>
					</View>
					{/* VALORES */}
					<ButtonChangeTheme />
					<View style={localStyles.containerReviewTypes}>
						{renderReviews(localParams.reviewsInfo.reviews)}
					</View>

					{/* CAROUSEL OPINIONES */}
					<CarouselLocalScreenReviews
						reviewsArray={localParams.reviews}
					/>
				</View>
			</ScrollView>
			{/* MAKE RESERVATION */}
			{!isGuest && (
				<View style={localStyles.containerMakeReservation}>
					<View style={localStyles.containerMakeReservationInfo}>
						<Text style={localStyles.makeReservationInfoPrice}>
							{localParams.pricePerPerson} USD{" "}
							<Text
								style={
									localStyles.makeReservationInfoPriceHour
								}>
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
								navigation.navigate("Seleccione un grupo", {
									local,
									imageDemo,
								})
							}>
							<Text style={localStyles.makeReservationButtonText}>
								Reservar
							</Text>
						</TouchableOpacity>
					</View>
				</View>
			)}
		</>
	);
};
