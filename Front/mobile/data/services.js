import { useContext } from "react";
import assets from "../constants/assets";
import { ThemeContext } from "../Context/Theme";

export const ArrayServices = () => {
	const { dark } = useContext(ThemeContext);
	return [
		{
			name: "Baños",
			icon: dark ? assets.bathdroom_light : assets.bathdroom_dark,
		},
		{
			name: "Estacionamiento",
			icon: dark ? assets.parking_light : assets.parking_dark,
		},
		{
			name: "Duchas / Vestuario",
			icon: dark ? assets.shower_light : assets.shower_dark,
		},
		{
			name: "Hidratación Disponible",
			icon: dark ? assets.water_light : assets.water_dark,
		},
		{
			name: "Agua Caliente",
			icon: dark ? assets.hotwater_light : assets.hotwater_dark,
		},
	];
};
