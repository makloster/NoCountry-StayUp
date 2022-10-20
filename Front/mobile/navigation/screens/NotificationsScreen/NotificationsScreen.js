import { useContext } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { GuestMessage } from "../../../components/GuestMessage/GuestMessage";
import assets from "../../../constants/assets";
import { UserContext } from "../../../Context/UserContext";
import { NotificationsScreenStyles } from "./NotificationsScreenStyles";

export const NotificationsScreen = () => {
	const notificationsScreenStyles = NotificationsScreenStyles();
	const { isGuest } = useContext(UserContext);
	return (
		<ScrollView style={notificationsScreenStyles.containerBig}>
			<View style={notificationsScreenStyles.containerOptions}>
				<Text style={notificationsScreenStyles.optionsText}>
					Notificaciones
				</Text>
				<Text style={notificationsScreenStyles.optionsText}>
					Promociones
				</Text>
			</View>
			<ScrollView horizontal={true}>
				{isGuest ? (
					<GuestMessage />
				) : (
					<View style={notificationsScreenStyles.containerSections}>
						<Text
							style={
								notificationsScreenStyles.lineNotification
							}></Text>
						<View
							style={
								notificationsScreenStyles.containerNotification
							}>
							<View
								style={
									notificationsScreenStyles.containerNotificationInfo
								}>
								<Image
									source={assets.group_list_icon}
									resizeMode='contain'
									style={notificationsScreenStyles.iconGroup}
								/>
								<View
									style={
										notificationsScreenStyles.containerNotificationText
									}>
									<Text
										style={
											notificationsScreenStyles.notificationText
										}>
										Se ha completado tu Grupo 130
									</Text>
									<Text
										style={
											notificationsScreenStyles.notificationTextBold
										}>
										confirma tu pago.
									</Text>
								</View>
							</View>
							<TouchableOpacity
								style={
									notificationsScreenStyles.makeReservationButton
								}>
								<Text
									style={
										notificationsScreenStyles.notificationButtonsText
									}>
									Confirma el pago
								</Text>
							</TouchableOpacity>
						</View>
						<View
							style={
								notificationsScreenStyles.containerNotification
							}>
							<View
								style={
									notificationsScreenStyles.containerNotificationInfo
								}>
								<Image
									source={assets.profile_dummy_2}
									resizeMode='contain'
									style={notificationsScreenStyles.iconGroup}
								/>
								<View
									style={
										notificationsScreenStyles.containerNotificationText
									}>
									<Text
										style={
											notificationsScreenStyles.notificationTextBold
										}>
										Raul{" "}
									</Text>
									<Text
										style={
											notificationsScreenStyles.notificationText
										}>
										se ha unido a tu{" "}
									</Text>
									<Text
										style={
											notificationsScreenStyles.notificationTextBold
										}>
										grupo{" "}
									</Text>
									<Text
										style={
											notificationsScreenStyles.notificationText
										}>
										de{" "}
									</Text>
									<Text
										style={
											notificationsScreenStyles.notificationTextBold
										}>
										El rincón -- Cancha de fútbol
									</Text>
								</View>
							</View>
							<TouchableOpacity
								style={
									notificationsScreenStyles.messageToButton
								}>
								<Text
									style={
										notificationsScreenStyles.messageToButtonText
									}>
									Escribele un mensaje
								</Text>
							</TouchableOpacity>
						</View>
						<View
							style={
								notificationsScreenStyles.containerNotification
							}>
							<View
								style={
									notificationsScreenStyles.containerNotificationInfo
								}>
								<Image
									source={assets.profile_dummy_2}
									resizeMode='contain'
									style={notificationsScreenStyles.iconGroup}
								/>
								<View
									style={
										notificationsScreenStyles.containerNotificationText
									}>
									<Text
										style={
											notificationsScreenStyles.notificationTextBold
										}>
										Raul{" "}
									</Text>
									<Text
										style={
											notificationsScreenStyles.notificationText
										}>
										esta buscando gente en su{" "}
									</Text>
									<Text
										style={
											notificationsScreenStyles.notificationTextBold
										}>
										grupo{" "}
									</Text>
									<Text
										style={
											notificationsScreenStyles.notificationText
										}>
										para{" "}
									</Text>
									<Text
										style={
											notificationsScreenStyles.notificationTextBold
										}>
										El rincón -- Cancha de fútbol
									</Text>
								</View>
							</View>
							<View
								style={
									notificationsScreenStyles.containerNotificationButtons
								}>
								<TouchableOpacity
									style={
										notificationsScreenStyles.buttonJoin
									}>
									<Text
										style={
											notificationsScreenStyles.notificationButtonsText
										}>
										Unete
									</Text>
								</TouchableOpacity>
								<TouchableOpacity
									style={
										notificationsScreenStyles.buttonMessageSmall
									}>
									<Text
										style={
											notificationsScreenStyles.messageToButtonText
										}>
										Mensaje
									</Text>
								</TouchableOpacity>
							</View>
						</View>
					</View>
				)}
				<View style={notificationsScreenStyles.containerSections}>
					<Text
						style={notificationsScreenStyles.linePromotions}></Text>
					<TouchableOpacity>
						<Image
							source={assets.promo_1}
							resizeMode='contain'
							style={notificationsScreenStyles.imagePromotion}
						/>
					</TouchableOpacity>
					<TouchableOpacity>
						<Image
							source={assets.promo_2}
							resizeMode='contain'
							style={notificationsScreenStyles.imagePromotion}
						/>
					</TouchableOpacity>
				</View>
			</ScrollView>
		</ScrollView>
	);
};
