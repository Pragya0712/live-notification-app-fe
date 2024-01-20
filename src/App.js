import { Fragment, useEffect, useState } from "react";
import io from "socket.io-client";
import ChatBox from "./components/ChatBox";
import Header from "./components/Header";
import NotifyList from "./components/NotifyList";
import { Container, Grid } from "@mui/material";

const socketURL = process.env.REACT_APP_SOCKET_URL;

function App() {
	const [socket, setSocket] = useState();
	const [messagesRecieved, setMessagesReceived] = useState([]);

	useEffect(() => {
		// Creating new socket connection
		const newSocket = io.connect(socketURL);
		setSocket(newSocket);
		return () => {
			newSocket.disconnect();
		};
	}, []);

	useEffect(() => {
		if (!socket) return;
		//Handling custom event to receive messages
		socket.on("message", (data) => {
			setMessagesReceived((state) => [
				...state,
				{
					content: data.message,
					username: data.username,
				},
			]);
		});

		// Remove event listener on component unmount
		return () => socket.off("message");
	}, [socket]);
	return (
		<Fragment>
			<Header title={`Live chatbox`} />
			<Container component='main' maxWidth='lg'>
				<Grid container spacing={2}>
					<Grid item xs={4}>
						<ChatBox
							socket={socket}
							setMessagesReceived={setMessagesReceived}
						/>
					</Grid>
					<Grid item xs={8}>
						{" "}
						<NotifyList messageList={messagesRecieved} />
					</Grid>
				</Grid>
			</Container>
		</Fragment>
	);
}

export default App;
