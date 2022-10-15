import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import {
	ButtonChangeTheme,
	OtherLoginMethodButton,
} from "../../../components/Buttons/Buttons";
import { ModalErrorCredentials } from "../../../components/Modals/Modals";
import assets from "../../../constants/assets";
import {
	emailValidation,
	passwordValidation,
} from "../../../helpers/inputValidations";
import { POST_LoginUser } from "../../../helpers/POST_LoginUser";
import { LoginScreenStyles } from "./LoginScreenStyles";

export const LoginScreen = () => {
	const navigation = useNavigation();

	const loginScreenStyles = LoginScreenStyles();
	const [email, setEmail] = useState(undefined);
	const [password, setPassword] = useState(undefined);
	const [showMessageError, setShowMessageError] = useState(false);
	const [emailValid, setEmailValid] = useState(undefined);
	const [passwordValid, setPasswordValid] = useState(undefined);
	const [emailEmpty, setEmailEmpty] = useState(undefined);
	const [passwordEmpty, setPasswordEmpty] = useState(undefined);
	const [showPassword, setShowPassword] = useState(false);
	const [isValidLogin, setIsValidLogin] = useState(undefined);

	useEffect(() => {
		password === undefined || password === ""
			? setPasswordEmpty(false)
			: setPasswordEmpty(true);
		password !== undefined &&
			passwordValidation(password, setPasswordValid);
	}, [password]);

	useEffect(() => {
		email === undefined || email === ""
			? setEmailEmpty(false)
			: setEmailEmpty(true);
		email !== undefined && emailValidation(email, setEmailValid);
	}, [email]);

	useEffect(() => {
		isValidLogin && navigation.navigate("HomeScreen");
		isValidLogin === false && setShowMessageError(true);
		setIsValidLogin(undefined);
	}, [isValidLogin]);

	const handleSubmit = () => {
		if (emailValid && passwordValid) {
			let user = {
				email,
				password,
			};
			POST_LoginUser(user, setIsValidLogin);
		} else {
			setShowMessageError(true);
		}
	};

	return (
		<ScrollView style={loginScreenStyles.containerBig}>
			<View style={loginScreenStyles.containerEmailScreen}>
				<TextInput
					style={loginScreenStyles.registerInput}
					onChangeText={(e) => setEmail(e)}
					value={email}
					keyboardType='email-address'
					placeholder='E-mail'
				/>
				{emailEmpty === false && (
					<Text style={loginScreenStyles.errorMessageText}>
						🛑 Campo requerido
					</Text>
				)}
				{emailValid === false && (
					<Text style={loginScreenStyles.errorMessageText}>
						🛑 Email Invalido
					</Text>
				)}
				<View style={loginScreenStyles.containerPassword}>
					<TextInput
						style={loginScreenStyles.registerInput}
						onChangeText={(e) => setPassword(e)}
						value={password}
						placeholder='Password'
						keyboardType='default'
						secureTextEntry={showPassword ? false : true}
					/>
					<TouchableOpacity
						style={loginScreenStyles.containerIconHideShow}
						onPress={() => setShowPassword(!showPassword)}>
						<Image
							style={loginScreenStyles.iconHideShowPassword}
							source={
								showPassword
									? assets.hide_password
									: assets.show_password
							}
							resizeMode='contain'
						/>
					</TouchableOpacity>
				</View>
				{passwordEmpty === false && (
					<Text style={loginScreenStyles.errorMessageText}>
						🛑 Campo requerido
					</Text>
				)}

				{passwordValid === false && (
					<>
						<Text style={loginScreenStyles.errorMessageText}>
							🛑 Debe contener una minúscula , una mayúscula y un
							número.
						</Text>
						<Text style={loginScreenStyles.errorMessageText}>
							🛑 Debe ser mayor a 8 caracteres
						</Text>
					</>
				)}
				{showMessageError && (
					<ModalErrorCredentials
						setShowMessageError={setShowMessageError}
					/>
				)}
				<TouchableOpacity
					style={loginScreenStyles.redButtonLogin}
					key='Continuar'
					onPress={() => handleSubmit()}>
					<Text style={loginScreenStyles.textButtonsLogin}>
						Continuar
					</Text>
				</TouchableOpacity>
				<View style={loginScreenStyles.containerSeparator}>
					<Text style={loginScreenStyles.lineSeparator}></Text>
					<Text style={loginScreenStyles.circleSeparator}></Text>
					<Text style={loginScreenStyles.lineSeparator}></Text>
				</View>
				<View style={loginScreenStyles.containerContinueButtonsWays}>
					<OtherLoginMethodButton
						buttonText={"Crear Cuenta"}
						path={"RegisterScreen"}
						icon={assets.user_dark}
					/>
					<OtherLoginMethodButton
						buttonText={"Continuar como Invitado"}
						path={"HomeScreen"}
						icon={assets.user_dark_filled}
					/>
					<OtherLoginMethodButton
						buttonText={"Continuar con Apple"}
						path={"RegisterScreen"}
						icon={assets.apple}
					/>
					<OtherLoginMethodButton
						buttonText={"Continuar con Google"}
						path={"RegisterScreen"}
						icon={assets.google}
					/>
					<OtherLoginMethodButton
						buttonText={"Continuar con Facebook"}
						path={"RegisterScreen"}
						icon={assets.fb}
					/>
				</View>
			</View>
			<ButtonChangeTheme />
		</ScrollView>
	);
};
