import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import {
	ActivityIndicator,
	Image,
	ScrollView,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import { ButtonChangeTheme } from "../../../components/Buttons/Buttons";
import { LoadingScreen } from "../../../components/LoadingScreen/LoadingScreen";
import assets from "../../../constants/assets";
import { ListDateAvailableGroupScreenStyles } from "./ListDateAvailableGroupScreenStyles";

const dateAvailable = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

export const ListDateAvailableGroupScreen = () => {
	const navigation = useNavigation();
	const listDateAvailableGroupScreenStyles =
		ListDateAvailableGroupScreenStyles();

	const [loading, setLoading] = useState(true);

	setTimeout(() => {
		setLoading(false);
	}, 3000);

	const renderDates = () => {
		return dateAvailable.map((date, index) => (
			<TouchableOpacity
				key={index}
				style={listDateAvailableGroupScreenStyles.containerDate}
				onPress={() =>
					navigation.navigate("Crear Grupo", {
						date: `Sábado 27 de Enero - ${date}:00`,
					})
				}>
				<Image
					source={assets.group_list_icon}
					resizeMode='contain'
					style={listDateAvailableGroupScreenStyles.imageDateGroup}
				/>
				<Text style={listDateAvailableGroupScreenStyles.textDateGroup}>
					Sábado 27 de Enero - {date}:00
				</Text>
			</TouchableOpacity>
		));
	};

	return (
		<ScrollView style={listDateAvailableGroupScreenStyles.containerBig}>
			{loading ? <LoadingScreen /> : renderDates()}
			<ButtonChangeTheme />
		</ScrollView>
	);
};
