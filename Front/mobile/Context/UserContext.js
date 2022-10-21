import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
	const [user, setUser] = useState({});
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [token, setToken] = useState("");
	const [isGuest, setIsGuest] = useState(false);

	const saveUserData = (userLogged) => {
		setFirstName(userLogged.user.firstName);
		setLastName(userLogged.user.lastName);
		setEmail(userLogged.user.email);
		setToken(userLogged.token);
		setUser(userLogged);
		setIsGuest(false);
	};

	const isUserGuest = () => {
		setIsGuest(true);
	};

	return (
		<UserContext.Provider
			value={{
				user,
				saveUserData,
				firstName,
				lastName,
				email,
				token,
				setToken,
				isGuest,
				isUserGuest,
			}}>
			{children}
		</UserContext.Provider>
	);
};
