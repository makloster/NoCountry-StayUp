import {} from "@react-navigation/native";
import React from "react";
import { ScrollView, Text, View } from "react-native";

export default function HomeScreen() {
	return (
		<ScrollView style={{ backgroundColor: "limegreen" }}>
			<View>
				<Text
					style={{
						fontSize: 30,
						textAlign: "center",
						marginTop: "20%",
					}}>
					HomeScreen
				</Text>
			</View>
		</ScrollView>
	);
}
