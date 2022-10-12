import React, {useContext} from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { userStyles } from "../UserScreen/UserScreenStyles";
import {GroupsScreenStyles} from "./GroupsScreenStyles";
import { Card } from "react-native-elements";
import { ThemeContext } from "../../../Context/Theme";
import { ButtonChangeTheme } from "../../../components/Buttons/Buttons";


export default function GroupsScreenNotLogged() {
	const { backTheme } = useContext(ThemeContext);
    const groupsScreenStyles = GroupsScreenStyles();

    return (
        <ScrollView style={{ backgroundColor: backTheme }}>
            <View>
                <Text
                    style={groupsScreenStyles.titulo}>
                    Tus Grupos
                </Text>
                <Card.Divider />
                <View style={groupsScreenStyles.contenedor_subtitulos}>
                    <Text
                        style={groupsScreenStyles.titulo_iniciar_sesion_grupos}>
                        Inicia sesión para ver tus grupos
                    </Text>
                    <Text style={groupsScreenStyles.subtitulo_cancha}>
                        Puedes revisar todos los grupos que tienes en el momento
                        y cancelar si lo deseas.
                    </Text>
                </View>
            </View>
            <ButtonChangeTheme/>
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
