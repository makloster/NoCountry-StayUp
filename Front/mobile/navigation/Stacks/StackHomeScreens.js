import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useContext } from "react";
import { ThemeContext } from "../../Context/Theme";
import { ChatWith } from "../screens/ChatWith/ChatWith";
import { ConfirmReservation } from "../screens/ConfirmReservation/ConfirmReservation";
import { CreateGroupLocal } from "../screens/CreateGroupLocal/CreateGroupLocal";
import { FriendsScreen } from "../screens/FriendsScreen/FriendsScreen";
import { Home } from "../screens/HomeScreen/HomeScreen";
import { ListDateAvailableGroupScreen } from "../screens/ListDateAvailableGroupScreen/ListDateAvailableGroupScreen";
import { ListGroupsScreen } from "../screens/ListGroupsScreen/ListGroupsScreen";
import { LocalScreen } from "../screens/LocalScreen/LocalScreen";
import { NotificationsScreen } from "../screens/NotificationsScreen/NotificationsScreen";

const HomeStackNavigator = createNativeStackNavigator();

export const StackHomeScreens = () => {
	const { backTheme, notBackTheme } = useContext(ThemeContext);

	return (
		<HomeStackNavigator.Navigator
			initialRouteName='Home'
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
				name='Home'
				component={Home}
				options={{
					headerShown: false,
				}}
			/>
			<HomeStackNavigator.Screen
				name='Notificaciones'
				component={NotificationsScreen}
				options={{
					headerShown: true,
					title: false,
				}}
			/>
			<HomeStackNavigator.Screen
				name='Mensajes'
				component={FriendsScreen}
				options={{
					headerTitle: "Mensajes",
				}}
			/>
			<HomeStackNavigator.Screen
				name='Chat'
				component={ChatWith}
				options={{
					headerTitle: "Chat",
				}}
			/>
			<HomeStackNavigator.Screen name='Local' component={LocalScreen} />
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
					headerShown: false,
				}}
			/>
		</HomeStackNavigator.Navigator>
	);
};
