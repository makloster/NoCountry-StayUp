import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "react-native";
import { StackLogin } from "./Stacks/StackLogin";

export default function Navigation() {
	return (
		<NavigationContainer>
			<StackLogin />
			<StatusBar />
		</NavigationContainer>
	);
}
