import { useContext } from "react";
import assets from "../constants/assets";
import { ThemeContext } from "../Context/Theme";

export const ArrayActivities = () => {
	const { dark } = useContext(ThemeContext);
	return [
		{
			name: "Futbol",
			image: dark ? assets.futbol_light : assets.futbol_dark,
		},
		{
			name: "Basquet",
			image: dark ? assets.basket_light : assets.basket_dark,
		},
		{
			name: "Volley",
			image: dark ? assets.volley_light : assets.volley_dark,
		},
		{
			name: "Gimnasios",
			image: dark ? assets.gym_light : assets.gym_dark,
		},
		{
			name: "Skate",
			image: dark ? assets.skate_light : assets.skate_dark,
		},
		{
			name: "Playas",
			image: dark ? assets.beach_light : assets.beach_dark,
		},
		{
			name: "Plazas",
			image: dark ? assets.playground_light : assets.playground_dark,
		},
		{
			name: "Juegos de Mesa",
			image: dark ? assets.boardsGames_light : assets.boardGames_dark,
		},
		{
			name: "Salidas Nocturnas",
			image: dark ? assets.danceFloor_light : assets.danceFloor_dark,
		},
		{
			name: "Ping Pong",
			image: dark ? assets.tableTennis_light : assets.tableTennis_dark,
		},
		{
			name: "Lucha",
			image: dark ? assets.fight_light : assets.fight_dark,
		},
		{
			name: "Karting",
			image: dark ? assets.karting_light : assets.karting_dark,
		},
		{
			name: "Trekking",
			image: dark ? assets.trekking_light : assets.trekking_dark,
		},
		{
			name: "Escaladas",
			image: dark ? assets.climb_light : assets.climb_dark,
		},
		{
			name: "Pool",
			image: dark ? assets.pool_light : assets.pool_dark,
		},
		{
			name: "Adaptados",
			image: dark ? assets.adptables_light : assets.adatables_dark,
		},
	];
};
