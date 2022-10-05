import React from "react";
import { Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export default function UserScreen() {
	return (
		<ScrollView style={{ backgroundColor: "pink" }}>
			<View>
				<Text
					style={{
						fontSize: 30,
						textAlign: "center",
						marginTop: "20%",
					}}>
					UserScreen
				</Text>
			</View>
		</ScrollView>
	);
}
