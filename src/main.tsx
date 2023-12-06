import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import FirstPage from './App';
import SecondPage from './components/SecondPage/SecondPage';

const router = createBrowserRouter([
	{
		path: '/',
		element: <FirstPage />,
	},
	{
		path: '/second-page',
		element: <SecondPage />,
	},
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
