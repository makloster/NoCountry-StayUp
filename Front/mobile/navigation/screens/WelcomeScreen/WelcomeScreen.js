import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Dimensions, Image, Text, TouchableOpacity, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { CarouselCustom } from "../../../components/CarouselCustom/CarouselCustom";
import assets from "../../../constants/assets";
import { welcomeStyles } from "./WelcomeScreenStyles";

const arrayImages = [
	{ image: assets.login1 },
	{ image: assets.login2 },
	{ image: assets.login3 },
	{ image: assets.login4 },
];
const widthScreen = Dimensions.get("window").width;
const heightImage = widthScreen - 121;

export const WelcomeScreen = () => {
	// const welcomeStyles = WelcomeScreenStyles();

	const navigation = useNavigation();

	return (
		<ScrollView style={welcomeStyles.containerBig}>
			<View style={welcomeStyles.containerScreen}>
				<Image
					source={assets.principal_logo_light}
					resizeMode='contain'
					style={welcomeStyles.logoIcon}
				/>
				<CarouselCustom
					arrayImages={arrayImages}
					width={widthScreen}
					height={350}
					dotsPosition={-30}
				/>
				<TouchableOpacity
					key={`welcome`}
					style={welcomeStyles.buttonFindPlaces}>
					<Text
						style={welcomeStyles.textButtonFindPlaces}
						onPress={() => navigation.navigate("LoginScreen")}>
						Encontrar Lugares
					</Text>
				</TouchableOpacity>
			</View>
		</ScrollView>
	);
};
