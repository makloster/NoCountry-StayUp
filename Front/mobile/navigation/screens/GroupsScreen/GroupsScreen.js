import { useContext } from "react";
import { ScrollView, Text, View } from "react-native";
import { GuestMessage } from "../../../components/GuestMessage/GuestMessage";
import { UserContext } from "../../../Context/UserContext";
import { GroupScreenCard } from "./GroupScreenCard";
import { GroupsScreenStyles } from "./GroupsScreenStyles";

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
		</ScrollView>
	);
};
