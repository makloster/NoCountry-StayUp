import React from "react";
import {
	Image,
	SafeAreaView,
	ScrollView,
	StyleSheet,
	Text,
	View,
} from "react-native";
import assets from "../../constants/assets";

export const LocalScreen = () => {
	return (
		<ScrollView>
			<Image
				source={assets.dummy1}
				resizeMode='contain'
				style={localStyles.imgs}
			/>
			<Text>El rincon 102 m2</Text>
			<Text>Cancha de futbol</Text>
			<Image
				source={assets.star_red}
				resizeMode='contain'
				style={localStyles.star}
			/>
			<Text>4.0 - 20 opiniones - 10 USD hora</Text>
			<Text>Descripción</Text>
			<Text>
				Descripción Lorem ipsum dolor sit amet, consectetur adipiscing
				elit. In ullamcorper neque ut diam vestibulum cursus. Sed
				congue, massa non tempus venenatis, turpis felis vulputate sem,
				in mollis ante turpis in risus. Interdum et malesuada fames ac
				ante ipsum primis in faucibus. Quisque ut rutrum quam.
			</Text>
			<Text>Servicios</Text>
			<View>
				<Image
					source={assets.bathdroom_dark}
					resizeMode='contain'
					style={localStyles.star}
				/>
				<Text>Baños</Text>
			</View>
			<View>
				<Image
					source={assets.parking_dark}
					resizeMode='contain'
					style={localStyles.star}
				/>
				<Text>Estacionamiento</Text>
			</View>
			<View>
				<Image
					source={assets.shower_dark}
					resizeMode='contain'
					style={localStyles.star}
				/>
				<Text>Duchas / Vestuario</Text>
			</View>
			<View>
				<Image
					source={assets.water_dark}
					resizeMode='contain'
					style={localStyles.star}
				/>
				<Text>Hidratación Disponible</Text>
			</View>
			<View>
				<Image
					source={assets.hotwater_dark}
					resizeMode='contain'
					style={localStyles.star}
				/>
				<Text>Agua Caliente</Text>
			</View>
			<Text>Como llegar:</Text>
			<Image
				source={assets.dummy4}
				resizeMode='contain'
				style={localStyles.imgs}
			/>
			<Text>Dirección: Venezuela 1564</Text>
			<Text>Horarios</Text>
			<Text>Lunes</Text>
			<Text>No Abre</Text>
			<Text>Martes</Text>
			<Text>10:00 a 00:00 hs</Text>
			<Text>Miercoles</Text>
			<Text>10:00 a 00:00 hs</Text>
			<Text>Jueves</Text>
			<Text>10:00 a 00:00 hs</Text>
			<Text>Viernes</Text>
			<Text>10:00 a 00:00 hs</Text>
			<Text>Sábado</Text>
			<Text>10:00 a 00:00 hs</Text>
			<View style={localStyles.container}>
				<Text>Que tan</Text>
				<Image
					source={assets.logo_dark}
					resizeMode='contain'
					style={localStyles.logo}
				/>
				<Text> sos?</Text>
				<Text>
					¡Únete con la comunidad y anímate a juntarte con
					desconocidos ya!
				</Text>
				<Text>Grupos armados en este momento:</Text>
				<Image
					source={assets.user_dark}
					resizeMode='contain'
					style={localStyles.star}
				/>
				<Image
					source={assets.user_dark}
					resizeMode='contain'
					style={localStyles.star}
				/>
				<Image
					source={assets.user_dark}
					resizeMode='contain'
					style={localStyles.star}
				/>
				<Image
					source={assets.user_dark}
					resizeMode='contain'
					style={localStyles.star}
				/>
				<Text>Grupo 1</Text>
				<Text> Faltan 2 personas más</Text>
				<Image
					source={assets.user_dark}
					resizeMode='contain'
					style={localStyles.star}
				/>
				<Image
					source={assets.user_dark}
					resizeMode='contain'
					style={localStyles.star}
				/>
				<Image
					source={assets.user_dark}
					resizeMode='contain'
					style={localStyles.star}
				/>
				<Text>Grupo 2</Text>
				<Text>Faltan 6 personas más</Text>
				<Text>Hay más de 10 grupos disponibles para unirse.</Text>
				<Image
					source={assets.shower_dark}
					resizeMode='contain'
					style={localStyles.star}
				/>
				<Text>4.0 - 20 opiniones</Text>
				<Text>Atencion al cliente</Text>
				<Text>4.0</Text>
				<Text>Limpieza y mantenimiento</Text>
				<Text>4.0</Text>
				<Text>Calidad-precio</Text>
				<Text>4.0</Text>
				<Text>Comodidad</Text>
				<Text>4.0</Text>
				<Text>Concurrencia</Text>
				<Text>4.0</Text>
				<Text>Servicios</Text>
				<Text>4.0</Text>

				<Image
					source={assets.user_dark}
					resizeMode='contain'
					style={localStyles.star}
				/>
				<Text>Juan</Text>
				<Text>Septiembre de 2022</Text>
				<Text>
					Use por primera vez la app con este lugar y fue fenomenal,
					disfrute mucho con gente desconocida, buena atención.
				</Text>
			</View>
		</ScrollView>
	);
};

const localStyles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "flex-start",
		width: "100%",
		height: "auto",
	},
	container2: {
		flex: 1,
		alignItems: "center",
		justifyContent: "flex-start",
		width: "100%",
		height: "auto",
		backgroundColor: "black",
		color: "white",
	},
	imgs: { width: "100%", height: 250 },
	star: {
		width: 50,
		height: 50,
	},
	logo: {
		width: "50%",
		height: 55,
	},
});
