import { FormControl, OutlinedInput } from "@mui/material";
import React from "react";

const Textfield = ({ name, label, input, setInput }) => {
	const handleChange = (e) => {
		const { name, value } = e.target;
		setInput({ ...input, [name]: value });
	};

	return (
		<FormControl fullWidth variant='outlined'>
			<OutlinedInput
				required
				id='outlined-adornment-weight'
				name={name}
				placeholder={label}
				aria-describedby='outlined-weight-helper-text'
				inputProps={{
					"aria-label": "weight",
				}}
				value={input[name]}
				onChange={(e) => handleChange(e)}
			/>
		</FormControl>
	);
};

export default Textfield;
