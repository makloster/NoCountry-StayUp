import react, { useContext } from "react";
import { UserContext } from "../Context/UserContext";

export const POST_LoginUser = (validateUser, setIsValidLogin, saveUserData) => {
	// SE HACE CON EMAIL Y PW
	fetch("http://192.168.0.8:4000/api/v1/auth/login", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(validateUser),
	})
		.then((response) => response.json())
		// DEVUELVE TOKEN
		.then((data) => {
			if (data.token) {
				saveUserData(data);
				setIsValidLogin(true);
			} else {
				setIsValidLogin(false);
			}
		})
		.catch((error) => setIsValidLogin(false));
};
