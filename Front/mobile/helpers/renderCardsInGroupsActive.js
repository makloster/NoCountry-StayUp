import { Image, Text, View } from "react-native";
import assets from "../constants/assets";
import { HomeStyles } from "../navigation/screens/HomeScreen/HomeScreenStyles";

export const renderCardsInGroups = () => {
	const homeStyles = HomeStyles();
	const groups = [105, 301, 9, 43];
	const days = [
		"Lunes 15 de Noviembre - 15:00",
		"Miercoles 17 de Noviembre -21:00 ",
		"Viernes 19 de Noviembre - 19:00 ",
		"Sábado 21 de Noviembre - 17:00 ",
	];
	const leftUsers = [1, 4, 3, 6];

	return groups.map((number, index) => (
		<View key={index} style={homeStyles.containerGroupInfo}>
			<View style={homeStyles.containerGroupInfoName}>
				<Image
					source={assets.group_list_icon}
					resizeMode='contain'
					style={homeStyles.iconGroupList}
				/>
				<View style={homeStyles.containerGroupInfoText}>
					<Text style={homeStyles.groupInfoName} onPress={() => {}}>
						Grupo {number}
					</Text>
					<Text style={homeStyles.groupInfoText}>{days[index]}</Text>
				</View>
			</View>
			<Text style={homeStyles.groupInfoMembersText}>
				Falta {leftUsers[index]} usuario(s) para confirmar.
			</Text>
		</View>
	));
};
