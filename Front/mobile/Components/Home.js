import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import Assets from "../constants/assets";

export default function Home() {
    return (
        <>
            <View style={styles.container}>
                <Image
                    source={Assets.logo_version_white}
                    resizeMode='contain'
                    style={{ width: 150, height: 40 }}
                />
                <Image
                    source={Assets.home_dark}
                    resizeMode='contain'
                    style={{ width: 40, height: 40, marginLeft: 130 }}
                />
                <Image
                    source={Assets.bell_dark}
                    resizeMode='contain'
                    style={{ width: 40, height: 40, marginRight: 25 }}
                />
            </View>
            <View>
                <TextInput
                    placeholder='¿Qué quieres hacer?'
                    placeholderTextColor='grey'
                    style={styles.input}
                    inlineImageLeft='search_icon'
                    multiline={true}
                    borderRadius='0.5'
                />
                <Image
                    source={{ uri: "https://picsum.photos/200/300" }}
                    style={{ width: 200, height: 300 }}
                />
                <StatusBar backgroundColor='red' />
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        alignItems: "baseline",
        justifyContent: "space-around",
        display: "flex",
        flexDirection: "row",
        paddingTop: 50,
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        overflow: "hidden",
        borderRadius: 25,
    },
});
