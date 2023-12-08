import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import DepartmentList from './Departments';

interface Post {
	userId: number;
	id: number;
	title: string;
	body: string;
}

const SecondPage: React.FC = () => {
	const [posts, setPosts] = useState<Post[]>([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(
					'https://jsonplaceholder.typicode.com/posts'
				);
				setPosts(response.data);
			} catch (error) {
				console.error('Error fetching data:', error);
			}
		};

		fetchData();
	}, []);

	const columns: GridColDef[] = [
		{ field: 'id', headerName: 'ID', width: 50 },
		{ field: 'title', headerName: 'Title', width: 200 },
		{ field: 'body', headerName: 'Body', width: 700 },
	];

	return (
		<div
			style={{
				padding: '100px 0',
				background: '#E44C2A',
				color: 'white',
			}}
		>
			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<div style={{ height: 400, width: '80%', textAlign: 'center' }}>
					<h1
						style={{
							fontSize: '35px',
							fontWeight: 'bold',
							padding: '20px 0',
						}}
					>
						Data Grid Example
					</h1>

					<DataGrid
						style={{ color: 'white' }}
						rows={posts}
						columns={columns}
					/>
				</div>
			</div>
			<div style={{ margin: '200px 0px' }}>
				<DepartmentList />
			</div>
		</div>
	);
};

export default SecondPage;
