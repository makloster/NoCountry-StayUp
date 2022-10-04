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

export default function Home() {
    return (
        <>
            <View style={styles.container}>
                <Image
                    source={Assets.logo_version_white}
                    resizeMode='contain'
                    style={styles.logo}
                />
                <Image
                    source={Assets.home_dark}
                    resizeMode='contain'
                    style={{ width: 38, height: 36, marginLeft: 120 }}
                />
                <Image
                    source={Assets.bell_dark}
                    resizeMode='contain'
                    style={{ width: 38, height: 38, marginRight: 15 }}
                />
            </View>
            <View style={styles.SearchBar}>
                <Image
                    source={Assets.lupa_search}
                    resizeMode='contain'
                    style={{
                        width: 38,
                        height: 38,
                        marginRight: 15,
                        backgroundColor: "red",
                        borderRadius: 0.5,
                        marginTop: 13,
                        marginLeft: 10,
                    }}
                />
                <TextInput
                    placeholder='¿Qué quieres hacer?'
                    placeholderTextColor='grey'
                    style={styles.input}
                    /* inlineImageLeft={Assets.lupa_search} */
                    multiline={true}
                    borderRadius='0.5'
                    width='30'
                />
                <Image
                    source={Assets.filter_logo}
                    resizeMode='contain'
                    style={{
                        width: 38,
                        height: 38,
                        marginRight: 15,
                        marginTop: 13,
                    }}
                />
                {/*                 <SearchBar placeholder='Type Here...' />
                 */}
                <StatusBar backgroundColor='red' />
            </View>
            <View style={styles.carousel}>
                <View>
                    <Image
                        source={Assets.juegos_de_mesa_icono}
                        resizeMode='contain'
                        style={styles.iconos_categorias}
                    />
                </View>
                <View>
                    <Image
                        source={Assets.karting_icono}
                        resizeMode='contain'
                        style={styles.iconos_categorias}
                    />
                </View>
                <View>
                    <Image
                        source={Assets.pubs_icono}
                        resizeMode='contain'
                        style={styles.iconos_categorias}
                    />
                </View>
                <View>
                    <Image
                        source={Assets.ping_pong_icono}
                        resizeMode='contain'
                        style={styles.iconos_categorias}
                    />
                </View>
                <View>
                    <Image
                        source={Assets.kickboxing_icono}
                        resizeMode='contain'
                        style={styles.iconos_categorias}
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
            <Card containerStyle={{ backgroundColor: "#fff" }}>
                <Card.Image source={{ uri: "https://picsum.photos/200/400" }} />
                <Card.Image
                    source={Assets.star_red}
                    style={{ width: 15, height: 15 }}
                />
                <Text>4.0</Text>
                <Text style={styles.image}>
                    <strong>El rincon · Cancha de Fútbol</strong>
                    <br></br>A 600 m · Grupos de 10 <br></br>
                    <strong>10 USD </strong>hora
                </Text>
            </Card>
            <Card>
                <Card.Image source={{ uri: "https://picsum.photos/200/300" }} />
                <Text style={styles.image}>
                    <strong>El rincon · Cancha de Fútbol</strong>
                    <br></br>A 600 m · Grupos de 10 <br></br>
                    <strong>10 USD </strong>hora
                </Text>
                <Card.Image
                    source={Assets.star_red}
                    style={{ width: 15, height: 15 }}
                />
            </Card>
            <Card>
                <Card.Image source={{ uri: "https://picsum.photos/200/300" }} />
                <Text style={styles.image}>
                    <strong>El rincon · Cancha de Fútbol</strong>
                    <br></br>A 600 m · Grupos de 10 <br></br>
                    <strong>10 USD </strong>hora
                </Text>
                <Card.Image
                    source={Assets.star_red}
                    style={{ width: 15, height: 15 }}
                />
            </Card>
            <Card>
                <Card.Image source={{ uri: "https://picsum.photos/200/300" }} />
                <Text style={styles.image}>
                    <strong>El rincon · Cancha de Fútbol</strong>
                    <br></br>A 600 m · Grupos de 10 <br></br>
                    <strong>10 USD </strong>hora
                </Text>
                <Card.Image
                    source={Assets.star_red}
                    style={{ width: 15, height: 15 }}
                />
            </Card>
            <Card>
                <Card.Image source={{ uri: "https://picsum.photos/200/300" }} />
                <Text style={styles.image}>
                    <strong>El rincon · Cancha de Fútbol</strong>
                    <br></br>A 600 m · Grupos de 10 <br></br>
                    <strong>10 USD </strong>hora
                </Text>
                <Card.Image
                    source={Assets.star_red}
                    style={{ width: 15, height: 15 }}
                />
            </Card>
            <Card>
                <Card.Image source={{ uri: "https://picsum.photos/200/300" }} />
                <Text style={styles.image}>
                    <strong>El rincon · Cancha de Fútbol</strong>
                    <br></br>A 600 m · Grupos de 10 <br></br>
                    <strong>10 USD </strong>hora
                </Text>
                <Card.Image
                    source={Assets.star_red}
                    style={{ width: 15, height: 15 }}
                />
            </Card>
            <Card>
                <Card.Image source={{ uri: "https://ibb.co/g9YFFqF" }} />
                <Text style={styles.image}>
                    <strong>El rincon · Cancha de Fútbol</strong>
                    <br></br>A 600 m · Grupos de 10 <br></br>
                    <strong>10 USD </strong>hora
                </Text>
                <Card.Image
                    source={Assets.star_red}
                    style={{ width: 15, height: 15 }}
                />
            </Card>
            <Card>
                <Card.Image source={{ uri: "https://picsum.photos/200/300" }} />
                <Text style={styles.image}>
                    <strong>El rincon · Cancha de Fútbol</strong>
                    <br></br>A 600 m · Grupos de 10 <br></br>
                    <strong>10 USD </strong>hora
                </Text>
                <Card.Image
                    source={Assets.star_red}
                    style={{ width: 15, height: 15 }}
                />
            </Card>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        alignItems: "baseline",
        justifyContent: "space-around",
        display: "flex",
        flexDirection: "row",
        paddingTop: 50,
    },
    input: {
        height: 40,
        marginTop: 12,
        marginBottom: 12,
        borderWidth: 1,
        padding: 10,
        overflow: "hidden",
        borderRadius: 25,
        width: 300,
    },
    image: {
        marginBottom: 10,
        padding: 5,
    },
    logo: {
        width: 150,
        height: 40,
        marginLeft: 10,
    },
    card: {
        backgroundColor: "#fff",
        borderWidth: 0,
        padding: 15,
        borderColor: "#fff",
    },
    carousel: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
    },
    SearchBar: {
        flexDirection: "initial",
    },
    iconos_categorias: {
        width: 69,
        height: 92,
        marginRight: 15,
    },
});
