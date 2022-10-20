import { useNavigation } from "@react-navigation/native";
import { Image, Text, TouchableOpacity, View } from "react-native";
import assets from "../../../constants/assets";
import { GroupsScreenStyles } from "./GroupsScreenStyles";

export const GroupScreenCard = () => {
	const navigation = useNavigation();
	const groupsScreenStyles = GroupsScreenStyles();

	return (
		<TouchableOpacity
			onPress={() => navigation.navigate("GroupDetail")}
			style={groupsScreenStyles.cardGroup}>
			<View style={groupsScreenStyles.containerGroupInfo}>
				<Image
					source={assets.group_list_icon}
					style={groupsScreenStyles.groupIcon}
				/>
				<View style={groupsScreenStyles.containerGroupInfoText}>
					<Text style={groupsScreenStyles.groupInfoName}>
						Grupo 100
					</Text>
					<Text style={groupsScreenStyles.groupInfoDate}>
						Sábado 27 de Enero - 17:00
					</Text>
				</View>
			</View>
			<View style={groupsScreenStyles.containerLocalInfo}>
				<Image
					style={groupsScreenStyles.imageLocal}
					source={assets.dummy2}
				/>
				<View style={groupsScreenStyles.containerLocalInfoText}>
					<Text style={groupsScreenStyles.localName}>
						El rincon · Cancha de Fútbol
					</Text>
					<Text style={groupsScreenStyles.localInfo}>
						A 600 m · Grupos de 10
					</Text>
					<Text style={groupsScreenStyles.localStatus}>
						Actualmente falta(n) 9 persona(s) más
					</Text>
				</View>
			</View>
			<View style={groupsScreenStyles.containerButtons}>
				<TouchableOpacity style={groupsScreenStyles.buttonGroup}>
					<Text style={groupsScreenStyles.textButtonGroup}>
						Confirmar reserva
					</Text>
				</TouchableOpacity>
				<TouchableOpacity style={groupsScreenStyles.buttonCancel}>
					<Text style={groupsScreenStyles.textButtonCancel}>
						Cancelar reserva
					</Text>
				</TouchableOpacity>
			</View>
		</TouchableOpacity>
	);
};
