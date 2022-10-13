import React, {useContext} from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { UserStyles } from "./UserScreenStyles";
import { Card, ListItem, Icon } from "react-native-elements";
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
];

export default function UserScreen() {
    const { backTheme, textTheme } = useContext(ThemeContext);
    const userStyles = UserStyles();

    return (
        <ScrollView style={{ backgroundColor: backTheme }}>
            <View>
                <Text
                    style={{
                        fontSize: 30,
                        textAlign: "left",
                        marginTop: "20%",
                        marginLeft: 20,
                        color: textTheme
                    }}>
                    Perfil
                </Text>
            </View>
            <Card.Divider />
            <Text style={userStyles.inicia_sesion_texto}>
                Inicia sesión para ver tu perfil
            </Text>
            <TouchableOpacity
                key={`welcome`}
                style={userStyles.buttonFindPlaces}>
                <Text
                    style={userStyles.textButtonFindPlaces}
                    onPress={() => {}}>
                    Iniciar sesión
                </Text>
            </TouchableOpacity>
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
                        <Icon style={{marginLeft:5}}name={item.icon} />
                        <ListItem.Content
                            style={{ backgroundColor: backTheme }}>
                            <ListItem.Title
                                style={{
                                    color: textTheme,
                                    backgroundColor: backTheme,
                                    marginLeft:5
                                }}>
                                {item.title}
                            </ListItem.Title>
                        </ListItem.Content>
                        <ListItem.Chevron />
                    </View>
                ))}
            </View>
                <ButtonChangeTheme/>
        </ScrollView>
    );
}
