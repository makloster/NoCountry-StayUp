import React from "react";
import { View, Image, TextInput } from "react-native";
import { homeStyles } from "../HomeScreenStyles";
import { iconsArray } from "./categoryIconsArray";
import assets from "../../../../constants/assets";

const CategoriesScreenView = () => {
    return (
        <>
            <View style={homeStyles.container}>
                <Image
                    source={assets.logo_version_white}
                    resizeMode='contain'
                    style={homeStyles.logo}
                />
                <Image
                    source={assets.message_dark}
                    resizeMode='contain'
                    style={{ width: 38, height: 36, marginLeft: 120 }}
                />
                <Image
                    source={assets.bell_dark}
                    resizeMode='contain'
                    style={{ width: 38, height: 38, marginRight: 15 }}
                />
            </View>
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
            <View style={homeStyles.lista_flex_iconos}>
                {iconsArray.map((icon) => (
                    <Image
                        id={icon.id}
                        source={icon.image}
                        style={homeStyles.iconos_categorias}
                        resizeMode='contain'
                    />
                ))}
            </View>
        </>
    );
};

export default CategoriesScreenView;
