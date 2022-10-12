import {
    Dimensions,
    Image,
    TextInput,
    TouchableOpacity,
    View,
    Text,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { CarouselCustomHome } from "../../../components/CarouselCustom/CarouselCustomHome";
import assets from "../../../constants/assets";
import HomeCard from "./HomeCard";
import { HomeStyles } from "./HomeScreenStyles";
import { useNavigation } from "@react-navigation/native";
import { userStyles } from "../UserScreen/UserScreenStyles";
import { Card } from "react-native-elements";
import BotonReservas from "./BotonReservas/BotonReservas";
import CarouselHome from "./CarouselHome.js/CarouselHome";
import { ButtonChangeTheme } from "../../../components/Buttons/Buttons";
import { useContext } from "react";
import { ThemeContext } from "../../../Context/Theme";

const widthScreen = Dimensions.get("window").width;
const heightImage = widthScreen - 300;

export default function Home({ navigation }) {
    const homeStyles = HomeStyles();
    const { dark } = useContext(ThemeContext);
    return (
        <ScrollView>
            <View style={homeStyles.container}>
                <Image
                    source={dark ? assets.principal_logo_light : assets.logo_version_white}
                    resizeMode='contain'
                    style={homeStyles.logo}
                />
                <Image
                    source={dark ? assets.message_light : assets.message_dark}
                    resizeMode='contain'
                    style={{ width: 38, height: 36, marginLeft: 120 }}
                />
                <Image
                    source={dark? assets.bell_light : assets.bell_dark}
                    resizeMode='contain'
                    style={{ width: 38, height: 38, marginRight: 15 }}
                />
            </View>
            <View style={homeStyles.contenedor_input}>
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
                </View>
            </View>
            {/*  <CarouselCustomHome
                arrayImages={iconsHomeArray}
                width={widthScreen}
                height={heightImage}
                style={{backgroundColor:"white"}}
            /> */}
            <CarouselHome />
            <TouchableOpacity
                style={homeStyles.container_boton_categoria}
                onPress={() => navigation.navigate("Category Screen View")}>
                <Text style={homeStyles.boton_ver_mas_categorias}>Ver más</Text>
            </TouchableOpacity>
            <BotonReservas />
            <ButtonChangeTheme />
            <View style={homeStyles.container_cards}>
                <HomeCard />
                <HomeCard />
                <HomeCard />
                <HomeCard />
                <HomeCard />
                <HomeCard />
                <HomeCard />
            </View>
        </ScrollView>
    );
}
