import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const localesFavoritos = [1, 2, 3, 4, 5];
export default function FavoriteScreen() {
	const navigation = useNavigation();
	return (
		<ScrollView style={{ backgroundColor: "yellow" }}>
			<View style={{ paddingBottom: 40 }}>
				<Text
					style={{
						fontSize: 30,
						textAlign: "center",
						marginTop: "20%",
					}}>
					Favorite Screen
				</Text>
				{localesFavoritos.map((local, index) => (
					<TouchableOpacity
						key={`local${index}`}
						onPress={() => navigation.navigate("Local")}
						style={{
							backgroundColor: "purple",
							padding: 10,
							marginTop: "20%",
							width: "50%",
							alignSelf: "center",
							borderRadius: 10,
						}}>
						<Text
							style={{
								fontSize: 15,
								textAlign: "center",
								color: "white",
							}}>
							Ver Local {index}
						</Text>
					</TouchableOpacity>
				))}
			</View>
		</ScrollView>
	);
}
