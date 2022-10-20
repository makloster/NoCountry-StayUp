import React, { useContext } from "react";
import {
	Image,
	ScrollView,
	Text,
	Touchable,
	TouchableOpacity,
	View,
} from "react-native";
import { Card, Icon, ListItem } from "react-native-elements";
import { ButtonChangeTheme } from "../../../components/Buttons/Buttons";
import { GuestMessage } from "../../../components/GuestMessage/GuestMessage";
import assets from "../../../constants/assets";
import { ThemeContext } from "../../../Context/Theme";
import { UserContext } from "../../../Context/UserContext";
import { UserStyles } from "./UserScreenStyles";

export default function UserScreen() {
	const { dark } = useContext(ThemeContext);
	const { isGuest } = useContext(UserContext);
	const userStyles = UserStyles();
	const list = [
		{
			title: "Ajustes",
			icon: dark ? assets.settings_light : assets.settings_dark,
		},
		{
			title: "Ayuda",
			icon: dark ? assets.help_light : assets.help_dark,
		},
		{
			title: "Terminos de Servicio",
			icon: dark ? assets.terms_light : assets.terms_dark,
		},
		{
			title: "Políticas de privacidad",
			icon: dark ? assets.privacy_light : assets.privacy_dark,
		},
		{
			title: "Cerrar sesión",
			icon: dark ? assets.close_light : assets.close_dark,
		},
	];

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
							source={assets.profile_picture}
							resizeMode='contain'
							style={userStyles.profilePicture}
						/>
						<View style={userStyles.containerProfileInfo}>
							<Text style={userStyles.containerProfileInfoName}>
								Jhon Doe
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
						{list.map((item, i) => (
							<TouchableOpacity
								style={userStyles.profileOptions}
								key={i}>
								<View style={userStyles.profileOptionsType}>
									<Image
										source={item.icon}
										style={userStyles.profileOptionsIcons}
									/>
									<Text style={userStyles.profileOptionsText}>
										{item.title}
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
						))}
					</View>
				</>
			)}

			<ButtonChangeTheme />
		</ScrollView>
	);
}
