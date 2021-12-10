import React from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import Header from '../../components/Header';
import {
	handleDecrement,
	handleIncrement,
	selectMyNum,
} from '../../features/myReducer/mySlice';

const Dashboard = () => {
	const dispatch = useAppDispatch();
	const myNum = useAppSelector(selectMyNum);
	return (
		<>
			<Header />
			<div style={{ marginLeft: '2rem' }}>
				<h1>Hello World!</h1>
				<span style={{ display: 'flex' }}>
					<button style={{ padding: '1rem' }} onClick={() => dispatch(handleDecrement())}>
						-
					</button>
					<h1>{myNum}</h1>
					<button style={{ padding: '1rem' }} onClick={() => dispatch(handleIncrement())}>
						+
					</button>
				</span>
			</div>
		</>
	);
};

export default Dashboard;
