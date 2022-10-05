import { StatusBar } from "expo-status-bar";
import {
	FlatList,
	Image,
	StyleSheet,
	Text,
	TextInput,
	View,
} from "react-native";
import { Button, Card, Icon, ListItem, SearchBar } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";
import assets from "../../../constants/assets";
import { homeStyles } from "./HomeScreenStyles";

export default function Home() {
	return (
		<ScrollView>
			<View style={homeStyles.container}>
				<Image
					source={assets.logo_version_white}
					resizeMode='contain'
					style={homeStyles.logo}
				/>
				<Image
					source={assets.message_dark}
					resizeMode='contain'
					style={{ width: 38, height: 36, marginLeft: 120 }}
				/>
				<Image
					source={assets.bell_dark}
					resizeMode='contain'
					style={{ width: 38, height: 38, marginRight: 15 }}
				/>
			</View>
			<View style={homeStyles.SearchBar}>
				<Image
					source={assets.icon_finder}
					resizeMode='contain'
					style={homeStyles.lupa_search}
				/>
				<TextInput
					placeholder='¿Qué quieres hacer?'
					placeholderTextColor='grey'
					style={homeStyles.input}
					/* inlineImageLeft={assets.lupa_search} */
				/>
				<Image
					source={assets.filter_icono}
					resizeMode='contain'
					style={homeStyles.filter}
				/>
				{/*                 <SearchBar placeholder='Type Here...' />
                 
                <StatusBar backgroundColor='red' /> */}
			</View>
			<View style={homeStyles.carousel}>
				<View>
					<Image
						source={assets.juegos_de_mesa_icono}
						resizeMode='contain'
						style={homeStyles.iconos_categorias}
					/>
				</View>
				<View>
					<Image
						source={assets.karting_icono}
						resizeMode='contain'
						style={homeStyles.iconos_categorias}
					/>
				</View>
				<View>
					<Image
						source={assets.pubs_icono}
						resizeMode='contain'
						style={homeStyles.iconos_categorias}
					/>
				</View>
				<View>
					<Image
						source={assets.ping_pong_icono}
						resizeMode='contain'
						style={homeStyles.iconos_categorias}
					/>
				</View>
				<View>
					<Image
						source={assets.kickboxing_icono}
						resizeMode='contain'
						style={homeStyles.iconos_categorias}
					/>
				</View>
				{/*  <View>
                    <Image
                        source={assets.bell_dark}
                        resizeMode='contain'
                        style={{ width: 38, height: 38, marginRight: 15 }}
                    />
                    <Text>Plazas</Text>
                </View>
                <View>
                    <Image
                        source={assets.bell_dark}
                        resizeMode='contain'
                        style={{ width: 38, height: 38, marginRight: 15 }}
                    />
                    <Text>Juegos de Mesa</Text>
                </View> */}
			</View>
			<Card style={homeStyles.cards}>
				<Image
					source={assets.likes_white_circle}
					resizeMode='contain'
					style={homeStyles.corazon_en_card}
				/>
				<Card.Image style={homeStyles.image} source={assets.dummy1} />

				<View style={homeStyles.nombre_cancha}>
					<Text style={homeStyles.titulo_descripcion_cancha}>
						El rincon · Cancha de Fútbol
					</Text>
					<Card.Image
						source={assets.star_red}
						style={homeStyles.star_red}
					/>
					<Text style={homeStyles.titulo_descripcion_cancha}>
						4.0
					</Text>
				</View>

				<Text>A 600 m · Grupos de 10</Text>
				<Text style={homeStyles.titulo_descripcion_cancha}>
					10 USD hora
				</Text>
			</Card>

			<Card style={homeStyles.cards}>
				<Image
					source={assets.likes_white_circle}
					resizeMode='contain'
					style={homeStyles.corazon_en_card}
				/>
				<Card.Image style={homeStyles.image} source={assets.dummy1} />

				<View style={homeStyles.nombre_cancha}>
					<Text style={homeStyles.titulo_descripcion_cancha}>
						El rincon · Cancha de Fútbol
					</Text>
					<Card.Image
						source={assets.star_red}
						style={homeStyles.star_red}
					/>
					<Text style={homeStyles.titulo_descripcion_cancha}>
						4.0
					</Text>
				</View>

				<Text>A 600 m · Grupos de 10</Text>
				<Text style={homeStyles.titulo_descripcion_cancha}>
					10 USD hora
				</Text>
			</Card>
			<Card style={homeStyles.cards}>
				<Image
					source={assets.likes_white_circle}
					resizeMode='contain'
					style={homeStyles.corazon_en_card}
				/>
				<Card.Image style={homeStyles.image} source={assets.dummy1} />

				<View style={homeStyles.nombre_cancha}>
					<Text style={homeStyles.titulo_descripcion_cancha}>
						El rincon · Cancha de Fútbol
					</Text>
					<Card.Image
						source={assets.star_red}
						style={homeStyles.star_red}
					/>
					<Text style={homeStyles.titulo_descripcion_cancha}>
						4.0
					</Text>
				</View>

				<Text>A 600 m · Grupos de 10</Text>
				<Text style={homeStyles.titulo_descripcion_cancha}>
					10 USD hora
				</Text>
			</Card>
			<Card style={homeStyles.cards}>
				<Image
					source={assets.likes_white_circle}
					resizeMode='contain'
					style={homeStyles.corazon_en_card}
				/>
				<Card.Image style={homeStyles.image} source={assets.dummy1} />

				<View style={homeStyles.nombre_cancha}>
					<Text style={homeStyles.titulo_descripcion_cancha}>
						El rincon · Cancha de Fútbol
					</Text>
					<Card.Image
						source={assets.star_red}
						style={homeStyles.star_red}
					/>
					<Text style={homeStyles.titulo_descripcion_cancha}>
						4.0
					</Text>
				</View>

				<Text>A 600 m · Grupos de 10</Text>
				<Text style={homeStyles.titulo_descripcion_cancha}>
					10 USD hora
				</Text>
			</Card>
			<Card style={homeStyles.cards}>
				<Image
					source={assets.likes_white_circle}
					resizeMode='contain'
					style={homeStyles.corazon_en_card}
				/>
				<Card.Image style={homeStyles.image} source={assets.dummy1} />

				<View style={homeStyles.nombre_cancha}>
					<Text style={homeStyles.titulo_descripcion_cancha}>
						El rincon · Cancha de Fútbol
					</Text>
					<Card.Image
						source={assets.star_red}
						style={homeStyles.star_red}
					/>
					<Text style={homeStyles.titulo_descripcion_cancha}>
						4.0
					</Text>
				</View>

				<Text>A 600 m · Grupos de 10</Text>
				<Text style={homeStyles.titulo_descripcion_cancha}>
					10 USD hora
				</Text>
			</Card>
			<Card style={homeStyles.cards}>
				<Image
					source={assets.likes_white_circle}
					resizeMode='contain'
					style={homeStyles.corazon_en_card}
				/>
				<Card.Image style={homeStyles.image} source={assets.dummy1} />

				<View style={homeStyles.nombre_cancha}>
					<Text style={homeStyles.titulo_descripcion_cancha}>
						El rincon · Cancha de Fútbol
					</Text>
					<Card.Image
						source={assets.star_red}
						style={homeStyles.star_red}
					/>
					<Text style={homeStyles.titulo_descripcion_cancha}>
						4.0
					</Text>
				</View>

				<Text>A 600 m · Grupos de 10</Text>
				<Text style={homeStyles.titulo_descripcion_cancha}>
					10 USD hora
				</Text>
			</Card>
			<Card style={homeStyles.cards}>
				<Image
					source={assets.likes_white_circle}
					resizeMode='contain'
					style={homeStyles.corazon_en_card}
				/>
				<Card.Image style={homeStyles.image} source={assets.dummy1} />

				<View style={homeStyles.nombre_cancha}>
					<Text style={homeStyles.titulo_descripcion_cancha}>
						El rincon · Cancha de Fútbol
					</Text>
					<Card.Image
						source={assets.star_red}
						style={homeStyles.star_red}
					/>
					<Text style={homeStyles.titulo_descripcion_cancha}>
						4.0
					</Text>
				</View>

				<Text>A 600 m · Grupos de 10</Text>
				<Text style={homeStyles.titulo_descripcion_cancha}>
					10 USD hora
				</Text>
			</Card>
		</ScrollView>
	);
}
