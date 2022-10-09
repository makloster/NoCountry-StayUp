import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { userStyles } from "../UserScreen/UserScreenStyles";
import GroupsScreenStyles from "./GroupsScreenStyles";
import { Card } from "react-native-elements";

export default function GroupsScreenNotLogged() {
    return (
        <ScrollView style={{ backgroundColor: "white" }}>
            <View>
                <Text
                    style={{
                        fontSize: 30,
                        textAlign: "left",
                        marginTop: "20%",
                        marginLeft: 20,
                    }}>
                    Tus Grupos
                </Text>
                <Card.Divider />
                <View style={GroupsScreenStyles.contenedor_subtitulos}>
                    <Text
                        style={GroupsScreenStyles.titulo_iniciar_sesion_grupos}>
                        Inicia sesión para ver tus favoritos
                    </Text>
                    <Text>
                        Puedes agregar, editar y ver tus favoritos iniciando sesión.
                    </Text>
                </View>
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
        </ScrollView>
    );
}
