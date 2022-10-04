import { StatusBar } from "expo-status-bar";
import {
    Image,
    StyleSheet,
    Text,
    TextInput,
    View,
    FlatList,
} from "react-native";
import Assets from "../constants/assets";
import { Card, ListItem, Button, Icon, SearchBar } from "react-native-elements";
import { homeStyles } from "./HomeScreenStyles";

export default function Home() {
    return (
        <>
            <View style={homeStyles.container}>
                <Image
                    source={Assets.logo_version_white}
                    resizeMode='contain'
                    style={homeStyles.logo}
                />
                <Image
                    source={Assets.message_dark}
                    resizeMode='contain'
                    style={{ width: 38, height: 36, marginLeft: 120 }}
                />
                <Image
                    source={Assets.bell_dark}
                    resizeMode='contain'
                    style={{ width: 38, height: 38, marginRight: 15 }}
                />
            </View>
            <View style={homeStyles.SearchBar}>
                <Icon
                    source={Assets.icon_finder}
                    resizeMode='contain'
                    style={homeStyles.lupa_search}
                />
                <TextInput
                    placeholder='¿Qué quieres hacer?'
                    placeholderTextColor='grey'
                    style={homeStyles.input}
                    /* inlineImageLeft={Assets.lupa_search} */
                />
                <Image
                    source={Assets.filter_icono}
                    resizeMode='contain'
                    style={homeStyles.filter}
                />
                {/*                 <SearchBar placeholder='Type Here...' />
                 
                <StatusBar backgroundColor='red' /> */}
            </View>
            <View style={homeStyles.carousel}>
                <View>
                    <Image
                        source={Assets.juegos_de_mesa_icono}
                        resizeMode='contain'
                        style={homeStyles.iconos_categorias}
                    />
                </View>
                <View>
                    <Image
                        source={Assets.karting_icono}
                        resizeMode='contain'
                        style={homeStyles.iconos_categorias}
                    />
                </View>
                <View>
                    <Image
                        source={Assets.pubs_icono}
                        resizeMode='contain'
                        style={homeStyles.iconos_categorias}
                    />
                </View>
                <View>
                    <Image
                        source={Assets.ping_pong_icono}
                        resizeMode='contain'
                        style={homeStyles.iconos_categorias}
                    />
                </View>
                <View>
                    <Image
                        source={Assets.kickboxing_icono}
                        resizeMode='contain'
                        style={homeStyles.iconos_categorias}
                    />
                </View>
                {/*  <View>
                    <Image
                        source={Assets.bell_dark}
                        resizeMode='contain'
                        style={{ width: 38, height: 38, marginRight: 15 }}
                    />
                    <Text>Plazas</Text>
                </View>
                <View>
                    <Image
                        source={Assets.bell_dark}
                        resizeMode='contain'
                        style={{ width: 38, height: 38, marginRight: 15 }}
                    />
                    <Text>Juegos de Mesa</Text>
                </View> */}
            </View>
            <Card style={homeStyles.cards}>
                <Card.Image style={homeStyles.image} source={Assets.dummy1} />

                <View style={homeStyles.nombre_cancha}>
                    <Text style={homeStyles.titulo_descripcion_cancha}>El rincon · Cancha de Fútbol</Text>
                <Card.Image
                    source={Assets.star_red}
                    style={homeStyles.star_red}
                    />
                <Text style={homeStyles.titulo_descripcion_cancha}>4.0</Text>

                </View>

                <Text>A 600 m · Grupos de 10</Text>
                <Text style={homeStyles.titulo_descripcion_cancha}>10 USD hora </Text>
            </Card>

            <Card style={homeStyles.cards}>
                <Card.Image style={homeStyles.image} source={Assets.dummy1} />
                <Card.Image
                    source={Assets.star_red}
                    style={homeStyles.star_red}
                />
                <Text>4.0</Text>
                <Text>
                    El rincon · Cancha de Fútbol A 600 m · Grupos de 10 10 USD
                    hora
                </Text>
            </Card>
            <Card style={homeStyles.cards}>
                <Card.Image style={homeStyles.image} source={Assets.dummy1} />
                <Card.Image
                    source={Assets.star_red}
                    style={homeStyles.star_red}
                />
                <Text>4.0</Text>
                <Text>
                    El rincon · Cancha de Fútbol A 600 m · Grupos de 10 10 USD
                    hora
                </Text>
            </Card>
            <Card style={homeStyles.cards}>
                <Card.Image style={homeStyles.image} source={Assets.dummy1} />
                <Card.Image
                    source={Assets.star_red}
                    style={homeStyles.star_red}
                />
                <Text>4.0</Text>
                <Text>
                    El rincon · Cancha de Fútbol A 600 m · Grupos de 10 10 USD
                    hora
                </Text>
            </Card>
            <Card style={homeStyles.cards}>
                <Card.Image style={homeStyles.image} source={Assets.dummy1} />
                <Card.Image
                    source={Assets.star_red}
                    style={homeStyles.star_red}
                />
                <Text>4.0</Text>
                <Text>
                    El rincon · Cancha de Fútbol A 600 m · Grupos de 10 10 USD
                    hora
                </Text>
            </Card>
            <Card style={homeStyles.cards}>
                <Card.Image style={homeStyles.image} source={Assets.dummy1} />
                <Card.Image
                    source={Assets.star_red}
                    style={homeStyles.star_red}
                />
                <Text>4.0</Text>
                <Text>
                    El rincon · Cancha de Fútbol A 600 m · Grupos de 10 10 USD
                    hora
                </Text>
            </Card>
            <Card style={homeStyles.cards}>
                <Card.Image style={homeStyles.image} source={Assets.dummy1} />
                <Card.Image
                    source={Assets.star_red}
                    style={homeStyles.star_red}
                />
                <Text>4.0</Text>
                <Text>
                    El rincon · Cancha de Fútbol A 600 m · Grupos de 10 10 USD
                    hora
                </Text>
            </Card>
            <Card style={homeStyles.cards}>
                <Card.Image style={homeStyles.image} source={Assets.dummy1} />
                <Card.Image
                    source={Assets.star_red}
                    style={homeStyles.star_red}
                />
                <Text>4.0</Text>
                <Text>
                    El rincon · Cancha de Fútbol A 600 m · Grupos de 10 10 USD
                    hora
                </Text>
            </Card>
        </>
    );
}
