export const POST_CreateUser = (user, setUserCorrect) => {
	console.log("entra");
	fetch("http://localhost:4000/api/v1/auth/sign-up", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(user),
	})
		.then((response) => response.json())
		.then((data) =>
			data ===
			"llave duplicada viola restricción de unicidad «users_email_key»"
				? setUserCorrect(false)
				: setUserCorrect(true)
		);
};
