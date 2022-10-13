import React, { useContext } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { Card } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";
import { ButtonChangeTheme } from "../../../components/Buttons/Buttons";
import { ThemeContext } from "../../../Context/Theme";
import GroupScreenCard from "./GroupScreenCard";
import GroupsScreenStyles from "./GroupsScreenStyles";

export default function GroupsScreenLogged({ navigation }) {
    const { backTheme } = useContext(ThemeContext);
    const groupsScreenStyles = GroupsScreenStyles();

    return (
        <ScrollView style={{ backgroundColor: backTheme }}>
            <View>
                <Text style={groupsScreenStyles.titulo}>Tus Grupos</Text>
                <Card.Divider />
            </View>
            <TouchableOpacity
                onPress={() => navigation.navigate("Group Screen Detail")}>
                <GroupScreenCard />
            </TouchableOpacity>
            <Card.Divider />
            <ButtonChangeTheme />
            <TouchableOpacity
                onPress={() => navigation.navigate("Group Screen Detail")}>
                <GroupScreenCard />
            </TouchableOpacity>
        </ScrollView>
    );
}
