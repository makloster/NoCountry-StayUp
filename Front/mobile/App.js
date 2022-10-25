import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { LocalProvider } from "./Context/Locals";
import { ThemeProvider } from "./Context/Theme";
import { UserProvider } from "./Context/User";
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
		<UserProvider>
			<LocalProvider>
				<ThemeProvider>
					<Navigation />
				</ThemeProvider>
			</LocalProvider>
		</UserProvider>
	);
}
