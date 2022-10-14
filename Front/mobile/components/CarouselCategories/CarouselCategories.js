import React, { useContext, useState } from "react";
import {
	ActivityIndicator,
	Image,
	StyleSheet,
	Text,
	TouchableOpacity,
	useWindowDimensions,
	View,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { ThemeContext } from "../../Context/Theme";
export const CarouselCategories = ({ arrayImages }) => {
	const { width, height } = useWindowDimensions();
	const { textTheme, backTheme } = useContext(ThemeContext);

	const renderItem = ({ item }) => {
		return (
			<TouchableOpacity
				onPress={() => alert(item.name)}
				style={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "flex-start",
					alignItems: "center",
					height: 365,
				}}>
				<Image
					source={item.image}
					resizeMode='contain'
					PlaceholderContent={<ActivityIndicator color='red' />}
					style={{ width: 50, height: 50 }}
				/>
				<Text
					style={{
						width: 65,
						textAlign: "center",
						color: textTheme,
						fontSize: 14,
					}}>
					{item.name}
				</Text>
			</TouchableOpacity>
		);
	};

	return (
		<ScrollView
			style={{
				width: width,
				height: 100,
				backgroundColor: backTheme,
			}}>
			<Carousel
				layout={"default"}
				data={arrayImages}
				sliderWidth={width}
				itemWidth={60}
				itemHeight={60}
				renderItem={renderItem}
				enableSnap={true}
				loop={true}
			/>
		</ScrollView>
	);
};
