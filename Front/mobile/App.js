import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { ScrollView, Image, StyleSheet, Text, View } from "react-native";
import Assets from "./constants/assets";
import Home from "./Components/Home";

export default function App() {
    return (
        <ScrollView>
            <Home />
        </ScrollView>
    );
}
