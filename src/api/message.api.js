export const createMessage = async (userInput) => {
	const response = await fetch("http://localhost:4000/message", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(userInput),
	});
	return response;
};
