import { ScrollView, Text } from "react-native";
import { listGroupsScreenStyles } from "./ListGroupsScreenStyles";

export const ListGroupsScreen = () => {
	return (
		<ScrollView>
			<Text style={listGroupsScreenStyles.containerBig}>ScrollView</Text>
		</ScrollView>
	);
};
