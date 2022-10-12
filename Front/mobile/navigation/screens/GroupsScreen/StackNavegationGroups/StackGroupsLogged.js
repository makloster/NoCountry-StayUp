import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GroupScreenLogged from '../GroupsScreenLogged'
import GroupScreenDetail from '../GroupScreenDetail/GroupScreenDetail'

const Stack = createNativeStackNavigator();

export const StackGroupsLogged = () => {
    return (
        <Stack.Navigator initialRouteName='Group Screen Logged'>
            <Stack.Screen
                name='Group Screen Logged'
                component={GroupScreenLogged}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name='Group Screen Detail'
                component={GroupScreenDetail}
                options={{
                    headerShown: false,
                }}
            />
        </Stack.Navigator>
    );
};
