import { createContext, useEffect, useState } from "react";
import { search } from "react-native-country-picker-modal/lib/CountryService";
import { GET_Locals_All } from "../api/GET_Locals_All";
import LocalsByJson from "../data/Locales.json";

export const LocalContext = createContext();

export const LocalProvider = ({ children }) => {
	const [locals, setLocals] = useState(LocalsByJson);
	const [localsFiltered, setLocalsFiltered] = useState(locals);

	// const [locals, setLocals] = useState([]);

	// useEffect(() => {
	// 	fetchLocals();
	// }, []);
	useEffect(() => {
		console.log(localsFiltered);
	}, [localsFiltered]);

	useEffect(() => {
		console.log(locals);
	}, [locals]);

	// const fetchLocals = (userToken) => {
	// 	GET_Locals_All(userToken, setLocals);
	// };

	const filterLocalsByActivity = (activity) => {
		if (activity === "Todos") {
			setLocalsFiltered(locals);
			return;
		}
		let filtered = [];
		locals.map((local) => {
			local.activities.map(
				// (act) => act.name === activity && filtered.push(local)
				(act) => act === activity && filtered.push(local)
			);
		});
		setLocalsFiltered(filtered);
	};

	const filterLocalsByActivityPrice = (activity, price) => {
		if (activity === "Todos") {
			setLocalsFiltered(locals);
			return;
		}
		let filtered = [];
		locals.map((local) => {
			local.activities.map(
				// (act) => act.name === activity && filtered.push(local)
				(act) =>
					act === activity &&
					local.priceGroup < price &&
					filtered.push(local)
			);
		});
		setLocalsFiltered(filtered);
	};

	const filterByInputValue = async (value) => {
		let filtered = [];

		if (value === "Todos") {
			setLocalsFiltered(locals);
			return;
		}
		const queryWordsArray = value.toLowerCase().split(" ");
		await queryWordsArray.map((word) => {
			locals.map((local) => {
				local.activities.map(
					(act) => act.toLowerCase() === word && filtered.push(local)
				);
				local.name.toLowerCase().includes(word) && filtered.push(local);
				local.adress.toLowerCase().includes(word) &&
					filtered.push(local);
			});
		});

		filtered = [...new Set(filtered)];

		setLocalsFiltered(filtered);
	};

	return (
		<LocalContext.Provider
			value={{
				locals,
				localsFiltered,
				// fetchLocals,
				filterLocalsByActivity,
				filterLocalsByActivityPrice,
				filterByInputValue,
			}}>
			{children}
		</LocalContext.Provider>
	);
};
