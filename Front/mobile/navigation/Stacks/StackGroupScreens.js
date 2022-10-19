import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useContext } from "react";
import { ThemeContext } from "../../Context/Theme";
import { GroupsDetail } from "../screens/GroupsDetailsScreen/GroupsDetails";
import { GroupsScreen } from "../screens/GroupsScreen/GroupsScreen";

const GroupStackNavigator = createNativeStackNavigator();

export const StackGroupScreens = () => {
	const { backTheme, notBackTheme } = useContext(ThemeContext);

	return (
		<GroupStackNavigator.Navigator
			initialRouteName='Groups'
			screenOptions={{
				headerBackButtonMenuEnabled: true,
				headerBackTitleVisible: true,
				headerTransparent: true,
				headerTintColor: notBackTheme,
				headerTitleAlign: "center",
				headerStyle: {
					backgroundColor: backTheme,
				},
			}}>
			<GroupStackNavigator.Screen
				name='Groups'
				component={GroupsScreen}
				options={{
					headerShown: false,
				}}
			/>
			<GroupStackNavigator.Screen
				name='GroupDetail'
				component={GroupsDetail}
				options={{
					headerShown: true,
				}}
			/>
		</GroupStackNavigator.Navigator>
	);
};
