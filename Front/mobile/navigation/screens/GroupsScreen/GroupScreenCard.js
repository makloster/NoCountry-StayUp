import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { Card } from "react-native-elements";
import assets from "../../../constants/assets";
import GroupsScreenStyles from "./GroupsScreenStyles";
import { LocalStyles } from "../LocalScreen/LocalScreenStyles";

const GroupScreenCard = () => {
    const localStyles = LocalStyles();
    return (
        <View>
            <View style={GroupsScreenStyles.titulo_grupos}>
                <Image source={assets.group_list_icon} />
                <View style={GroupsScreenStyles.contenedor_subtitulos}>
                    <Text
                        style={GroupsScreenStyles.titulo_iniciar_sesion_grupos}>
                        Grupo 100
                    </Text>
                    <Text>Sábado 27 de Enero - 17:00</Text>
                </View>
            </View>
            <View style={GroupsScreenStyles.profile_card}>
                <Card.Image
                    style={GroupsScreenStyles.profile_picture}
                    source={assets.dummy2}
                />
                <View style={GroupsScreenStyles.descripcion_profile}>
                    <View>
                        <Text
                            style={
                                GroupsScreenStyles.titulo_descripcion_usuario
                            }>
                            El rincon · Cancha de Fútbol
                        </Text>
                        <Text
                          /*   style={
                                GroupsScreenStyles.titulo_descripcion_usuario
                            } */>
                            A 600 m · Grupos de 10
                        </Text>
                    </View>
                    <View style={GroupsScreenStyles.stayupper}>
                        <Image source={assets.bolita_verde} />
                        <Image
                            source={assets.user_dark}
                            style={GroupsScreenStyles.communityGroupImageAvatar}
                        />
                        <Image
                            source={assets.user_dark}
                            style={GroupsScreenStyles.communityGroupImageAvatar}
                        />
                        <Image
                            source={assets.user_dark}
                            style={GroupsScreenStyles.communityGroupImageAvatar}
                        />
                        <Image source={assets.bolita_verde} />
                    </View>

                    <Text
                        style={GroupsScreenStyles.faltan_personas_descripcion_usuario}
                        onPress={() => {
                            console.log("hola");
                        }}>
                        Actualmente falta(n) 1 persona(s) más
                    </Text>
                </View>
            </View>
            <View style={GroupsScreenStyles.contenedor_botones}>
                <TouchableOpacity
                    key={`verGrupo`}
                    style={GroupsScreenStyles.buttonVerGrupo}>
                    <Text
                        style={GroupsScreenStyles.textButtonVerGrupo}
                        onPress={() => {}}>
                        Ver Grupo
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    key={`cancelarReserva`}
                    style={GroupsScreenStyles.buttonCancelarReserva}>
                    <Text
                        style={GroupsScreenStyles.textButtonCancelarReserva}
                        onPress={() => {}}>
                        Cancelar Reserva
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default GroupScreenCard;
