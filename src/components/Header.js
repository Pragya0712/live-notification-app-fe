import React from "react";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";

const Header = ({ title }) => {
	return (
		<AppBar position='static'>
			<Toolbar variant='dense'>
				<IconButton
					edge='start'
					color='inherit'
					aria-label='menu'
					sx={{ mr: 1 }}>
					<ChatIcon />
				</IconButton>
				<Typography variant='h5' color='inherit' component='div'>
					{title}
				</Typography>
			</Toolbar>
		</AppBar>
	);
};

export default Header;
