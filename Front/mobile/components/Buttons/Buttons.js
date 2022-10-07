import { useNavigation } from "@react-navigation/native";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { buttonsStyles } from "./ButtonsStyles";

export const RedButtonsLogin = ({ buttonText, path }) => {
	const navigation = useNavigation();

	return (
		<TouchableOpacity
			style={buttonsStyles.redButtonLogin}
			key={`${buttonText}`}
			onPress={() => navigation.navigate(path)}>
			<Text style={buttonsStyles.textButtonsLogin}>{buttonText}</Text>
		</TouchableOpacity>
	);
};

export const OtherLoginMethodButton = ({ buttonText, path, icon }) => {
	const navigation = useNavigation();

	return (
		<TouchableOpacity
			style={buttonsStyles.buttonRegisterOtherWays}
			onPress={() => navigation.navigate(path)}>
			<Image
				style={buttonsStyles.imageRegisterOtherWays}
				source={icon}
				resizeMode='contain'
			/>
			<Text style={buttonsStyles.textRegisterOtherWays}>
				{buttonText}
			</Text>
		</TouchableOpacity>
	);
};
