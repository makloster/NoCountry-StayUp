import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View } from "react-native";
import Assets from "./constants/assets";

export default function App() {
	return (
		<View style={styles.container}>
			<Text>app examples!</Text>
			<Image
				source={Assets.home_dark}
				resizeMode='contain'
				style={{ width: 25, height: 25 }}
			/>
			<Image
				source={Assets.bell_dark}
				resizeMode='contain'
				style={{ width: 25, height: 25 }}
			/>
			<Image
				source={{ uri: "https://picsum.photos/200/300" }}
				style={{ width: 200, height: 300 }}
			/>
			<StatusBar backgroundColor='red' />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
