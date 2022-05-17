import React from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import Header from '../../components/Header';
import {
	handleDecrement,
	handleIncrement,
	selectMyNum,
} from '../../features/myReducer/mySlice';

import { Button } from 'antd';

const Dashboard = () => {
	const dispatch = useAppDispatch();
	const myNum = useAppSelector(selectMyNum);
	return (
		<>
			<Header />
			<div style={{ marginLeft: '2rem' }}>
				<h1>Hello World!</h1>
				<span style={{ display: 'flex' }}>
					<Button type="primary" onClick={() => dispatch(handleDecrement())}> - </Button>
					<h1>{myNum}</h1>
					<Button type="primary" onClick={() => dispatch(handleIncrement())}> + </Button>
				</span>
			</div>
		</>
	);
};

export default Dashboard;
