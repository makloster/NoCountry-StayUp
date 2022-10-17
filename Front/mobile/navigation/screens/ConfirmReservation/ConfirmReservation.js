import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { ButtonChangeTheme } from "../../../components/Buttons/Buttons";
import assets from "../../../constants/assets";
import { ConfirmReservationStyles } from "./ConfirmReservationStyles";

export const ConfirmReservation = () => {
	const navigation = useNavigation();
	const confirmReservationStyles = ConfirmReservationStyles();
	return (
		<ScrollView style={confirmReservationStyles.containerBig}>
			<View style={confirmReservationStyles.containerConfirmation}>
				<Image
					source={assets.reservation_1}
					resizeMode='contain'
					style={confirmReservationStyles.imageWithIcons}
				/>
				<Image
					source={assets.reservation_2}
					resizeMode='contain'
					style={confirmReservationStyles.imageWithIcons}
				/>
				<Text style={confirmReservationStyles.confirmReservation}>
					Reserva realizada correctamente
				</Text>
				<View style={confirmReservationStyles.containerInfoGroup}>
					<Image
						source={assets.group_list_icon}
						resizeMode='contain'
						style={confirmReservationStyles.iconGroup}
					/>
					<View>
						<Text style={confirmReservationStyles.nameGroup}>
							Haz creado un nuevo grupo:
						</Text>
						<Text style={confirmReservationStyles.nameGroup}>
							Grupo 130
						</Text>
						<Text style={confirmReservationStyles.infoGroup}>
							Sabado 27 de Enero - 11:00
						</Text>
					</View>
				</View>
				<Image
					source={assets.reservation_3}
					resizeMode='contain'
					style={confirmReservationStyles.imageWithIcons}
				/>
				<TouchableOpacity
					style={confirmReservationStyles.makeReservationButton}
					onPress={() => navigation.navigate("Lista de Favoritos")}>
					<Text
						style={
							confirmReservationStyles.makeReservationButtonText
						}>
						Ir al Home
					</Text>
				</TouchableOpacity>
			</View>
		</ScrollView>
	);
};
