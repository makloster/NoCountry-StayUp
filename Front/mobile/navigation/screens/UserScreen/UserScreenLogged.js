import React, { useContext } from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { UserStyles } from "./UserScreenStyles";
import { Card, ListItem, Icon } from "react-native-elements";
import assets from "../../../constants/assets";
import { ThemeContext } from "../../../Context/Theme";
import { ButtonChangeTheme } from "../../../components/Buttons/Buttons";

const list = [
    {
        title: "Ajustes",
        icon: "settings",
    },
    {
        title: "Ayuda",
        icon: "help",
    },
    {
        title: "Terminos de Servicio",
        icon: "info",
    },
    {
        title: "Políticas de privacidad",
        icon: "privacy-tip",
    },
    {
        title: "Cerrar sesión",
        icon: "logout",
    },
];

export default function UserScreenLogged() {
    const userStyles = UserStyles();
    const { backTheme, textTheme } = useContext(ThemeContext);

    return (
        <ScrollView style={{ backgroundColor: backTheme }}>
            <View>
                <Text
                    style={{
                        fontSize: 30,
                        textAlign: "left",
                        marginTop: "20%",
                        marginLeft: 20,
                        color: textTheme,
                    }}>
                    Perfil
                </Text>
            </View>
            <Card.Divider />

            <View style={userStyles.profile_card}>
                <Card.Image
                    style={userStyles.profile_picture}
                    source={assets.profile_picture}
                />
                <View style={userStyles.descripcion_profile}>
                    <View>
                        <Text style={userStyles.titulo_descripcion_usuario}>
                            John Doe
                        </Text>
                    </View>
                    <View style={userStyles.stayupper}>
                        <Image
                            source={assets.logo_dark}
                            style={{
                                width: 80,
                                height: 13,
                                marginTop: 3,
                                marginRight: 3,
                            }}
                        />
                        <Image source={assets.bolita_verde} />
                        <Text style={{ fontSize: 15, color: textTheme }}>
                            Siempre disponible
                        </Text>
                    </View>

                    <Text
                        style={userStyles.titulo_descripcion_usuario}
                        onPress={() => {
                            console.log("hola");
                        }}>
                        En grupo 100 - Futbol
                    </Text>
                </View>
            </View>

            <Card.Divider />

            <View style={{ backgroundColor: backTheme }}>
                {list.map((item, i) => (
                    <View
                        style={{
                            backgroundColor: backTheme,
                            alignItems: "center",
                            flexDirection: "row",
                            padding: 16,
                        }}
                        key={i}>
                        <Icon style={{ marginLeft: 5 }} name={item.icon} />
                        <ListItem.Content
                            style={{ backgroundColor: backTheme }}>
                            <ListItem.Title
                                style={{
                                    color: textTheme,
                                    backgroundColor: backTheme,
                                    marginLeft: 5,
                                }}>
                                {item.title}
                            </ListItem.Title>
                        </ListItem.Content>
                        <ListItem.Chevron />
                    </View>
                ))}
            </View>

            <TouchableOpacity
                key={`welcome`}
                style={userStyles.buttonFindPlaces}>
                <Text
                    style={userStyles.textButtonFindPlaces}
                    onPress={() => {}}>
                    Iniciar sesión
                </Text>
            </TouchableOpacity>
            <ButtonChangeTheme />
        </ScrollView>
    );
}
