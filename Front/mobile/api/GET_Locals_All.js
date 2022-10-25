export const GET_Locals_All = (userToken, setter) => {
	// URL = IP:PORT PARA EXPO , LOCALHOST PARA WEB
	fetch(`http://stayup-back.herokuapp.com/api/v1/locals`, {
		method: "GET",
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
			Authorization:
				"Bearer " +
				// TOKEN EX"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjY2NjMxMzM5LCJleHAiOjE2NjY3MTc3Mzl9.n4STevVl3vBgscJPNu-yEfWxbNFcV2zyDxk5XheQR28"
				"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjY2NjMxMzM5LCJleHAiOjE2NjY3MTc3Mzl9.n4STevVl3vBgscJPNu-yEfWxbNFcV2zyDxk5XheQR28",
		},
	})
		.then((response) => response.json())
		.then((data) => setter(data));
};
