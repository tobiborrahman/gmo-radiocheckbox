// import React, { useState } from 'react';
// import {
// 	List,
// 	ListItem,
// 	ListItemText,
// 	Collapse,
// 	Checkbox,
// 	IconButton,
// } from '@mui/material';
// import { ExpandLess, ExpandMore } from '@mui/icons-material';

// // Sample hardcoded JSON data in the required format
// const departmentData = [
// 	{
// 		id: 1,
// 		name: 'Department 1',
// 		subDepartments: [
// 			{ id: 11, name: 'Sub Department 1.1' },
// 			{ id: 12, name: 'Sub Department 1.2' },
// 		],
// 	},
// 	{
// 		id: 2,
// 		name: 'Department 2',
// 		subDepartments: [
// 			{ id: 21, name: 'Sub Department 2.1' },
// 			{ id: 22, name: 'Sub Department 2.2' },
// 		],
// 	},
// ];

// // Define the DepartmentList component
// const DepartmentList: React.FC = () => {
// 	const [selectedItems, setSelectedItems] = useState<number[]>([]);
// 	const [expandedItems, setExpandedItems] = useState<number[]>([]);

// 	const handleToggle = (id: number) => {
// 		setExpandedItems((prevExpanded) =>
// 			prevExpanded.includes(id)
// 				? prevExpanded.filter((item) => item !== id)
// 				: [...prevExpanded, id]
// 		);
// 	};

// 	const handleSelect = (id: number, isDepartment: boolean) => {
// 		if (isDepartment) {
// 			const selectedSubDepartments =
// 				departmentData
// 					.find((dept) => dept.id === id)
// 					?.subDepartments.map((subDept) => subDept.id) || [];
// 			setSelectedItems((prevSelected) =>
// 				prevSelected.includes(id)
// 					? prevSelected.filter(
// 							(item) => !selectedSubDepartments.includes(item)
// 					  )
// 					: [...prevSelected, id, ...selectedSubDepartments]
// 			);
// 		} else {
// 			setSelectedItems((prevSelected) =>
// 				prevSelected.includes(id)
// 					? prevSelected.filter((item) => item !== id)
// 					: [...prevSelected, id]
// 			);
// 		}
// 	};

// 	const renderSubDepartment = (subDept: any) => (
// 		<ListItem key={subDept.id} sx={{ pl: 4 }}>
// 			<Checkbox
// 				edge="start"
// 				checked={selectedItems.includes(subDept.id)}
// 				tabIndex={-1}
// 				disableRipple
// 				onClick={() => handleSelect(subDept.id, false)}
// 			/>
// 			<ListItemText primary={subDept.name} />
// 		</ListItem>
// 	);

// 	const renderItem = (department: any) => (
// 		<React.Fragment key={department.id}>
// 			<ListItem>
// 				<Checkbox
// 					edge="start"
// 					checked={selectedItems.includes(department.id)}
// 					indeterminate={department.subDepartments.some(
// 						(subDept: any) => selectedItems.includes(subDept.id)
// 					)}
// 					onChange={() => handleSelect(department.id, true)}
// 				/>
// 				<ListItemText primary={department.name} />
// 				<IconButton onClick={() => handleToggle(department.id)}>
// 					{expandedItems.includes(department.id) ? (
// 						<ExpandLess />
// 					) : (
// 						<ExpandMore />
// 					)}
// 				</IconButton>
// 			</ListItem>
// 			<Collapse
// 				in={expandedItems.includes(department.id)}
// 				timeout="auto"
// 				unmountOnExit
// 			>
// 				<List component="div" disablePadding>
// 					{department.subDepartments.map((subDept: any) =>
// 						renderSubDepartment(subDept)
// 					)}
// 				</List>
// 			</Collapse>
// 		</React.Fragment>
// 	);

// 	return (
// 		<List>
// 			{departmentData.map((department) => renderItem(department))}
// 		</List>
// 	);
// };

// export default DepartmentList;

////////////////////////////////////////////////////////////////////////////////////////////////
import React, { useState } from 'react';
import {
	List,
	ListItem,
	ListItemText,
	Collapse,
	Checkbox,
	IconButton,
} from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';

// Sample hardcoded JSON data in the required format
const departmentData = [
	{
		id: 1,
		name: 'customer_service',
		subDepartments: [
			{ id: 11, name: 'support' },
			{ id: 12, name: 'customer_success' },
		],
	},
	{
		id: 2,
		name: 'design',
		subDepartments: [
			{ id: 21, name: 'graphic_design' },
			{ id: 22, name: 'product_design' },
			{ id: 23, name: 'web_design' },
		],
	},
];

// Define the DepartmentList component
const DepartmentList: React.FC = () => {
	const [selectedItems, setSelectedItems] = useState<number[]>([]);
	const [expandedItems, setExpandedItems] = useState<number[]>([]);

	const handleToggle = (id: number) => {
		setExpandedItems((prevExpanded) =>
			prevExpanded.includes(id)
				? prevExpanded.filter((item) => item !== id)
				: [...prevExpanded, id]
		);
	};

	const handleSelect = (id: number, isDepartment: boolean) => {
		if (isDepartment) {
			const selectedSubDepartments =
				departmentData
					.find((dept) => dept.id === id)
					?.subDepartments.map((subDept) => subDept.id) || [];
			setSelectedItems((prevSelected) => {
				if (prevSelected.includes(id)) {
					return prevSelected.filter(
						(item) => !selectedSubDepartments.includes(item)
					);
				} else {
					return [...prevSelected, id, ...selectedSubDepartments];
				}
			});
		} else {
			setSelectedItems((prevSelected) =>
				prevSelected.includes(id)
					? prevSelected.filter((item) => item !== id)
					: [...prevSelected, id]
			);
		}
	};

	const renderSubDepartment = (subDept: any) => (
		<ListItem key={subDept.id} sx={{ pl: 4 }}>
			<Checkbox
				edge="start"
				checked={selectedItems.includes(subDept.id)}
				tabIndex={-1}
				disableRipple
				onClick={() => handleSelect(subDept.id, false)}
			/>
			<ListItemText primary={subDept.name} />
		</ListItem>
	);

	const renderItem = (department: any) => (
		<React.Fragment key={department.id}>
			<ListItem>
				<Checkbox
					edge="start"
					checked={selectedItems.includes(department.id)}
					indeterminate={department.subDepartments.some(
						(subDept: any) => selectedItems.includes(subDept.id)
					)}
					onChange={() => handleSelect(department.id, true)}
				/>
				<ListItemText primary={department.name} />
				<IconButton onClick={() => handleToggle(department.id)}>
					{expandedItems.includes(department.id) ? (
						<ExpandLess />
					) : (
						<ExpandMore />
					)}
				</IconButton>
			</ListItem>
			<Collapse
				in={expandedItems.includes(department.id)}
				timeout="auto"
				unmountOnExit
			>
				<List component="div" disablePadding>
					{department.subDepartments.map((subDept: any) =>
						renderSubDepartment(subDept)
					)}
				</List>
			</Collapse>
		</React.Fragment>
	);

	return (
		<div>
			<h1
				style={{
					fontSize: '35px',
					fontWeight: 'bold',
					textAlign: 'center',
				}}
			>
				Select Your desired departments and Sub-departments
			</h1>
			<List style={{ marginLeft: '107px', width: '300px' }}>
				{departmentData.map((department) => renderItem(department))}
			</List>
		</div>
	);
};

export default DepartmentList;
