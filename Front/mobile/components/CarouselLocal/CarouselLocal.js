import React from "react";
import { ActivityIndicator, Image, StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Carousel from "react-native-snap-carousel";
import assets from "../../constants/assets";
const BASE_URI = "https://source.unsplash.com/random";
export const CarouselLocal = ({ arrayImages, width, height }) => {
	const renderItem = ({ item }) => {
		return (
			<Image
				source={item.image}
				resizeMode='contain'
				PlaceholderContent={<ActivityIndicator color='blue' />}
				style={{ width, height }}
			/>
		);
	};

	return (
		<ScrollView
			style={{
				width,
				height,
			}}>
			<Carousel
				layout={"default"}
				data={arrayImages}
				sliderWidth={width}
				itemWidth={width}
				itemHeight={height}
				renderItem={renderItem}
				enableSnap={true}
			/>
		</ScrollView>
	);
};

const styles = StyleSheet.create({});
