import {
	Avatar,
	Box,
	Divider,
	List,
	ListItem,
	ListItemAvatar,
	ListItemText,
	Paper,
	Typography,
} from "@mui/material";
import React, { Fragment } from "react";

const NotifyList = ({ messageList }) => {
	return (
		<Box
			sx={{
				marginTop: 5,
				height: "100%",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
			}}>
			<Typography variant='h5' gutterBottom>
				{" "}
				Notifications{" "}
			</Typography>
			{messageList.length !== 0 ? (
				<List sx={{ width: "100%" }}>
					{messageList?.map((message, index) => (
						<Fragment key={index}>
							<ListItem alignItems='flex-start'>
								<ListItemAvatar>
									<Avatar alt='Remy Sharp'> {message?.username[0]}</Avatar>
								</ListItemAvatar>
								<ListItemText
									primary={message?.username}
									secondary={
										<Fragment>
											{" — "} {message?.content}
										</Fragment>
									}
								/>
							</ListItem>
							<Divider variant='inset' component='li' />
						</Fragment>
					))}
				</List>
			) : (
				<Typography variant='subtitle2' gutterBottom>
					{" "}
					No messages received
				</Typography>
			)}
		</Box>
	);
};

export default NotifyList;
