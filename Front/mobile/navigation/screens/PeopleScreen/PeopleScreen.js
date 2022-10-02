import React from "react";
import { Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export default function PeopleScreen() {
	return (
		<ScrollView style={{ backgroundColor: "lightblue" }}>
			<View>
				<Text
					style={{
						fontSize: 30,
						textAlign: "center",
						marginTop: "20%",
					}}>
					PeopleScreen
				</Text>
			</View>
		</ScrollView>
	);
}
