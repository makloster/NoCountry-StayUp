export const GET_Local_By_Id = (id) => {
	// URL = IP:PORT PARA EXPO , LOCALHOST PARA WEB
	fetch(`http://URL/api/v1/locals/${id}`)
		.then((response) => response.json())
		.then((data) => console.log(data.message));
};
