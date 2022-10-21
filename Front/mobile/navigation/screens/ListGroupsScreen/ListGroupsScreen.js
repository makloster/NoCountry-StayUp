import { useNavigation } from "@react-navigation/native";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import assets from "../../../constants/assets";
import { ListGroupsScreenStyles } from "./ListGroupsScreenStyles";

export const ListGroupsScreen = ({ route }) => {
	const { local, imageDemo } = route.params;

	const listGroupsScreenStyles = ListGroupsScreenStyles();
	const navigation = useNavigation();

	const renderGroupInfo = (arrayGroups) => {
		return arrayGroups.map((group) => (
			<TouchableOpacity
				key={group.name}
				style={listGroupsScreenStyles.containerGroup}
				onPress={() =>
					navigation.navigate("Grupo Disponible", {
						group,
						imageDemo,
					})
				}>
				<Image
					source={assets.group_list_icon}
					resizeMode='contain'
					style={listGroupsScreenStyles.iconGroup}
				/>
				<View style={listGroupsScreenStyles.containerGroupInfo}>
					<Text style={listGroupsScreenStyles.groupInfoName}>
						{group.name}
					</Text>
					<Text style={listGroupsScreenStyles.groupInfoDate}>
						{group.date}
					</Text>
				</View>
			</TouchableOpacity>
		));
	};

	return (
		<>
			<ScrollView style={listGroupsScreenStyles.containerBig}>
				<View style={listGroupsScreenStyles.containerListGroupScreen}>
					{renderGroupInfo(local.groupsActiveInLocal)}
				</View>
			</ScrollView>
			<View style={listGroupsScreenStyles.containerCreateGroup}>
				<TouchableOpacity
					style={listGroupsScreenStyles.buttonCreateGroup}
					onPress={() =>
						navigation.navigate("Seleccione un horario", {
							local,
							imageDemo,
						})
					}>
					<Text style={listGroupsScreenStyles.buttonCreateGroupText}>
						Crear Grupo
					</Text>
				</TouchableOpacity>
			</View>
		</>
	);
};
