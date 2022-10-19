import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
	const [user, setUser] = useState({});
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [token, setToken] = useState("");

	useEffect(() => {
		console.log("user", user);
		console.log("firstName", firstName);
		console.log("lastName", lastName);
		console.log("email", email);
		console.log("token", token);
	}, [user]);

	const saveUserData = (userLogged) => {
		setFirstName(userLogged.user.firstName);
		setLastName(userLogged.user.lastName);
		setEmail(userLogged.user.email);
		setToken(userLogged.token);
		setUser(userLogged);
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
			}}>
			{children}
		</UserContext.Provider>
	);
};
