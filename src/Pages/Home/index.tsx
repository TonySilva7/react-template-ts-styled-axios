import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { getMyData, selectStatus, selectUser } from '../../features/myReducer/mySlice';

const Home = () => {
	const dispatch = useAppDispatch();
	const user = useAppSelector(selectUser);
	const status = useAppSelector(selectStatus);

	useEffect(() => {
		toast.success('Welcome to the app!', {
			position: toast.POSITION.TOP_RIGHT,
		});
	}, []);

	useEffect(() => {
		dispatch(getMyData('users/TonySilva7'));
	}, [dispatch]);

	return (
		<div>
			<h1>Home</h1>
			{status === 'pending' ? (
				<p>Loading...</p>
			) : (
				<div>
					<p>ID: {user.id}</p>
					<p>Nome: {user.name}</p>
					<p>URL: {user.url}</p>
				</div>
			)}
		</div>
	);
};

export default Home;
