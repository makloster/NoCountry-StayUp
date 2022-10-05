import {} from "@react-navigation/native";
import React, { useContext } from "react";
import { ScrollView, Text, View } from "react-native";
import { ThemeContext } from "../../../Context/Theme";

export default function HomeScreen() {
	const { backTheme, textTheme } = useContext(ThemeContext);

	return (
		<ScrollView style={{ backgroundColor: backTheme }}>
			<View>
				<Text
					style={{
						fontSize: 30,
						textAlign: "center",
						marginTop: "20%",
						color: textTheme,
					}}>
					HomeScreen
				</Text>
			</View>
		</ScrollView>
	);
}
