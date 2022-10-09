import React from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { userStyles } from "../UserScreen/UserScreenStyles";
import GroupsScreenStyles from "./GroupsScreenStyles";
import { Card } from "react-native-elements";
import assets from "../../../constants/assets";
import GroupScreenCard from "./GroupScreenCard";

export default function GroupsScreenLogged() {
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
            </View>
            <GroupScreenCard />
            <GroupScreenCard />
        </ScrollView>
    );
}
