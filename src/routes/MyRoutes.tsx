import { Redirect, Route } from 'react-router-dom';

interface MyRouteProps {
	component: any;
	path: string;
	exact?: boolean;
}

export default function MyRoutes({ component: Component, ...rest }: MyRouteProps) {
	const isLoggedIn = false;
	return (
		<Route
			{...rest}
			render={(props) =>
				isLoggedIn ? (
					<Component {...props} />
				) : (
					<Redirect to={{ pathname: '/', state: { from: props.location } }} />
				)
			}
		/>
	);
}
