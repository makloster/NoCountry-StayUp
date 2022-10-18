import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { ButtonChangeTheme } from "../../../components/Buttons/Buttons";
import assets from "../../../constants/assets";
import { CreateGroupLocalStyles } from "./CreateGroupLocalStyles";

export const CreateGroupLocal = () => {
	const navigation = useNavigation();

	const crateGroupLocalStyles = CreateGroupLocalStyles();

	return (
		<>
			<ScrollView style={crateGroupLocalStyles.containerBig}>
				<View style={crateGroupLocalStyles.containerCreateNewGroup}>
					<View style={crateGroupLocalStyles.containerInfoGroup}>
						<Image
							source={assets.group_list_icon}
							resizeMode='contain'
							style={crateGroupLocalStyles.iconGroup}
						/>
						<View>
							<Text style={crateGroupLocalStyles.nameGroup}>
								Nuevo Grupo
							</Text>
							<Text style={crateGroupLocalStyles.infoGroup}>
								Sabado 27 de Enero - 11:00
							</Text>
						</View>
					</View>
					<Image
						source={assets.dummy1}
						resizeMode='contain'
						style={crateGroupLocalStyles.imageGroup}
					/>

					<View
						style={
							crateGroupLocalStyles.containerNameRateCrateGroup
						}>
						<View
							style={
								crateGroupLocalStyles.containerNameCrateGroup
							}>
							<Text style={crateGroupLocalStyles.nameGroup}>
								El rincón
							</Text>
							<Text
								style={
									crateGroupLocalStyles.dotSeparator
								}></Text>
							<Text style={crateGroupLocalStyles.nameGroup}>
								Cancha de Fútbol
							</Text>
						</View>
						<View
							style={
								crateGroupLocalStyles.containerRateCrateGroup
							}>
							<Image
								source={assets.star_red}
								resizeMode='contain'
								style={crateGroupLocalStyles.iconStar}
							/>
							<Text style={crateGroupLocalStyles.textCreateGroup}>
								4.0
							</Text>
						</View>
					</View>
					<View
						style={
							crateGroupLocalStyles.containerDistanceGroupInfo
						}>
						<Text style={crateGroupLocalStyles.textCreateGroup}>
							A 600 m{" "}
						</Text>
						<Text style={crateGroupLocalStyles.dotSeparator}></Text>
						<Text style={crateGroupLocalStyles.textCreateGroup}>
							Grupos de 10{" "}
						</Text>
					</View>
					<Image
						source={assets.user_red}
						resizeMode='contain'
						style={crateGroupLocalStyles.iconRedAvatar}
					/>
					<Text style={crateGroupLocalStyles.descriptionCreateGroup}>
						En cuanto crees el grupo se agregaran nuevas personas
						hasta completar las 10 personas de tu grupo
					</Text>
					<ButtonChangeTheme />
				</View>
			</ScrollView>
			<View style={crateGroupLocalStyles.containerMakeReservation}>
				<View
					style={crateGroupLocalStyles.containerMakeReservationInfo}>
					<Text
						style={crateGroupLocalStyles.makeReservationInfoPrice}>
						1 USD{" "}
						<Text
							style={
								crateGroupLocalStyles.makeReservationInfoPriceHour
							}>
							hora por persona
						</Text>
					</Text>
					<Text style={crateGroupLocalStyles.makeReservationInfoText}>
						Se cobrara en la confirmación
					</Text>
				</View>
				<View
					style={
						crateGroupLocalStyles.containerMakeReservationButton
					}>
					<TouchableOpacity
						style={crateGroupLocalStyles.makeReservationButton}
						onPress={() => navigation.navigate("Confirmar")}>
						<Text
							style={
								crateGroupLocalStyles.makeReservationButtonText
							}>
							Reservar
						</Text>
					</TouchableOpacity>
				</View>
			</View>
		</>
	);
};
