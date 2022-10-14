import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { Text } from "react-native";
import { ThemeProvider } from "./Context/Theme";
import Navigation from "./navigation/Navigation";

export default function App() {
	const [fontsLoaded] = useFonts({
		ChivoBold: require("./assets/Fonts/bold.ttf"),
		ChivoLight: require("./assets/Fonts/light.ttf"),
		ChivoRegular: require("./assets/Fonts/regular.ttf"),
	});

	useEffect(() => {
		async function prepare() {
			await SplashScreen.preventAutoHideAsync();
		}
		prepare();
	}, []);

	if (!fontsLoaded) {
		return null;
	} else {
		SplashScreen.hideAsync();
	}

	return (
		<ThemeProvider>
			<Navigation />
		</ThemeProvider>
	);
}
