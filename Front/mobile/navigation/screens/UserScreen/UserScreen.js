import { useNavigation } from "@react-navigation/native";
import React, { useContext } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { GuestMessage } from "../../../components/GuestMessage/GuestMessage";
import assets from "../../../constants/assets";
import { ThemeContext } from "../../../Context/Theme";
import { UserContext } from "../../../Context/User";
import { UserStyles } from "./UserScreenStyles";

export default function UserScreen() {
	const { firstName, lastName } = useContext(UserContext);
	const { dark, changeTheme } = useContext(ThemeContext);
	const { isGuest, logOutUser } = useContext(UserContext);
	const userStyles = UserStyles();
	const navigation = useNavigation();
	const list = [
		{
			title: "Cambiar Tema",
			icon: dark ? assets.settings_light : assets.settings_dark,
		},
		{
			title: "Cerrar sesión",
			icon: dark ? assets.close_light : assets.close_dark,
		},
	];

	const handleLogOut = () => {
		logOutUser();
		navigation.popToTop();
	};

	return (
		<ScrollView style={userStyles.containerBig}>
			<Text style={userStyles.textPerfil}>Perfil</Text>
			{isGuest ? (
				<GuestMessage />
			) : (
				<>
					<Text style={userStyles.lineSeparator}></Text>
					<View style={userStyles.containerProfile}>
						<Image
							source={{ uri: "https://i.pravatar.cc/300" }}
							resizeMode='contain'
							style={userStyles.profilePicture}
						/>
						<View style={userStyles.containerProfileInfo}>
							<Text style={userStyles.containerProfileInfoName}>
								{firstName} {lastName}
							</Text>
							<View style={userStyles.containerProfileStatus}>
								<Image
									source={
										dark
											? assets.logo_light
											: assets.logo_dark
									}
									style={userStyles.logoProfile}
								/>
								<Image
									source={assets.bolita_verde}
									style={userStyles.greenDot}
								/>
								<Text style={userStyles.profileStatusText}>
									Siempre disponible
								</Text>
							</View>
							<View style={userStyles.containerProfileStatus}>
								<Image
									source={assets.group_list_icon}
									style={userStyles.groupIcon}
								/>
								<Text style={userStyles.profileGroupUser}>
									En grupo 100 - Futbol
								</Text>
							</View>
						</View>
					</View>
					<View style={userStyles.containerProfileOptions}>
						<TouchableOpacity
							style={userStyles.profileOptions}
							onPress={() => handleLogOut()}>
							<View style={userStyles.profileOptionsType}>
								<Image
									source={
										dark
											? assets.close_light
											: assets.close_dark
									}
									style={userStyles.profileOptionsIcons}
								/>
								<Text style={userStyles.profileOptionsText}>
									Cerrar sesión
								</Text>
							</View>
							<Image
								source={
									dark
										? assets.arrow_right_light
										: assets.arrow_right_black
								}
							/>
						</TouchableOpacity>
					</View>
				</>
			)}
			<TouchableOpacity
				style={userStyles.profileChangeTheme}
				onPress={() => changeTheme()}>
				<View style={userStyles.profileOptionsType}>
					<Image
						source={
							dark ? assets.settings_light : assets.settings_dark
						}
						style={userStyles.profileOptionsIcons}
					/>
					<Text style={userStyles.profileOptionsText}>
						Cambiar Tema
					</Text>
				</View>
			</TouchableOpacity>
		</ScrollView>
	);
}
