import { Chivo_300Light } from "@expo-google-fonts/chivo";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback, useEffect } from "react";
import { Text } from "react-native";
import Navigation from "./navigation/Navigation";

export default function App() {
	const [fontsLoaded] = useFonts({
		Black: require("./assets/Fonts/Chivo-Black.ttf"),
		Light: Chivo_300Light,
	});

	useEffect(() => {
		async function prepare() {
			await SplashScreen.preventAutoHideAsync();
		}
		prepare();
	}, []);

	const onLayout = useCallback(async () => {
		if (fontsLoaded) {
			await SplashScreen.hideAsync();
		}
	}, [fontsLoaded]);

	if (!fontsLoaded) return null;

	return (
		<>
			<Navigation />
			<Text style={{ fontFamily: "Black" }} onLayout={onLayout}>
				HOLA PROBANDO FONTS
			</Text>
			<Text style={{ fontFamily: "Light" }} onLayout={onLayout}>
				HOLA PROBANDO FONTS
			</Text>
		</>
	);
}
