import { useNavigation } from "@react-navigation/native";
import { useContext, useEffect, useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { FilterLocals } from "../../../components/FilterLocals/FilterLocals";
import assets from "../../../constants/assets";
import { LocalContext } from "../../../Context/Locals";
import { ThemeContext } from "../../../Context/Theme";
import { UserContext } from "../../../Context/User";
import { renderCardsInGroups } from "../../../helpers/renderCardsInGroupsActive";
import { renderImage } from "../../../helpers/renderImage";
import { HomeStyles } from "./HomeScreenStyles";

export const Home = () => {
	const homeStyles = HomeStyles();
	const { dark } = useContext(ThemeContext);
	const { isGuest } = useContext(UserContext);
	const { localsFiltered, filterLocalsByActivity } = useContext(LocalContext);
	const navigation = useNavigation();
	const [favorite, setFavorite] = useState(false);

	const onFavs = () => {
		setFavorite(!favorite);
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

			<FilterLocals />

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
						{renderCardsInGroups("Todos")}
					</ScrollView>
				</>
			)}

			<View style={homeStyles.containerCardsLocals}>
				{localsFiltered.length === 0 ? (
					<Text>No hay resultados</Text>
				) : (
					localsFiltered.map((local) => (
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
											style={
												homeStyles.cardLocalScorePoints
											}>
											{local.reviewsInfo.score}
										</Text>
									</View>
								</View>
								<Text style={homeStyles.cardLocalSubtitle}>
									A 600 m · Grupos de{" "}
									{local.totalPeoplePerGroup}
								</Text>
								<View
									style={homeStyles.containerCardLocalPrice}>
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
				)}
			</View>
		</ScrollView>
	);
};
