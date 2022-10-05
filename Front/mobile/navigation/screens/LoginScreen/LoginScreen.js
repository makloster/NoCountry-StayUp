import { useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import assets from "../../../../constants/assets";
import { loginScreenStyles } from "./loginScreenStyles";

export const LoginScreen = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	return (
		<ScrollView style={loginScreenStyles.containerBig}>
			<View style={loginScreenStyles.containerEmailScreen}>
				<TextInput
					style={loginScreenStyles.registerInput}
					onChangeText={(e) => setEmail(e)}
					value={email}
					placeholder='E-mail'
				/>
				<TextInput
					style={loginScreenStyles.registerInput}
					onChangeText={(e) => setPassword(e)}
					value={password}
					placeholder='Password'
				/>
				<TouchableOpacity
					key={`continue`}
					style={loginScreenStyles.buttonContinueRegister}>
					<Text style={loginScreenStyles.textButtonContinue}>
						Continuar
					</Text>
				</TouchableOpacity>
				<View style={loginScreenStyles.containerSeparator}>
					<Text style={loginScreenStyles.lineSeparator}></Text>
					<Text style={loginScreenStyles.circleSeparator}></Text>
					<Text style={loginScreenStyles.lineSeparator}></Text>
				</View>
				<View style={loginScreenStyles.containerContinueButtonsWays}>
					<TouchableOpacity
						style={loginScreenStyles.buttonRegisterOtherWays}>
						<Image
							style={loginScreenStyles.imageRegisterOtherWays}
							source={assets.user_dark}
							resizeMode='contain'
						/>
						<Text
							style={loginScreenStyles.textRegisterOtherWays}
							onPress={() =>
								navigation.navigate("RegisterScreen")
							}>
							{" "}
							Crear Cuenta
						</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={loginScreenStyles.buttonRegisterOtherWays}>
						<Image
							style={loginScreenStyles.imageRegisterOtherWays}
							source={assets.apple}
							resizeMode='contain'
						/>
						<Text style={loginScreenStyles.textRegisterOtherWays}>
							Continuar con Apple
						</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={loginScreenStyles.buttonRegisterOtherWays}>
						<Image
							key={"google"}
							style={loginScreenStyles.imageRegisterOtherWays}
							source={assets.google}
							resizeMode='contain'
						/>
						<Text style={loginScreenStyles.textRegisterOtherWays}>
							Continuar con Google
						</Text>
					</TouchableOpacity>
					<TouchableOpacity
						key={`continue`}
						style={loginScreenStyles.buttonRegisterOtherWays}>
						<Image
							key={"fb"}
							style={loginScreenStyles.imageRegisterOtherWays}
							source={assets.fb}
							resizeMode='contain'
						/>
						<Text style={loginScreenStyles.textRegisterOtherWays}>
							Continuar con Facebook
						</Text>
					</TouchableOpacity>
				</View>
			</View>
		</ScrollView>
	);
};
