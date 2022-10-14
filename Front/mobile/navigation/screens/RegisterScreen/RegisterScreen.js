import { useNavigation } from "@react-navigation/native";
import { useContext, useEffect, useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import CountryPicker, { DARK_THEME } from "react-native-country-picker-modal";
import { ScrollView } from "react-native-gesture-handler";
import { ButtonChangeTheme } from "../../../components/Buttons/Buttons";
import { Calendar } from "../../../components/Calendar/Calendar";
import { ModalUserCreated } from "../../../components/Modals/Modals";
import assets from "../../../constants/assets";
import { ThemeContext } from "../../../Context/Theme";
import {
	emailValidation,
	getAge,
	nameLastNameValidation,
	passwordValidation,
} from "../../../helpers/inputValidations";
import { RegisterScreenStyles } from "./RegisterScreenStyles";

export const RegisterScreen = () => {
	const navigation = useNavigation();

	const registerScreenStyles = RegisterScreenStyles();
	const [name, setName] = useState(undefined);
	const [lastName, setLastName] = useState(undefined);
	const [birthDate, setBirthDate] = useState("Fecha de nacimiento");
	const [country, setCountry] = useState("Pais");

	const { dark } = useContext(ThemeContext);

	const [email, setEmail] = useState(undefined);
	const [password, setPassword] = useState(undefined);
	const [genre, setGenre] = useState(undefined);

	const [showCalendar, setShowCalendar] = useState(false);
	const [showCountry, setShowCountry] = useState(false);
	const [showPassword, setShowPassword] = useState(false);

	const [nameValid, setNameValid] = useState(undefined);
	const [lastNameValid, setLastNameValid] = useState(undefined);
	const [birthdateValid, setBirthdateValid] = useState(undefined);
	const [birthdateLess18, setBirthdateLess18] = useState();

	const [emailValid, setEmailValid] = useState(undefined);
	const [genreValid, setGenreValid] = useState(undefined);
	const [passwordValid, setPasswordValid] = useState(undefined);
	const [nameEmpty, setNameEmpty] = useState(undefined);
	const [lastNameEmpty, setLastNameEmpty] = useState(undefined);
	const [emailEmpty, setEmailEmpty] = useState(undefined);
	const [passwordEmpty, setPasswordEmpty] = useState(undefined);
	const [genreEmpty, setGenreEmpty] = useState(undefined);
	const [countryEmpty, setCountryEmpty] = useState(undefined);

	const [messageUserCreated, setMessageUserCreated] = useState(false);

	useEffect(() => {
		name === undefined || name === ""
			? setNameEmpty(true)
			: setNameEmpty(false);
		name !== undefined && nameLastNameValidation(name, setNameValid);
	}, [name]);
	useEffect(() => {
		lastName === undefined || lastName === ""
			? setLastNameEmpty(true)
			: setLastNameEmpty(false);
		lastName !== undefined &&
			nameLastNameValidation(lastName, setLastNameValid);
	}, [lastName]);
	useEffect(() => {
		lastName === undefined ||
		lastName === "" ||
		birthDate === "Fecha de nacimiento"
			? setBirthdateValid(false)
			: setBirthdateValid(true);
		getAge(birthDate) > 17
			? setBirthdateLess18(false)
			: setBirthdateLess18(true);
	}, [birthDate]);
	useEffect(() => {
		genre === undefined || genre === ""
			? setGenreEmpty(true)
			: setGenreEmpty(false);
	}, [genre]);
	useEffect(() => {
		email === undefined || email === ""
			? setEmailEmpty(true)
			: setEmailEmpty(false);
		email !== undefined && emailValidation(email, setEmailValid);
	}, [email]);
	useEffect(() => {
		password === undefined || password === ""
			? setPasswordEmpty(true)
			: setPasswordEmpty(false);
		password !== undefined &&
			passwordValidation(password, setPasswordValid);
	}, [password]);
	useEffect(() => {
		country === undefined || country === "" || country === "Pais"
			? setCountryEmpty(false)
			: setCountryEmpty(true);
	}, [country]);

	const handleSubmit = () => {
		if (
			nameValid &&
			lastNameValid &&
			birthdateValid &&
			emailValid &&
			genreValid &&
			countryEmpty &&
			!birthdateLess18
		) {
			const user = {
				name,
				lastName,
				birthDate,
				email,
				password,
				genre,
				country,
			};
			setMessageUserCreated(true);
			setTimeout(() => {
				navigation.navigate("LoginScreen");
			}, 1500);
		} else {
			console.log("ERROR USUARIO");
		}
	};

	const handleSelectedGenre = (value) => {
		setGenre(value);
		setGenreValid(true);
	};

	const selectCountry = (country) => {
		setCountry(country);
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
				{nameEmpty && (
					<Text style={registerScreenStyles.errorMessageText}>
						🛑 Campo requerido
					</Text>
				)}
				{nameValid === false && (
					<Text style={registerScreenStyles.errorMessageText}>
						🛑 Solo debe contener letras
					</Text>
				)}
				<TextInput
					style={registerScreenStyles.inputUserInfo}
					onChangeText={(e) => setLastName(e)}
					value={lastName}
					placeholder='Apellido'
				/>
				{lastNameEmpty && (
					<Text style={registerScreenStyles.errorMessageText}>
						🛑 Campo requerido
					</Text>
				)}
				{lastNameValid === false && (
					<Text style={registerScreenStyles.errorMessageText}>
						🛑 Solo debe contener letras
					</Text>
				)}
				<TouchableOpacity
					style={registerScreenStyles.inputUserInfo}
					onPress={() => setShowCalendar(true)}>
					<Text style={registerScreenStyles.textInputUserInfo}>
						{birthDate === "Fecha de nacimiento"
							? birthDate
							: new Date(birthDate).toLocaleDateString("es-EU")}
					</Text>
				</TouchableOpacity>
				{showCalendar && (
					<Calendar
						setBirthDate={setBirthDate}
						setShowCalendar={setShowCalendar}
					/>
				)}
				{birthdateValid === false && (
					<Text style={registerScreenStyles.errorMessageText}>
						🛑 Campo requerido
					</Text>
				)}
				{birthdateLess18 === true && (
					<Text style={registerScreenStyles.errorMessageText}>
						🛑 Debe ser mayor de 18 años para registrarse
					</Text>
				)}
				<TouchableOpacity
					style={registerScreenStyles.inputUserInfo}
					onPress={() => setShowCountry(true)}>
					<Text style={registerScreenStyles.textInputUserInfo}>
						{country}
					</Text>
				</TouchableOpacity>
				{showCountry && (
					<CountryPicker
						{...{
							withFlag: true,
							region: "Americas",
							subregion: "South America",
						}}
						visible
						theme={dark ? DARK_THEME : ""}
						onSelect={(e) => selectCountry(e.name)}
						onClose={() => setShowCountry(false)}
					/>
				)}
				{countryEmpty === false && (
					<Text style={registerScreenStyles.errorMessageText}>
						🛑 Campo requerido
					</Text>
				)}
				<TextInput
					style={registerScreenStyles.inputUserInfo}
					onChangeText={(e) => setEmail(e)}
					value={email}
					placeholder='Email'
					keyboardType='email-address'
				/>
				{emailEmpty && (
					<Text style={registerScreenStyles.errorMessageText}>
						🛑 Campo requerido
					</Text>
				)}
				{emailValid === false && (
					<Text style={registerScreenStyles.errorMessageText}>
						🛑 Email Invalido
					</Text>
				)}
				<View style={registerScreenStyles.containerPassword}>
					<TextInput
						style={registerScreenStyles.inputUserInfo}
						onChangeText={(e) => setPassword(e)}
						value={password}
						placeholder='Contaseña'
						keyboardType='default'
						secureTextEntry={showPassword ? false : true}
					/>
					<TouchableOpacity
						style={registerScreenStyles.containerIconHideShow}
						onPress={() => setShowPassword(!showPassword)}>
						<Image
							style={registerScreenStyles.iconHideShowPassword}
							source={
								showPassword
									? assets.hide_password
									: assets.show_password
							}
							resizeMode='contain'
						/>
					</TouchableOpacity>
				</View>
				{passwordEmpty && (
					<Text style={registerScreenStyles.errorMessageText}>
						🛑 Campo requerido
					</Text>
				)}
				{passwordValid === false && (
					<>
						<Text style={registerScreenStyles.errorMessageText}>
							🛑 Debe contener una minúscula , una mayúscula y un
							número.
						</Text>
						<Text style={registerScreenStyles.errorMessageText}>
							🛑 Debe ser mayor a 8 caracteres
						</Text>
					</>
				)}
				<View style={registerScreenStyles.containerButtonSelection}>
					<TouchableOpacity
						style={
							genre === "female"
								? registerScreenStyles.buttonSelected
								: registerScreenStyles.buttonSelection
						}
						onPress={() => handleSelectedGenre("female")}>
						<Text
							style={
								genre === "female"
									? registerScreenStyles.textButtonSelected
									: registerScreenStyles.textButtonSelection
							}>
							Mujer
						</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={
							genre === "male"
								? registerScreenStyles.buttonSelected
								: registerScreenStyles.buttonSelection
						}
						onPress={() => handleSelectedGenre("male")}>
						<Text
							style={
								genre === "male"
									? registerScreenStyles.textButtonSelected
									: registerScreenStyles.textButtonSelection
							}>
							Hombre
						</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={
							genre === "other"
								? registerScreenStyles.buttonSelected
								: registerScreenStyles.buttonSelection
						}
						onPress={() => handleSelectedGenre("other")}>
						<Text
							style={
								genre === "other"
									? registerScreenStyles.textButtonSelected
									: registerScreenStyles.textButtonSelection
							}>
							Otro
						</Text>
					</TouchableOpacity>
				</View>
				{genreEmpty && (
					<Text style={registerScreenStyles.errorMessageText}>
						🛑 Debe seleccionar uno
					</Text>
				)}
				<Text style={registerScreenStyles.textRegisterScreen}>
					Seleccionando los acuerdos y continuar, usted acepta los
					Términos de Servicio, Pagos y toma en conocimiento nuestra
					Política de Privacidad.
				</Text>
				<TouchableOpacity
					style={registerScreenStyles.redButtonLogin}
					key={`Acepto`}
					onPress={
						() => handleSubmit()
						// setShowMessageError
						// 	? setShowMessageError(true)
						// 	: navigation.navigate(path)
					}>
					<Text style={registerScreenStyles.textButtonsLogin}>
						Acepto
					</Text>
				</TouchableOpacity>
				{messageUserCreated && (
					<ModalUserCreated
						setMessageUserCreated={setMessageUserCreated}
					/>
				)}
			</View>
			<ButtonChangeTheme />
		</ScrollView>
	);
};
