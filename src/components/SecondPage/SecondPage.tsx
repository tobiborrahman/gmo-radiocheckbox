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
		<div>
			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<div style={{ height: 400, width: '80%', textAlign: 'center' }}>
					<h1>Data Grid Example</h1>

					<DataGrid rows={posts} columns={columns} />
				</div>
			</div>
			<div style={{ margin: '100px 0px' }}>
				<DepartmentList />
			</div>
		</div>
	);
};

export default SecondPage;
