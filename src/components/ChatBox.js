import { Box, Button, Container } from "@mui/material";
import React, { useState } from "react";
import Textfield from "./Textfield";

const ChatBox = ({ socket }) => {
	let initVal = { username: "", message: "" };
	const [userInput, setUserInput] = useState(initVal);

	const handleSendMessage = () => {};

	return (
		<Container component='main' maxWidth='sm'>
			<Box
				sx={{
					marginTop: 5,
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
				}}
				component='form'
				onSubmit={handleSendMessage}
				noValidate
				gap={2}>
				<Textfield
					name={`username`}
					label={`Name`}
					input={userInput}
					setInput={setUserInput}
				/>
				<Textfield
					name={`message`}
					label={`Message`}
					input={userInput}
					setInput={setUserInput}
				/>
				<Button
					size='large'
					type='submit'
					fullWidth
					variant='contained'
					//disabled={disableBtn}
				>
					Send message
				</Button>
			</Box>
		</Container>
	);
};

export default ChatBox;
