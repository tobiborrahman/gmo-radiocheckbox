import React, { useState } from 'react';
import { Button, FormControl, InputLabel, Input } from '@mui/material';
import { useNavigate } from 'react-router-dom';

interface UserDetails {
	name: string;
	phoneNumber: string;
	email: string;
}

const FirstPage: React.FC = () => {
	const navigate = useNavigate();
	const [userDetails, setUserDetails] = useState<UserDetails>({
		name: '',
		phoneNumber: '',
		email: '',
	});

	const handleSubmit = () => {
		if (userDetails.name && userDetails.phoneNumber && userDetails.email) {
			localStorage.setItem('userDetails', JSON.stringify(userDetails));
			navigate('/second-page');
		} else {
			alert('Please enter all details before proceeding.');
		}
	};

	return (
		<div style={{ background: '#E44C2A' }}>
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
						// border: '1px solid black',
						boxShadow: '0 0 50px 0 rgba(0,0,0,0.3)',
						padding: '50px',
						textAlign: 'center',
						borderRadius: '10px',
						backgroundColor: 'bisque',
						width: '30%',
					}}
				>
					<h2>Welcome to Grow Me Organic</h2>
					<p>Please fill the form to select departments</p>
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
						<InputLabel htmlFor="phoneNumber">
							Phone Number
						</InputLabel>
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
		</div>
	);
};

export default FirstPage;
