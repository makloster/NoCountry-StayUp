import { useNavigation } from "@react-navigation/native";
import { Text, TouchableOpacity, View } from "react-native";
import { GuestMessageStyles } from "./GuestMessageStyles";

export const GuestMessage = () => {
	const guestMessageStyles = GuestMessageStyles();
	const navigation = useNavigation();
	return (
		<View>
			<View style={guestMessageStyles.containerLogInMessage}>
				<Text style={guestMessageStyles.logInMessage}>
					Inicia sesión para ver esta sección
				</Text>
				<Text style={guestMessageStyles.logInSubtitle}>
					Puedes revisar todos tus amigos, mensajes, favoritos y
					grupos que tienes en el momento y cancelar si lo deseas.
				</Text>
			</View>
			<TouchableOpacity
				key={`welcome`}
				style={guestMessageStyles.buttonLogIn}
				onPress={() => navigation.popToTop()}>
				<Text style={guestMessageStyles.buttonLogInText}>
					Iniciar sesión
				</Text>
			</TouchableOpacity>
		</View>
	);
};
