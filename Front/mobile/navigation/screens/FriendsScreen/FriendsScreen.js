import { useNavigation } from "@react-navigation/native";
import { useContext, useState } from "react";
import {
	Image,
	ScrollView,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native";
import { ButtonChangeTheme } from "../../../components/Buttons/Buttons";
import assets from "../../../constants/assets";
import { ThemeContext } from "../../../Context/Theme";
import { FriendsScreenStyles } from "./FriendsScreenStyles";

export const FriendsScreen = () => {
	const navigation = useNavigation();
	const friendsScreenStyles = FriendsScreenStyles();
	const { dark } = useContext(ThemeContext);
	const [query, setQuery] = useState("");

	return (
		<ScrollView style={friendsScreenStyles.containerBig}>
			<View style={friendsScreenStyles.containerInput}>
				<Image
					source={assets.icon_finder}
					resizeMode='contain'
					style={friendsScreenStyles.searchIcon}
				/>
				<TextInput
					style={friendsScreenStyles.searchFriendsInput}
					onChangeText={(e) => setQuery(e)}
					value={query}
					keyboardType='default'
					placeholder='Buscar o agregar amigos'
				/>
			</View>
			<ScrollView
				horizontal={true}
				showsHorizontalScrollIndicator={false}>
				<TouchableOpacity
					style={friendsScreenStyles.containerFriendsInfo}>
					<Image
						source={assets.profile_dummy_7}
						resizeMode='contain'
						style={friendsScreenStyles.avatarIcon}
					/>
					<Text style={friendsScreenStyles.friendNameInfo}>Raul</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={friendsScreenStyles.containerFriendsInfo}>
					<Image
						source={assets.profile_dummy_3}
						resizeMode='contain'
						style={friendsScreenStyles.avatarIcon}
					/>
					<Text style={friendsScreenStyles.friendNameInfo}>Anna</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={friendsScreenStyles.containerFriendsInfo}>
					<Image
						source={assets.profile_dummy_4}
						resizeMode='contain'
						style={friendsScreenStyles.avatarIcon}
					/>
					<Text style={friendsScreenStyles.friendNameInfo}>
						Peter
					</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={friendsScreenStyles.containerFriendsInfo}>
					<Image
						source={assets.profile_dummy_5}
						resizeMode='contain'
						style={friendsScreenStyles.avatarIcon}
					/>
					<Text style={friendsScreenStyles.friendNameInfo}>Juan</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={friendsScreenStyles.containerFriendsInfo}>
					<Image
						source={assets.profile_dummy_6}
						resizeMode='contain'
						style={friendsScreenStyles.avatarIcon}
					/>
					<Text style={friendsScreenStyles.friendNameInfo}>
						Rodrigo
					</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={friendsScreenStyles.containerFriendsInfo}>
					<Image
						source={assets.profile_dummy_7}
						resizeMode='contain'
						style={friendsScreenStyles.avatarIcon}
					/>
					<Text style={friendsScreenStyles.friendNameInfo}>
						Lucas
					</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={friendsScreenStyles.containerFriendsInfo}>
					<Image
						source={assets.profile_dummy_3}
						resizeMode='contain'
						style={friendsScreenStyles.avatarIcon}
					/>
					<Text style={friendsScreenStyles.friendNameInfo}>
						Estefy
					</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={friendsScreenStyles.containerFriendsInfo}>
					<Image
						source={assets.profile_dummy_4}
						resizeMode='contain'
						style={friendsScreenStyles.avatarIcon}
					/>
					<Text style={friendsScreenStyles.friendNameInfo}>
						Sebastian
					</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={friendsScreenStyles.containerFriendsInfo}>
					<Image
						source={assets.profile_dummy_5}
						resizeMode='contain'
						style={friendsScreenStyles.avatarIcon}
					/>
					<Text style={friendsScreenStyles.friendNameInfo}>
						Marce
					</Text>
				</TouchableOpacity>
			</ScrollView>
			<View style={friendsScreenStyles.containerListFriends}>
				<TouchableOpacity style={friendsScreenStyles.containerFriend}>
					<Image
						source={assets.profile_dummy_7}
						resizeMode='contain'
						style={friendsScreenStyles.friendAvatar}
					/>
					<View style={friendsScreenStyles.containerFriendText}>
						<Text style={friendsScreenStyles.friendName}>
							Raul Rodriguez
						</Text>
						<Text style={friendsScreenStyles.friendLastMessage}>
							Dale genial - 21:44
						</Text>
					</View>
				</TouchableOpacity>
				<TouchableOpacity style={friendsScreenStyles.containerFriend}>
					<Image
						source={assets.profile_dummy_3}
						resizeMode='contain'
						style={friendsScreenStyles.friendAvatar}
					/>
					<View style={friendsScreenStyles.containerFriendText}>
						<Text style={friendsScreenStyles.friendName}>
							Anna Rosa
						</Text>
						<Text style={friendsScreenStyles.friendLastMessage}>
							Nos Vemos Ahí - 14:59
						</Text>
					</View>
				</TouchableOpacity>
				<TouchableOpacity style={friendsScreenStyles.containerFriend}>
					<Image
						source={assets.profile_dummy_4}
						resizeMode='contain'
						style={friendsScreenStyles.friendAvatar}
					/>
					<View style={friendsScreenStyles.containerFriendText}>
						<Text style={friendsScreenStyles.friendName}>
							Peter Epuente
						</Text>
						<Text style={friendsScreenStyles.friendLastMessage}>
							Saludos - 21:00
						</Text>
					</View>
				</TouchableOpacity>
				<TouchableOpacity style={friendsScreenStyles.containerFriend}>
					<Image
						source={assets.profile_dummy_5}
						resizeMode='contain'
						style={friendsScreenStyles.friendAvatar}
					/>
					<View style={friendsScreenStyles.containerFriendText}>
						<Text style={friendsScreenStyles.friendName}>
							Juan Peréz
						</Text>
						<Text style={friendsScreenStyles.friendLastMessage}>
							El viernes nos juntamos - 16:51
						</Text>
					</View>
				</TouchableOpacity>
			</View>
			<ButtonChangeTheme />
		</ScrollView>
	);
};
