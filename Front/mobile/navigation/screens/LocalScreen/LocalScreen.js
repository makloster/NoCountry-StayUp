import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import assets from "../../../constants/assets";
import { localStyles } from "./LocalScreenStyles";

export const LocalScreen = () => {
	return (
		<ScrollView style={localStyles.containerBig}>
			<View style={localStyles.containerImageAndIcons}>
				<View style={localStyles.containerIconsInteractive}>
					<Image
						source={assets.arrow_back_filled}
						resizeMode='contain'
						style={localStyles.iconsInteractiveBack}
					/>
					<View style={localStyles.containerIconsInteractiveGroup}>
						<Image
							source={assets.share}
							resizeMode='contain'
							style={localStyles.iconsInteractiveShare}
						/>
						<Image
							source={assets.like}
							resizeMode='contain'
							style={localStyles.iconsInteractiveLike}
						/>
					</View>
				</View>
				<Image
					source={assets.dummy1}
					resizeMode='contain'
					style={localStyles.imageSlider}
				/>
			</View>
			<View style={localStyles.containerLocalInfo}>
				<View style={localStyles.containerLocalInfoTitle}>
					<Text style={localStyles.localInfoTitle}>El rincon </Text>
					<Text style={localStyles.localInfoDistance}>102 m2</Text>
				</View>
				<Text style={localStyles.localInfoActivity}>
					Cancha de futbol
				</Text>
				<View style={localStyles.containerInfoReviewAndPrice}>
					<Image
						source={assets.star_red}
						resizeMode='contain'
						style={localStyles.imageInfoReview}
					/>
					<Text style={localStyles.infoReviewAndPrice}>
						4.0 - 20 opiniones - 10 USD
					</Text>
					<Text style={localStyles.infoReviewAndPriceHour}>hora</Text>
				</View>
			</View>
			<View style={localStyles.descriptionContainer}>
				<Text style={localStyles.descriptionTitle}>Descripción</Text>
				<Text style={localStyles.descriptionParagraph}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
					ullamcorper neque ut diam vestibulum cursus. Sed congue,
					massa non tempus venenatis, turpis felis vulputate sem, in
					mollis ante turpis in risus. Interdum et malesuada fames ac
					ante ipsum primis in faucibus. Quisque ut rutrum quam.
				</Text>
			</View>

			<View style={localStyles.containerLineSeparator}></View>

			<View style={localStyles.containerServices}>
				<Text style={localStyles.servicesTitle}>Servicios</Text>
				<View style={localStyles.containerServicesOffered}>
					<View style={localStyles.servicesOffered}>
						<Image
							source={assets.bathdroom_dark}
							resizeMode='contain'
							style={localStyles.servicesOfferedIcons}
						/>
						<Text style={localStyles.servicesOfferedName}>
							Baños
						</Text>
					</View>
					<View style={localStyles.servicesOffered}>
						<Image
							source={assets.parking_dark}
							resizeMode='contain'
							style={localStyles.servicesOfferedIcons}
						/>
						<Text style={localStyles.servicesOfferedName}>
							Estacionamiento
						</Text>
					</View>
					<View style={localStyles.servicesOffered}>
						<Image
							source={assets.shower_dark}
							resizeMode='contain'
							style={localStyles.servicesOfferedIcons}
						/>
						<Text style={localStyles.servicesOfferedName}>
							Duchas / Vestuario
						</Text>
					</View>
					<View style={localStyles.servicesOffered}>
						<Image
							source={assets.water_dark}
							resizeMode='contain'
							style={localStyles.servicesOfferedIcons}
						/>
						<Text style={localStyles.servicesOfferedName}>
							Hidratación Disponible
						</Text>
					</View>
					<View style={localStyles.servicesOffered}>
						<Image
							source={assets.hotwater_dark}
							resizeMode='contain'
							style={localStyles.servicesOfferedIcons}
						/>
						<Text style={localStyles.servicesOfferedName}>
							Agua Caliente
						</Text>
					</View>
				</View>
			</View>
			<View style={localStyles.containerLineSeparator}></View>

			<View style={localStyles.locationContainer}>
				<Text style={localStyles.locationTitle}>Como llegar:</Text>
				<Image
					source={assets.dummy4}
					resizeMode='contain'
					style={localStyles.locationImage}
				/>
				<Text style={localStyles.locationAdress}>
					Dirección: Venezuela 1564
				</Text>
			</View>
			<View style={localStyles.containerLineSeparator}></View>
			<View style={localStyles.scheduleContainer}>
				<Text style={localStyles.scheduleTitle}>Horarios</Text>
				<View style={localStyles.containerScheduleByDay}>
					<Text style={localStyles.containerScheduleDay}>
						Domingo
					</Text>
					<Text style={localStyles.containerScheduleTime}>
						10:00 a 00:00 hs
					</Text>
				</View>
				<View style={localStyles.containerScheduleByDay}>
					<Text style={localStyles.containerScheduleDay}>Lunes</Text>
					<Text style={localStyles.containerScheduleTime}>
						No Abre
					</Text>
				</View>
				<View style={localStyles.containerScheduleByDay}>
					<Text style={localStyles.containerScheduleDay}>Martes</Text>
					<Text style={localStyles.containerScheduleTime}>
						10:00 a 00:00 hs
					</Text>
				</View>
				<View style={localStyles.containerScheduleByDay}>
					<Text style={localStyles.containerScheduleDay}>
						Miercoles
					</Text>
					<Text style={localStyles.containerScheduleTime}>
						10:00 a 00:00 hs
					</Text>
				</View>
				<View style={localStyles.containerScheduleByDay}>
					<Text style={localStyles.containerScheduleDay}>Jueves</Text>
					<Text style={localStyles.containerScheduleTime}>
						10:00 a 00:00 hs
					</Text>
				</View>
				<View style={localStyles.containerScheduleByDay}>
					<Text style={localStyles.containerScheduleDay}>
						Viernes
					</Text>
					<Text style={localStyles.containerScheduleTime}>
						10:00 a 00:00 hs
					</Text>
				</View>
				<View style={localStyles.containerScheduleByDay}>
					<Text style={localStyles.containerScheduleDay}>Sábado</Text>
					<Text style={localStyles.containerScheduleTime}>
						10:00 a 00:00 hs
					</Text>
				</View>
			</View>
			<View style={localStyles.containerCommunity}>
				<View style={localStyles.containerCommuinityTitle}>
					<Text style={localStyles.communityTitleText}>Qué tan</Text>
					<Image
						source={assets.logo_light}
						resizeMode='contain'
						style={localStyles.comunnityTitleLogo}
					/>
					<Text style={localStyles.communityTitleText}> sos?</Text>
				</View>
				<Text style={localStyles.communityDescription}>
					¡Únete con la comunidad y anímate a juntarte con
					desconocidos ya!
				</Text>
				<View style={localStyles.containerCommunityGroups}>
					<Text style={localStyles.communityGroupTitle}>
						Grupos armados en este momento:
					</Text>
					<View style={localStyles.containerCommunityGroupsLives}>
						<View style={localStyles.communityGroupListAvatars}>
							<Image
								source={assets.user_light}
								resizeMode='contain'
								style={localStyles.communityGroupImageAvatar}
							/>
							<Image
								source={assets.user_light}
								resizeMode='contain'
								style={localStyles.communityGroupImageAvatar}
							/>
							<Image
								source={assets.user_light}
								resizeMode='contain'
								style={localStyles.communityGroupImageAvatar}
							/>
							<Image
								source={assets.user_light}
								resizeMode='contain'
								style={localStyles.communityGroupImageAvatar}
							/>
						</View>
						<View
							style={
								localStyles.containerCommunityGroupsLivesInfo
							}>
							<Text style={localStyles.communityGroupNameGroup}>
								Grupo 1
							</Text>
							<Text style={localStyles.communityGroupDetailGroup}>
								Faltan 2 personas más
							</Text>
						</View>
					</View>
					<View style={localStyles.containerCommunityGroupsLives}>
						<View style={localStyles.communityGroupListAvatars}>
							<Image
								source={assets.user_light}
								resizeMode='contain'
								style={localStyles.communityGroupImageAvatar}
							/>
							<Image
								source={assets.user_light}
								resizeMode='contain'
								style={localStyles.communityGroupImageAvatar}
							/>
							<Image
								source={assets.user_light}
								resizeMode='contain'
								style={localStyles.communityGroupImageAvatar}
							/>
						</View>
						<View
							style={
								localStyles.containerCommunityGroupsLivesInfo
							}>
							<Text style={localStyles.communityGroupNameGroup}>
								Grupo 2
							</Text>
							<Text style={localStyles.communityGroupDetailGroup}>
								Faltan 6 personas más
							</Text>
						</View>
					</View>
				</View>
				<Text style={localStyles.communityFooter}>
					Hay más de 10 grupos disponibles para unirse.
				</Text>
			</View>

			{/* OPINIONES */}
			<View style={localStyles.containerReviews}>
				<View style={localStyles.containerReviewsTitle}>
					<Image
						source={assets.star_red}
						resizeMode='contain'
						style={localStyles.reviewTitleIcon}
					/>
					<Text style={localStyles.reviewTitleText}>
						4.0 - 20 opiniones
					</Text>
				</View>
				{/* VALORES */}
				<View style={localStyles.containerReviewTypes}>
					<View style={localStyles.conainerReviewEachType}>
						<Text style={localStyles.reviewTypeName}>
							Atencion al cliente
						</Text>
						<View style={localStyles.containerReviewTypeScore}>
							<Text style={localStyles.reviewTypeLine}>
								Linea
							</Text>
							<Text style={localStyles.reviewTypeValue}>4.0</Text>
						</View>
					</View>
					<View style={localStyles.conainerReviewEachType}>
						<Text style={localStyles.reviewTypeName}>
							Limpieza y mantenimiento
						</Text>
						<View style={localStyles.containerReviewTypeScore}>
							<Text style={localStyles.reviewTypeLine}>
								Linea
							</Text>
							<Text style={localStyles.reviewTypeValue}>4.0</Text>
						</View>
					</View>
					<View style={localStyles.conainerReviewEachType}>
						<Text style={localStyles.reviewTypeName}>
							Calidad-precio
						</Text>
						<View style={localStyles.containerReviewTypeScore}>
							<Text style={localStyles.reviewTypeLine}>
								Linea
							</Text>
							<Text style={localStyles.reviewTypeValue}>4.0</Text>
						</View>
					</View>
					<View style={localStyles.conainerReviewEachType}>
						<Text style={localStyles.reviewTypeName}>
							Comodidad
						</Text>
						<View style={localStyles.containerReviewTypeScore}>
							<Text style={localStyles.reviewTypeLine}>
								Linea
							</Text>
							<Text style={localStyles.reviewTypeValue}>4.0</Text>
						</View>
					</View>
					<View style={localStyles.conainerReviewEachType}>
						<Text style={localStyles.reviewTypeName}>
							Concurrencia
						</Text>
						<View style={localStyles.containerReviewTypeScore}>
							<Text style={localStyles.reviewTypeLine}>
								Linea
							</Text>
							<Text style={localStyles.reviewTypeValue}>4.0</Text>
						</View>
					</View>
					<View style={localStyles.conainerReviewEachType}>
						<Text style={localStyles.reviewTypeName}>
							Servicios
						</Text>
						<View style={localStyles.containerReviewTypeScore}>
							<Text style={localStyles.reviewTypeLine}>
								Linea
							</Text>
							<Text style={localStyles.reviewTypeValue}>4.0</Text>
						</View>
					</View>
				</View>

				{/* CARD OPINIONES */}
				<View style={localStyles.containerReviewCard}>
					<View style={localStyles.containerReviewCardUser}>
						<Image
							source={assets.user_dark}
							resizeMode='contain'
							style={localStyles.reviewCardUserAvatar}
						/>
						<View style={localStyles.containerReviewCarUserInfo}>
							<Text style={localStyles.reviewCardUserName}>
								Juan
							</Text>
							<Text style={localStyles.reviewCardUserTimestamp}>
								Septiembre de 2022
							</Text>
						</View>
					</View>
					<Text style={localStyles.reviewCardUserDescription}>
						Use por primera vez la app con este lugar y fue
						fenomenal, disfrute mucho con gente desconocida, buena
						atención.
					</Text>
				</View>
			</View>
		</ScrollView>
	);
};
