import React, { useState } from "react";
import { Image, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Carousel, { Pagination } from "react-native-snap-carousel";

export const CarouselCustom = ({ arrayImages, width, dotsPosition }) => {
	const [index, setIndex] = useState(0);

	const renderItem = ({ item }) => {
		return (
			<Image
				source={item.image}
				resizeMode='cover'
				style={{
					width: 370,
					height: 250,
					alignSelf: "center",
					marginLeft: 5,
				}}
			/>
		);
	};

	return (
		<ScrollView
			style={{
				width: width > 370 ? 370 : width,
				height: 300,
			}}>
			<Carousel
				layout={"default"}
				data={arrayImages}
				sliderWidth={360}
				itemWidth={350}
				itemHeight={250}
				renderItem={renderItem}
				enableSnap={true}
				onSnapToItem={(e) => setIndex(e)}
			/>
			<Pagination
				dotsLength={arrayImages.length}
				activeDotIndex={index}
				containerStyle={{
					zIndex: 3,
					position: "absolute",
					bottom: dotsPosition,
					width: 350,
					alignSelf: "center",
				}}
				dotStyle={{
					width: 10,
					height: 10,
					borderRadius: 5,
					marginHorizontal: 0,
					backgroundColor: "rgba(255, 255, 255, 0.92)",
				}}
				inactiveDotOpacity={0.4}
				inactiveDotScale={0.6}
			/>
		</ScrollView>
	);
};

const styles = StyleSheet.create({});
