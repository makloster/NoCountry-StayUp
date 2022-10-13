import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useContext } from "react";
import { Image, StyleSheet } from "react-native";
import assets from "../../constants/assets";
import { ThemeContext } from "../../Context/Theme";

//screens
import GroupsScreen from "../screens/GroupsScreen/GroupsScreenNotLogged";
import CategoriesScreenView from "../screens/HomeScreen/Categories/CategoriesScreenView";
import { StackHomeCategory } from "../screens/HomeScreen/Categories/StackHomeCategory";
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import GroupScreenDetail from "../screens/GroupsScreen/GroupScreenDetail/GroupScreenDetail";
import UserScreenLogged from "../screens/UserScreen/UserScreenLogged";

import { StackLocalScreens } from "../Stacks/StackLocalScreens";
import GroupsScreenLogged from "../screens/GroupsScreen/GroupsScreenLogged";
import GroupsScreenNotLogged from "../screens/GroupsScreen/GroupsScreenNotLogged";
import { StackGroupsLogged } from "../screens/GroupsScreen/StackNavegationGroups/StackGroupsLogged";

const Tab = createBottomTabNavigator();

export const BottomTabs = () => {
    const { dark, backTheme, textTheme } = useContext(ThemeContext);

    return (
        <Tab.Navigator
            //initialRouteName='Home'
            screenOptions={{
                tabBarActiveTintColor: textTheme,
                tabBarStyle: {
                    height: 65,
                    paddingBottom: 10,
                    backgroundColor: backTheme,
                },
            }}>
            <Tab.Screen
                name='Inicio'
                component={StackHomeCategory}
                options={{
                    tabBarIcon: () => (
                        <Image
                            source={dark ? assets.home_light : assets.home_dark}
                            style={tabBarStyles.icons}
                        />
                    ),
                    headerShown: false,
                }}
            />
            <Tab.Screen
                name='Grupos'
                component={StackGroupsLogged}
                options={{
                    tabBarIcon: () => (
                        <Image
                            source={
                                dark ? assets.place_light : assets.place_dark
                            }
                            style={tabBarStyles.icons}
                        />
                    ),
                    headerShown: false,
                }}
            />
            <Tab.Screen
                name='Favoritos'
                component={StackLocalScreens}
                options={{
                    tabBarIcon: () => (
                        <Image
                            source={
                                dark
                                    ? assets.favorite_light
                                    : assets.favorite_dark
                            }
                            style={tabBarStyles.icons}
                        />
                    ),
                    tabBarBadge: 5,
                    headerShown: false,
                }}
            />
            <Tab.Screen
                name='User'
                component={UserScreen}
                options={{
                    tabBarIcon: () => (
                        <Image
                            source={dark ? assets.user_light : assets.user_dark}
                            style={tabBarStyles.icons}
                        />
                    ),
                    headerShown: false,
                }}
            />
        </Tab.Navigator>
    );
};

const tabBarStyles = StyleSheet.create({
    icons: {
        width: 20,
        height: 20,
    },
});
