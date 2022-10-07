import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import {
	ButtonChangeTheme,
	RedButtonsLogin,
} from "../../../components/Buttons/Buttons";
import { RegisterScreenStyles } from "./RegisterScreenStyles";

export const RegisterScreen = () => {
	const registerScreenStyles = RegisterScreenStyles();
	const [name, setName] = useState("");
	const [lastName, setLastName] = useState("");
	const [birthDate, setBirthDate] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [genre, setGenre] = useState("");

	const handleSelectedGenre = (value) => {
		setGenre(value);
	};
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
					keyboardType='number-pad'
					secureTextEntry={true}
				/>
				<View style={registerScreenStyles.containerButtonSelection}>
					<TouchableOpacity
						style={
							genre === "w"
								? registerScreenStyles.buttonSelected
								: registerScreenStyles.buttonSelection
						}
						onPress={() => handleSelectedGenre("w")}>
						<Text
							style={
								genre === "w"
									? registerScreenStyles.textButtonSelected
									: registerScreenStyles.textButtonSelection
							}>
							Mujer
						</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={
							genre === "m"
								? registerScreenStyles.buttonSelected
								: registerScreenStyles.buttonSelection
						}
						onPress={() => handleSelectedGenre("m")}>
						<Text
							style={
								genre === "m"
									? registerScreenStyles.textButtonSelected
									: registerScreenStyles.textButtonSelection
							}>
							Hombre
						</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={
							genre === "o"
								? registerScreenStyles.buttonSelected
								: registerScreenStyles.buttonSelection
						}
						onPress={() => handleSelectedGenre("o")}>
						<Text
							style={
								genre === "o"
									? registerScreenStyles.textButtonSelected
									: registerScreenStyles.textButtonSelection
							}>
							Otro
						</Text>
					</TouchableOpacity>
				</View>
				<Text style={registerScreenStyles.textRegisterScreen}>
					Seleccionando los acuerdos y continuar, usted acepta los
					Términos de Servicio, Pagos y toma en conocimiento nuestra
					Política de Privacidad.
				</Text>
				<RedButtonsLogin buttonText={"Acepto"} path={"HomeScreen"} />
			</View>
			<ButtonChangeTheme />
		</ScrollView>
	);
};
