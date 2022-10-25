export const GET_User_By_Id = (id) => {
	let friend = {};
	// URL = IP:PORT PARA EXPO , LOCALHOST PARA WEB
	fetch(`https://stayup-back.herokuapp.com/api/v1/users/${id}`)
		.then((response) => response.json())
		.then((data) => (friend = data.message));

	return friend;
};
