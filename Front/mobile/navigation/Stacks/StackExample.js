import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FavoriteScreen from "../screens/FavoritesScreen/FavoriteScreen";
import { LocalScreen } from "../screens/LocalScreen/LocalScreen";
const HomeStackNavigator = createNativeStackNavigator();

export const StackExample = () => {
	return (
		<HomeStackNavigator.Navigator initialRouteName='Favorites'>
			<HomeStackNavigator.Screen
				name='Favorite Screen'
				component={FavoriteScreen}
				options={{
					headerShown: false,
				}}
			/>
			<HomeStackNavigator.Screen
				name='Local'
				component={LocalScreen}
				options={{
					headerBackButtonMenuEnabled: true,
					headerBackTitleVisible: true,
					headerTransparent: false,
					headerTintColor: "black",
					headerTitle: "",
				}}
			/>
		</HomeStackNavigator.Navigator>
	);
};
