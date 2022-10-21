export const POST_CreateUser = (user, setUserCorrect) => {
	// URL = IP:PORT PARA EXPO , LOCALHOST PARA WEB
	fetch("http://URL/api/v1/auth/sign-up", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(user),
	})
		.then((response) => response.json())
		.then((data) =>
			data.error ? setUserCorrect(false) : setUserCorrect(true)
		);
};
