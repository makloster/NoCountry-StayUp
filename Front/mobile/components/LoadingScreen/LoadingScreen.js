import { ActivityIndicator, useWindowDimensions, View } from "react-native";

export const LoadingScreen = () => {
	const { width, height } = useWindowDimensions();
	return (
		<View
			style={{
				width,
				height,
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
			}}>
			<ActivityIndicator size='large' color='#F6163C' />
		</View>
	);
};
