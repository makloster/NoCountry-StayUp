import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useContext } from "react";
import { ThemeContext } from "../../Context/Theme";
import { ConfirmReservation } from "../screens/ConfirmReservation/ConfirmReservation";
import { CreateGroupLocal } from "../screens/CreateGroupLocal/CreateGroupLocal";
import FavoriteScreen from "../screens/FavoritesScreen/FavoriteScreen";
import { ListDateAvailableGroupScreen } from "../screens/ListDateAvailableGroupScreen/ListDateAvailableGroupScreen";
import { ListGroupsScreen } from "../screens/ListGroupsScreen/ListGroupsScreen";
import { LocalScreen } from "../screens/LocalScreen/LocalScreen";
const HomeStackNavigator = createNativeStackNavigator();

export const StackLocalScreens = () => {
	const { backTheme, notBackTheme } = useContext(ThemeContext);
	return (
		<HomeStackNavigator.Navigator
			initialRouteName='Lista de Favoritos'
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
			<HomeStackNavigator.Screen
				name='Lista de Favoritos'
				component={FavoriteScreen}
				options={{
					headerTitle: "Favoritos",
				}}
			/>
			<HomeStackNavigator.Screen
				name='Local'
				component={LocalScreen}
				options={{
					headerTitle: "Local",
				}}
			/>
			<HomeStackNavigator.Screen
				name='Seleccione un grupo'
				component={ListGroupsScreen}
				options={{
					headerTitle: "Lista de Grupos",
				}}
			/>
			<HomeStackNavigator.Screen
				name='Seleccione un horario'
				component={ListDateAvailableGroupScreen}
				options={{
					headerTitle: "Seleccione un horario",
				}}
			/>
			<HomeStackNavigator.Screen
				name='Crear Grupo'
				component={CreateGroupLocal}
				options={{
					headerTitle: "Crear Nuevo Grupo",
				}}
			/>
			<HomeStackNavigator.Screen
				name='Confirmar'
				component={ConfirmReservation}
				options={{
					headerTitle: "Grupo Creado",
				}}
			/>
		</HomeStackNavigator.Navigator>
	);
};
