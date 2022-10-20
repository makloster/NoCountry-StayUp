import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import {
	Image,
	ScrollView,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native";
import assets from "../../../constants/assets";
import { ChatWithStyles } from "./ChatWithStyles";

export const ChatWith = () => {
	const navigation = useNavigation();
	const chatWithStyles = ChatWithStyles();
	const [message, setMessage] = useState("");

	return (
		<>
			<ScrollView style={chatWithStyles.containerBig}>
				<TouchableOpacity style={chatWithStyles.containerFriend}>
					<Image
						source={assets.profile_dummy_7}
						resizeMode='contain'
						style={chatWithStyles.friendAvatar}
					/>
					<View style={chatWithStyles.containerFriendText}>
						<Text style={chatWithStyles.friendName}>
							Raul Rodriguez
						</Text>
					</View>
				</TouchableOpacity>
				<View style={chatWithStyles.containerMessenger}>
					<View style={chatWithStyles.containerMessageRecibed}>
						<Image
							source={assets.profile_dummy_7}
							resizeMode='contain'
							style={chatWithStyles.chatAvatar}
						/>
						<Text style={chatWithStyles.textChatRecibed}>
							Hola! Vi que armaste un grupo nuevo
						</Text>
					</View>
					<View style={chatWithStyles.containerMessageSent}>
						<Text style={chatWithStyles.textChatSend}>
							Si, si quieres puedes unirte.
						</Text>

						<Image
							source={assets.profile_picture}
							resizeMode='contain'
							style={chatWithStyles.chatAvatar}
						/>
					</View>
					<View style={chatWithStyles.containerMessageRecibed}>
						<Image
							source={assets.profile_dummy_7}
							resizeMode='contain'
							style={chatWithStyles.chatAvatar}
						/>
						<Text style={chatWithStyles.textChatRecibed}>
							Dale genial
						</Text>
					</View>
				</View>
			</ScrollView>
			<View style={chatWithStyles.containerBoxWriteMessage}>
				<TouchableOpacity style={chatWithStyles.containerSmileIcon}>
					<Image
						source={assets.smile}
						resizeMode='contain'
						style={chatWithStyles.iconSmile}
					/>
				</TouchableOpacity>
				<TextInput
					style={chatWithStyles.chatInput}
					onChangeText={(e) => setMessage(e)}
					value={message}
					keyboardType='default'
					placeholder='Mensaje'
					multiline={true}
				/>
				<TouchableOpacity>
					<Image
						source={assets.mic}
						resizeMode='contain'
						style={chatWithStyles.iconsInputMessage}
					/>
				</TouchableOpacity>
			</View>
		</>
	);
};
