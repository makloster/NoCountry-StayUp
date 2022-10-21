import assets from "../constants/assets";

export const renderImage = (activity) => {
	if (activity === "Futbol") return assets.futbol_court;
	if (activity === "Basquet") return assets.basquet_court;
	if (activity === "Volley") return assets.volley_court;
	if (activity === "Gimnasios") return assets.gym;
	if (activity === "Lucha") return assets.karate_court;
};
