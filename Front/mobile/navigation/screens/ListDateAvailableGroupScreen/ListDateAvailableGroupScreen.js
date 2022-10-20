import { useNavigation } from "@react-navigation/native";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import assets from "../../../constants/assets";
import { ListDateAvailableGroupScreenStyles } from "./ListDateAvailableGroupScreenStyles";

export const ListDateAvailableGroupScreen = ({ route }) => {
	const { local, imageDemo } = route.params;
	const navigation = useNavigation();
	const listDateAvailableGroupScreenStyles =
		ListDateAvailableGroupScreenStyles();

	const renderDates = (dateAvailableArray) => {
		return dateAvailableArray.map((date, index) => (
			<TouchableOpacity
				key={index}
				style={listDateAvailableGroupScreenStyles.containerDate}
				onPress={() =>
					navigation.navigate("Crear Grupo", {
						date: date.date,
						imageDemo,
						local,
					})
				}>
				<Image
					source={assets.group_list_icon}
					resizeMode='contain'
					style={listDateAvailableGroupScreenStyles.imageDateGroup}
				/>
				<Text style={listDateAvailableGroupScreenStyles.textDateGroup}>
					{date.date}
				</Text>
			</TouchableOpacity>
		));
	};

	return (
		<ScrollView style={listDateAvailableGroupScreenStyles.containerBig}>
			<View style={listDateAvailableGroupScreenStyles.containerListDates}>
				{renderDates(local.groupsActiveInLocal)}
			</View>
		</ScrollView>
	);
};
