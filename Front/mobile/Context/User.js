import { createContext, useEffect, useState } from "react";
import { GET_User_By_Id } from "../api/GET_User_By_Id";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
	const [user, setUser] = useState({});
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [avatar, setAvatar] = useState("");
	const [description, setDescription] = useState("");
	const [hobbies, setHobbies] = useState("");
	const [status, setStatus] = useState("");
	const [friendsId, setFriendsId] = useState([]);
	const [friends, setFriends] = useState([]);
	const [personality, setPersonality] = useState();
	const [token, setToken] = useState("");
	const [isGuest, setIsGuest] = useState(false);

	useEffect(() => {
		user.token && setListFriends();
	}, [user]);

	const saveUserData = (userLogged) => {
		setFirstName(userLogged.user.firstName);
		setLastName(userLogged.user.lastName);
		setEmail(userLogged.user.email);
		setAvatar(userLogged.user.avatarUrl);
		setDescription(userLogged.user.description);
		setHobbies(userLogged.user.hobbies);
		setStatus(userLogged.user.status);
		setFriendsId(userLogged.user.friends);
		setPersonality(userLogged.user.personality);
		setToken(userLogged.token);
		setIsGuest(false);
		setUser(userLogged);
	};

	const isUserGuest = () => {
		setIsGuest(true);
	};

	const logOutUser = () => {
		setFirstName("");
		setLastName("");
		setEmail("");
		setToken("");
		setUser({});
		setIsGuest(false);
	};

	const setListFriends = () => {
		friendsId?.map((id) => setFriends([...friends, GET_User_By_Id(id)]));
	};

	return (
		<UserContext.Provider
			value={{
				saveUserData,
				user,
				firstName,
				lastName,
				email,
				avatar,
				description,
				hobbies,
				status,
				friends,
				personality,
				token,
				setToken,
				isGuest,
				isUserGuest,
				logOutUser,
			}}>
			{children}
		</UserContext.Provider>
	);
};
