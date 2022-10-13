import React from "react";
import { Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export default function GroupsScreen() {
	return (
		<ScrollView style={{ backgroundColor: "coral" }}>
			<View>
				<Text
					style={{
						fontSize: 30,
						textAlign: "center",
						marginTop: "20%",
					}}>
					GroupsScreen
				</Text>
			</View>
		</ScrollView>
	);
}
