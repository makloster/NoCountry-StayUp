import React, { useContext } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { Card } from "react-native-elements";
import assets from "../../../constants/assets";
import { ThemeContext } from "../../../Context/Theme";
import { GroupsScreenStyles } from "./GroupsScreenStyles";

const GroupScreenCard = ({navigation}) => {
    const groupsScreenStyles = GroupsScreenStyles();
    const { dark } = useContext(ThemeContext);

    return (
        <View>
            <View style={groupsScreenStyles.titulo_grupos}>
                <Image source={assets.group_list_icon} />
                <View style={groupsScreenStyles.contenedor_subtitulos}>
                    <Text
                        style={groupsScreenStyles.titulo_iniciar_sesion_grupos}>
                        Grupo 100
                    </Text>
                    <Text style={groupsScreenStyles.subtitulo_cancha}>
                        Sábado 27 de Enero - 17:00
                    </Text>
                </View>
            </View>
            <View style={groupsScreenStyles.profile_card}>
                <Card.Image
                    style={groupsScreenStyles.profile_picture}
                    source={assets.dummy2}
                />
                <View style={groupsScreenStyles.descripcion_profile}>
                    <View>
                        <Text
                            style={
                                groupsScreenStyles.titulo_descripcion_usuario
                            }>
                            El rincon · Cancha de Fútbol
                        </Text>
                        <Text style={groupsScreenStyles.subtitulo_cancha}>
                            A 600 m · Grupos de 10
                        </Text>
                    </View>
                    <View style={groupsScreenStyles.stayupper}>
                        <Image source={assets.bolita_verde} />
                        <Image
                            source={dark ? assets.user_light : assets.user_dark}
                            style={groupsScreenStyles.communityGroupImageAvatar}
                        />
                        <Image
                            source={dark ? assets.user_light : assets.user_dark}
                            style={groupsScreenStyles.communityGroupImageAvatar}
                        />
                        <Image
                            source={dark ? assets.user_light : assets.user_dark}
                            style={groupsScreenStyles.communityGroupImageAvatar}
                        />
                        <Image source={assets.bolita_verde} />
                    </View>

                    <Text
                        style={
                            groupsScreenStyles.faltan_personas_descripcion_usuario
                        }
                        onPress={() => {
                            console.log("hola");
                        }}>
                        Actualmente falta(n) 1 persona(s) más
                    </Text>
                </View>
            </View>
            <View style={groupsScreenStyles.contenedor_botones}>
            <TouchableOpacity
                onPress={() => navigation.navigate("Group Screen Detail")}
                    key={`verGrupo`}
                    style={groupsScreenStyles.buttonVerGrupo}>
                    <Text
                        style={groupsScreenStyles.textButtonVerGrupo}
                        onPress={() => {}}>
                        Ver Grupo
                    </Text>
               
            </TouchableOpacity>
                
                <TouchableOpacity
                    key={`cancelarReserva`}
                    style={groupsScreenStyles.buttonCancelarReserva}>
                    <Text
                        style={groupsScreenStyles.textButtonCancelarReserva}
                        onPress={() => {}}>
                        Cancelar Reserva
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default GroupScreenCard;
