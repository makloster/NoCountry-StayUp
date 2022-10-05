import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "react-native";
import { BottomTabs } from "./Tabs/BottomTabs";

export default function Navigation() {
	return (
		<NavigationContainer>
			<StatusBar />
			<BottomTabs />
		</NavigationContainer>
	);
}
