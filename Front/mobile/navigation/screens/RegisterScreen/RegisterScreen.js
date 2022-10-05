import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { registerScreenStyles } from "./RegisterScreenStyles";

export const RegisterScreen = () => {
	const [name, setName] = useState("");
	const [lastName, setLastName] = useState("");
	const [birthDate, setBirthDate] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	return (
		<ScrollView style={registerScreenStyles.containerBig}>
			<View style={registerScreenStyles.containerRegisterScreen}>
				<TextInput
					style={registerScreenStyles.inputUserInfo}
					onChangeText={(e) => setName(e)}
					value={name}
					placeholder='Nombre'
				/>
				<TextInput
					style={registerScreenStyles.inputUserInfo}
					onChangeText={(e) => setLastName(e)}
					value={lastName}
					placeholder='Apellido'
				/>
				<TextInput
					style={registerScreenStyles.inputUserInfo}
					onChangeText={(e) => setBirthDate(e)}
					value={birthDate}
					placeholder='Fecha de nacimiento (dd/mm/aa)'
				/>
				<Text style={registerScreenStyles.textRegisterScreen}>
					Debe ser mayor de 18 años para registrarse, su información
					no sera compartida a otras personas.
				</Text>
				<TextInput
					style={registerScreenStyles.inputUserInfo}
					onChangeText={(e) => setEmail(e)}
					value={email}
					placeholder='Email'
				/>
				<TextInput
					style={registerScreenStyles.inputUserInfo}
					onChangeText={(e) => setPassword(e)}
					value={password}
					placeholder='Contaseña'
				/>
				<View style={registerScreenStyles.containerButtonSelection}>
					<TouchableOpacity
						style={registerScreenStyles.buttonSelection}>
						<Text style={registerScreenStyles.textButtonSelection}>
							Mujer
						</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={registerScreenStyles.buttonSelection}>
						<Text style={registerScreenStyles.textButtonSelection}>
							Hombre
						</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={registerScreenStyles.buttonSelection}>
						<Text style={registerScreenStyles.textButtonSelection}>
							Otro
						</Text>
					</TouchableOpacity>
				</View>
				<Text style={registerScreenStyles.textRegisterScreen}>
					Seleccionando los acuerdos y continuar, usted acepta los
					Términos de Servicio, Pagos y toma en conocimiento nuestra
					Política de Privacidad.
				</Text>
				<TouchableOpacity
					key={`register`}
					style={registerScreenStyles.buttonAccept}>
					<Text style={registerScreenStyles.textButtonAccept}>
						Acepto
					</Text>
				</TouchableOpacity>
			</View>
		</ScrollView>
	);
};
