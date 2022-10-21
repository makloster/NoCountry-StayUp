export const GET_Locals_All = (token) => {
	// URL = IP:PORT PARA EXPO , LOCALHOST PARA WEB
	fetch(`http://URL/api/v1/locals`, {
		method: "GET",
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
			Authorization:
				"Bearer " +
				// TOKEN EX"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjY2MzA3NjMyLCJleHAiOjE2NjYzOTQwMzJ9.aLFgwKtdgNBSsDztQPuHHWxMuFOjsE_L4g82E6dasMw"
				token,
		},
	})
		.then((response) => response.json())
		.then((data) => console.log(data));
};
