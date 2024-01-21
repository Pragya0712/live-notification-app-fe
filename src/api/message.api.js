const socketURL = process.env.REACT_APP_SOCKET_URL;
export const createMessage = async (userInput) => {
	const response = await fetch(`${socketURL}/message`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(userInput),
	});
	return response;
};
