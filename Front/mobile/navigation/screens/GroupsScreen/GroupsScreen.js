import { ScrollView, Text, View } from "react-native";
import { ButtonChangeTheme } from "../../../components/Buttons/Buttons";
import GroupScreenCard from "./GroupScreenCard";
import GroupsScreenStyles from "./GroupsScreenStyles";

export const GroupsScreen = () => {
	const groupsScreenStyles = GroupsScreenStyles();
	return (
		<ScrollView style={groupsScreenStyles.containerBig}>
			<View>
				<Text style={groupsScreenStyles.title}>Tus Grupos</Text>
				<GroupScreenCard />
				<GroupScreenCard />
			</View>
			<ButtonChangeTheme />
		</ScrollView>
	);
};
