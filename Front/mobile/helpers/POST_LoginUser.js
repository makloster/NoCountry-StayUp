export const POST_LoginUser = (user, setIsValidLogin) => {
	console.log("POST");
	// SE HACE CON EMAIL Y PW
	fetch("http://localhost:4000/api/v1/auth/login", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(user),
	})
		.then((response) => response.json())
		// DEVUELVE TOKEN
		.then((data) => {
			data.token ? setIsValidLogin(true) : setIsValidLogin(false);
			console.log(data);
		})
		.catch(() => console.log("Error"));
};
