export const emailValidation = (string, setEmailValid) => {
	const validRegex =
		/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+.+(?:\.[a-zA-Z0-9-]+)*$/;

	string.match(validRegex) ? setEmailValid(true) : setEmailValid(false);
};

export const passwordValidation = (string, setPasswordValid) => {
	const lowerCaseLetters = /[a-z]/g;
	const upperCaseLetters = /[A-Z]/g;
	const numbers = /[0-9]/g;

	string.match(lowerCaseLetters) !== null &&
	string.match(upperCaseLetters) !== null &&
	string.match(numbers) !== null &&
	string.length > 8
		? setPasswordValid(true)
		: setPasswordValid(false);
};

export const nameLastNameValidation = (string, setter) => {
	/^[a-zA-Z]+$/.test(string) ? setter(true) : setter(false);
};
