import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { ButtonChangeTheme } from "../../../components/Buttons/Buttons";
import assets from "../../../constants/assets";
import { ListDateAvailableGroupScreenStyles } from "./ListDateAvailableGroupScreenStyles";

export const ListDateAvailableGroupScreen = ({ route }) => {
	const { local, imageDemo } = route.params;
	const navigation = useNavigation();
	const listDateAvailableGroupScreenStyles =
		ListDateAvailableGroupScreenStyles();

	const renderDates = (dateAvailableArray) => {
		return dateAvailableArray.map((date, index) => (
			<TouchableOpacity
				key={index}
				style={listDateAvailableGroupScreenStyles.containerDate}
				onPress={() =>
					navigation.navigate("Crear Grupo", {
						date: date.date,
						imageDemo,
						local,
					})
				}>
				<Image
					source={assets.group_list_icon}
					resizeMode='contain'
					style={listDateAvailableGroupScreenStyles.imageDateGroup}
				/>
				<Text style={listDateAvailableGroupScreenStyles.textDateGroup}>
					{date.date}
				</Text>
			</TouchableOpacity>
		));
	};

	return (
		<ScrollView style={listDateAvailableGroupScreenStyles.containerBig}>
			{renderDates(local.groupsActiveInLocal)}
			<ButtonChangeTheme />
		</ScrollView>
	);
};
