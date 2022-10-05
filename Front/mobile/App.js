import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
<<<<<<< HEAD
import { ScrollView, Image, StyleSheet, Text, View } from "react-native";
import Assets from "./constants/assets";
import Home from "./Components/Home";

export default function App() {
    return (
        <ScrollView>
            <Home />
        </ScrollView>
    );
=======
import { Image, StyleSheet, Text, View } from "react-native";
import { LocalScreen } from "./navigation/screens/LocalScreen/LocalScreen";

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<>
			<StatusBar backgroundColor='#ffffff' />
			<NavigationContainer>
				<Stack.Navigator>
					<Stack.Screen
						name='Local'
						component={LocalScreen}
						options={{ headerShown: false }}
					/>
				</Stack.Navigator>
			</NavigationContainer>
		</>
	);
>>>>>>> 6289a556c788ae18f769f9db6fad28976c885ac3
}
