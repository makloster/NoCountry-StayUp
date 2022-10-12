import React, { useContext, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { Card } from "react-native-elements";
import { ButtonChangeTheme } from "../../../../components/Buttons/Buttons";
import assets from "../../../../constants/assets";
import { ThemeContext } from "../../../../Context/Theme";
import { HomeStyles } from "../../HomeScreen/HomeScreenStyles";
import { GroupScreenDetailStyles } from "./GroupScreenDetailStyles";
import GroupScreenDetailUserCard from "./GroupScreenDetailUserCard";

const GroupScreenDetail = () => {
    const [corazonOn, setCorazonOn] = useState(true);
    const { backTheme, textTheme } = useContext(ThemeContext);
    const groupScreenDetailStyles = GroupScreenDetailStyles();
    const homeStyles = HomeStyles();


    return (
        <ScrollView style={{ backgroundColor: backTheme }}>
            <View style={groupScreenDetailStyles.contenedor_titulo}>
                <Text
                    style={{
                        fontSize: 25,
                        textAlign: "left",
                        marginLeft: 20,
                        color: textTheme
                    }}>
                    Grupo 100
                </Text>
                <Text style={{ marginTop: 8, marginLeft: 5, fontSize: 16, color: textTheme }}>
                    Sábado 28 de Enero - 17:00
                </Text>
            </View>
            <Card.Divider />
            <View style={groupScreenDetailStyles.cards}>
                {/*    <TouchableOpacity
                onPress={() => {
                    setCorazonOn(!corazonOn);
                }}>
                {corazonOn ? (
                    <Image
                        source={assets.like}
                        resizeMode='contain'
                        style={homeStyles.corazon_en_card}
                    />
                ) : (
                    <Image
                        source={assets.favorite_red_filled}
                        resizeMode='contain'
                        style={homeStyles.corazon_en_card}
                    />
                )}
            </TouchableOpacity> */}

                <Card.Image
                    style={groupScreenDetailStyles.image}
                    source={assets.dummy1}
                />

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

                <Text style={groupScreenDetailStyles.subtitulo_cancha}>A 600 m · Grupos de 10</Text>
                <Text
                    style={homeStyles.titulo_descripcion_cancha}
                    onPress={() => {
                        console.log("hola");
                    }}>
                    10 USD hora
                </Text>
            </View>
            <Text style={groupScreenDetailStyles.personas_en_el_grupo}>
                Personas en el grupo:
            </Text>
                <ButtonChangeTheme/>
            <GroupScreenDetailUserCard />
            <GroupScreenDetailUserCard />
            <GroupScreenDetailUserCard />
            <GroupScreenDetailUserCard />

            <GroupScreenDetailUserCard />
        </ScrollView>
    );
};

export default GroupScreenDetail;
