import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { Card } from "react-native-elements";
import assets from "../../../constants/assets";
import GroupsScreenStyles from "./GroupsScreenStyles";

const GroupScreenCard = () => {
    return (
        <View>
            <View style={GroupsScreenStyles.titulo_grupos}>
            <Image
                    source={assets.group_list_icon}
                />
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
                    source={assets.profile_picture}
                />
                <View style={GroupsScreenStyles.descripcion_profile}>
                    <View>
                        <Text style={GroupsScreenStyles.titulo_descripcion_usuario}>
                            John Doe
                        </Text>
                    </View>
                    <View style={GroupsScreenStyles.stayupper}>
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
                        <Text style={{ fontSize: 15 }}>Siempre disponible</Text>
                    </View>

                    <Text
                        style={GroupsScreenStyles.titulo_descripcion_usuario}
                        onPress={() => {
                            console.log("hola");
                        }}>
                        En grupo 100 - Futbol
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
