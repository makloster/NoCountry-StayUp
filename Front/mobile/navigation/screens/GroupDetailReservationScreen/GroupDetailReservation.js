import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import assets from "../../../constants/assets";
import { GroupDetailReservationStyles } from "./GroupDetailReservationStyles";

export const GroupDetailReservation = ({ route }) => {
	const { group, imageDemo } = route.params;
	const groupDetailReservationStyles = GroupDetailReservationStyles();
	const navigation = useNavigation();

	useEffect(() => {
		navigation.setOptions({
			title: group.name,
		});
	}, []);

	return (
		<>
			<ScrollView style={groupDetailReservationStyles.containerBig}>
				<View style={groupDetailReservationStyles.cardLocals}>
					<Image
						source={imageDemo}
						resizeMode='cover'
						style={groupDetailReservationStyles.cardsImage}
					/>
					<View
						style={groupDetailReservationStyles.containerLocalInfo}>
						<View
							style={
								groupDetailReservationStyles.containerLocalText
							}>
							<Text
								style={
									groupDetailReservationStyles.cardLocalTextTitle
								}>
								El rincon · Cancha de Fútbol
							</Text>
							<View
								style={
									groupDetailReservationStyles.cardLocalScore
								}>
								<Image
									source={assets.star_red}
									style={
										groupDetailReservationStyles.star_red
									}
								/>
								<Text
									style={
										groupDetailReservationStyles.cardLocalScorePoints
									}>
									4.0
								</Text>
							</View>
						</View>
						<Text
							style={
								groupDetailReservationStyles.cardLocalSubtitle
							}>
							A 600 m · Grupos de 10
						</Text>
						<View
							style={
								groupDetailReservationStyles.containerCardLocalPrice
							}>
							<Text
								style={
									groupDetailReservationStyles.cardLocalPrice
								}>
								10 USD{" "}
							</Text>
							<Text
								style={
									groupDetailReservationStyles.cardLocalPriceText
								}>
								hora
							</Text>
						</View>
					</View>
				</View>
				<Text style={groupDetailReservationStyles.localStatus}>
					Actualmente falta(n) {group.missing} persona(s) más
				</Text>
			</ScrollView>
			<View style={groupDetailReservationStyles.containerMakeReservation}>
				<View
					style={
						groupDetailReservationStyles.containerMakeReservationInfo
					}>
					<Text
						style={
							groupDetailReservationStyles.makeReservationInfoPrice
						}>
						1 USD{" "}
						<Text
							style={
								groupDetailReservationStyles.makeReservationInfoPriceHour
							}>
							hora por persona
						</Text>
					</Text>
					<Text
						style={
							groupDetailReservationStyles.makeReservationInfoText
						}>
						Se cobrara en la confirmación
					</Text>
				</View>
				<View
					style={
						groupDetailReservationStyles.containerMakeReservationButton
					}>
					<TouchableOpacity
						style={
							groupDetailReservationStyles.makeReservationButton
						}
						onPress={() =>
							navigation.navigate("Confirmar", {
								group,
							})
						}>
						<Text
							style={
								groupDetailReservationStyles.makeReservationButtonText
							}>
							Reservar
						</Text>
					</TouchableOpacity>
				</View>
			</View>
		</>
	);
};
