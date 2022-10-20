import { useContext } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { ButtonChangeTheme } from "../../../components/Buttons/Buttons";
import { GuestMessage } from "../../../components/GuestMessage/GuestMessage";
import { UserContext } from "../../../Context/UserContext";
import GroupScreenCard from "./GroupScreenCard";
import GroupsScreenStyles from "./GroupsScreenStyles";

export const GroupsScreen = () => {
	const { isGuest } = useContext(UserContext);
	const groupsScreenStyles = GroupsScreenStyles();
	return (
		<ScrollView style={groupsScreenStyles.containerBig}>
			<Text style={groupsScreenStyles.title}>Tus Grupos</Text>
			{isGuest ? (
				<GuestMessage />
			) : (
				<View>
					<GroupScreenCard />
					<GroupScreenCard />
				</View>
			)}
			<ButtonChangeTheme />
		</ScrollView>
	);
};
