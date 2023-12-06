import React, { useState } from 'react';
import { Button, FormControl, InputLabel, Input } from '@mui/material';
import { useNavigate } from 'react-router-dom';

// Define the interface for user details
interface UserDetails {
	name: string;
	phoneNumber: string;
	email: string;
}

// Define the FirstPage component
const FirstPage: React.FC = () => {
	const navigate = useNavigate();
	const [userDetails, setUserDetails] = useState<UserDetails>({
		name: '',
		phoneNumber: '',
		email: '',
	});

	// Handle form submission
	const handleSubmit = () => {
		// Validate if all fields are filled
		if (userDetails.name && userDetails.phoneNumber && userDetails.email) {
			// Save user details in local storage
			localStorage.setItem('userDetails', JSON.stringify(userDetails));
			// Redirect to the second page
			navigate('/second-page');
		} else {
			// Show error message or handle it in your way
			alert('Please enter all details before proceeding.');
		}
	};

	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				width: '100%',
				height: '100vh',
			}}
		>
			<div
				style={{
					border: '1px solid black',
					padding: '50px',
					textAlign: 'center',
					borderRadius: '10px',
					backgroundColor: 'bisque',
					width: '30%',
				}}
			>
				<h1>User Details Form</h1>
				<FormControl fullWidth={true}>
					<InputLabel htmlFor="name">Name</InputLabel>
					<Input
						id="name"
						value={userDetails.name}
						onChange={(e) =>
							setUserDetails({
								...userDetails,
								name: e.target.value,
							})
						}
					/>
				</FormControl>
				<br />
				<FormControl fullWidth={true}>
					<InputLabel htmlFor="phoneNumber">Phone Number</InputLabel>
					<Input
						id="phoneNumber"
						value={userDetails.phoneNumber}
						onChange={(e) =>
							setUserDetails({
								...userDetails,
								phoneNumber: e.target.value,
							})
						}
					/>
				</FormControl>
				<br />
				<FormControl fullWidth={true}>
					<InputLabel htmlFor="email">Email</InputLabel>
					<Input
						id="email"
						value={userDetails.email}
						onChange={(e) =>
							setUserDetails({
								...userDetails,
								email: e.target.value,
							})
						}
					/>
				</FormControl>
				<br />
				<Button
					style={{ margin: '20px 0' }}
					variant="contained"
					onClick={handleSubmit}
				>
					Submit
				</Button>
			</div>
		</div>
	);
};

export default FirstPage;
