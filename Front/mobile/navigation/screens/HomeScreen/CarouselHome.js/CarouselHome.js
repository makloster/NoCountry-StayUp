import React from "react";
import { View, TouchableOpacity, Image, Text } from "react-native";
import assets from "../../../../constants/assets";
import { HomeStyles } from "../HomeScreenStyles";
import { useContext } from "react";
import { ThemeContext } from "../../../../Context/Theme";

const CarouselHome = () => {
    const homeStyles = HomeStyles();
    const { dark } = useContext(ThemeContext);

    return (
        <View style={homeStyles.carousel}>
            <View>
                <TouchableOpacity onPress={() => {}}>
                    <Image
                        source={
                            dark
                                ? assets.juegos_de_mesa_icono_darkmode
                                : assets.juegos_de_mesa_icono
                        }
                        resizeMode='contain'
                        style={homeStyles.iconos_categorias}
                    />
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity onPress={() => {}}>
                    <Image
                        source={
                            dark
                                ? assets.karting_icono_darkmode
                                : assets.karting_icono
                        }
                        resizeMode='contain'
                        style={homeStyles.iconos_categorias}
                    />
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity onPress={() => {}}>
                    <Image
                        source={
                            dark
                                ? assets.kickboxing_icono_darkmode
                                : assets.kickboxing_icono
                        }
                        resizeMode='contain'
                        style={homeStyles.iconos_categorias}
                    />
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity onPress={() => {}}>
                    <Image
                        source={
                            dark
                                ? assets.ping_pong_icono_darkmode
                                : assets.ping_pong_icono
                        }
                        resizeMode='contain'
                        style={homeStyles.iconos_categorias}
                    />
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity onPress={() => {}}>
                    <Image
                        source={
                            dark
                                ? assets.pubs_icono_darkmode
                                : assets.pubs_icono
                        }
                        resizeMode='contain'
                        style={homeStyles.iconos_categorias}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default CarouselHome;
