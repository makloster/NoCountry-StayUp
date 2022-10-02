import { NavigationContainer } from "@react-navigation/native";

import { BottomTabs } from "./Tabs/BottomTabs";

export default function Navigation() {
	return (
		<NavigationContainer>
			<BottomTabs />
		</NavigationContainer>
	);
}
