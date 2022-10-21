import { createContext, useEffect, useState } from "react";
import { GET_Locals_All } from "../api/GET_Locals_All";

export const LocalContext = createContext();

export const LocalProvider = ({ children }) => {
	const [locals, setLocals] = useState([]);
	const [localsFiltered, setLocalsFiltered] = useState([]);

	useEffect(() => {
		console.log(locals);
	}, [locals]);

	useEffect(() => {
		console.log(localsFiltered);
	}, [localsFiltered]);

	const fetchLocals = (userToken) => {
		GET_Locals_All(userToken, setLocals);
	};

	const filterLocalsByActivity = (activity) => {
		locals.map((local) => {
			local.activities.map(
				(act) =>
					act.toLowerCase() === activity &&
					setLocalsFiltered([...localsFiltered, local])
			);
		});
	};

	return (
		<LocalContext.Provider
			value={{
				locals,
				localsFiltered,
				fetchLocals,
				filterLocalsByActivity,
			}}>
			{children}
		</LocalContext.Provider>
	);
};
