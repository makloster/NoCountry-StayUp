import { useNavigation } from "@react-navigation/native";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { ButtonChangeTheme } from "../../../components/Buttons/Buttons";
import assets from "../../../constants/assets";
import { GroupsDetailsStyles } from "./GroupsDetailsStyles";

export const GroupsDetail = () => {
	const groupsDetailsStyles = GroupsDetailsStyles();
	const navigation = useNavigation();
	navigation.setOptions({
		title: `Grupo 100 - Sabado 27 de Enero - 17:00`,
		headerTitleStyle: {
			fontSize: 13,
		},
	});
	return (
		<ScrollView style={groupsDetailsStyles.containerBig}>
			<View style={groupsDetailsStyles.cardLocals}>
				<Image
					source={assets.dummy1}
					resizeMode='cover'
					style={groupsDetailsStyles.cardsImage}
				/>
				<View style={groupsDetailsStyles.containerLocalInfo}>
					<View style={groupsDetailsStyles.containerLocalText}>
						<Text style={groupsDetailsStyles.cardLocalTextTitle}>
							El rincon · Cancha de Fútbol
						</Text>
						<View style={groupsDetailsStyles.cardLocalScore}>
							<Image
								source={assets.star_red}
								style={groupsDetailsStyles.star_red}
							/>
							<Text
								style={
									groupsDetailsStyles.cardLocalScorePoints
								}>
								4.0
							</Text>
						</View>
					</View>
					<Text style={groupsDetailsStyles.cardLocalSubtitle}>
						A 600 m · Grupos de 10
					</Text>
					<View style={groupsDetailsStyles.containerCardLocalPrice}>
						<Text style={groupsDetailsStyles.cardLocalPrice}>
							10 USD{" "}
						</Text>
						<Text style={groupsDetailsStyles.cardLocalPriceText}>
							hora
						</Text>
					</View>
				</View>
			</View>
			<View style={groupsDetailsStyles.containerPeople}>
				<Text style={groupsDetailsStyles.titlePeople}>
					Personas en el grupo:
				</Text>
				<View style={groupsDetailsStyles.containerAvatars}>
					<Image
						style={groupsDetailsStyles.avatarImg}
						source={assets.profile_dummy_3}
						resizeMode='contain'
					/>
					<Text style={groupsDetailsStyles.avatarsName}>
						Anna Rosa
					</Text>
				</View>
				<View style={groupsDetailsStyles.containerAvatars}>
					<Image
						style={groupsDetailsStyles.avatarImg}
						source={assets.profile_dummy_4}
						resizeMode='contain'
					/>
					<Text style={groupsDetailsStyles.avatarsName}>
						Peter Epuente
					</Text>
				</View>
				<View style={groupsDetailsStyles.containerAvatars}>
					<Image
						style={groupsDetailsStyles.avatarImg}
						source={assets.profile_dummy_5}
						resizeMode='contain'
					/>
					<Text style={groupsDetailsStyles.avatarsName}>
						Juan Perez
					</Text>
				</View>
			</View>
			<ButtonChangeTheme />
		</ScrollView>
	);
};
