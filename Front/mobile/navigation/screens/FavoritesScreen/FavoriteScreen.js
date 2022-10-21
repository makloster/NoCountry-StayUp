import { useNavigation } from "@react-navigation/native";
import React, { useContext } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { GuestMessage } from "../../../components/GuestMessage/GuestMessage";
import assets from "../../../constants/assets";
import { UserContext } from "../../../Context/UserContext";
import { FavoriteScreenStyles } from "./FavoriteScreenStyles";

const localesFavoritos = [1, 2, 3, 4, 5];
export default function FavoriteScreen() {
	const navigation = useNavigation();
	const favoriteScreenStyles = FavoriteScreenStyles();
	const { isGuest } = useContext(UserContext);
	const renderFavorites = () => {
		return localesFavoritos.map((num, index) => (
			<TouchableOpacity
				style={favoriteScreenStyles.containerLocal}
				key={`fav${index}`}
				onPress={() => navigation.navigate("Local")}>
				<View style={favoriteScreenStyles.containerImageHeart}>
					<Image
						source={assets.dummy3}
						resizeMode='cover'
						style={favoriteScreenStyles.imageLocal}
					/>
					<TouchableOpacity
						style={favoriteScreenStyles.favoriteIconBg}>
						<Image
							source={assets.favorite_red_filled}
							resizeMode='contain'
							style={favoriteScreenStyles.favoriteIcon}
						/>
					</TouchableOpacity>
				</View>
				<View style={favoriteScreenStyles.containerInfoLocal}>
					<View style={favoriteScreenStyles.containerRateLocal}>
						<Image
							source={assets.star_red}
							resizeMode='contain'
							style={favoriteScreenStyles.rateIcon}
						/>
						<Text style={favoriteScreenStyles.rateText}>4.0</Text>
					</View>
					<View style={favoriteScreenStyles.containerTitle}>
						<Text style={favoriteScreenStyles.titleText}>
							El Rincon
						</Text>
						<Text style={favoriteScreenStyles.dotSeparator}></Text>
						<Text style={favoriteScreenStyles.titleActivity}>
							Fútbol
						</Text>
					</View>
					<View style={favoriteScreenStyles.containerSubTitle}>
						<Text style={favoriteScreenStyles.distanceText}>
							A 600 m
						</Text>
						<Text style={favoriteScreenStyles.dotSeparator}></Text>
						<Text style={favoriteScreenStyles.groupNumber}>
							Grupos de 10
						</Text>
					</View>
					<View style={favoriteScreenStyles.containerPrice}>
						<Text style={favoriteScreenStyles.priceText}>
							1 USD
						</Text>
						<Text style={favoriteScreenStyles.hourText}>
							Hora por persona
						</Text>
					</View>
				</View>
			</TouchableOpacity>
		));
	};

	return (
		<ScrollView style={favoriteScreenStyles.containerBig}>
			<Text style={favoriteScreenStyles.title}>Favoritos</Text>

			{isGuest ? (
				<GuestMessage />
			) : (
				<View style={favoriteScreenStyles.containerFavoritesScreen}>
					{renderFavorites()}
				</View>
			)}
		</ScrollView>
	);
}
