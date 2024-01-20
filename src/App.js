import { Fragment, useEffect, useState } from "react";
import io from "socket.io-client";
import ChatBox from "./components/ChatBox";
import Header from "./components/Header";

const socketURL = process.env.REACT_APP_SOCKET_URL;

function App() {
	const [socket, setSocket] = useState();

	useEffect(() => {
		const newSocket = io.connect(socketURL);
		setSocket(newSocket);
		return () => {
			newSocket.disconnect();
		};
	}, []);

	return (
		<Fragment>
			<Header title={`Live chatbox`} />
			<ChatBox socket={socket} />
		</Fragment>
	);
}

export default App;
