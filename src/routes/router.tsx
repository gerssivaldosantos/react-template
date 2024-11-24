import Home from 'pages/home';
import HomeError from 'pages/home/error';
import NotFound from 'pages/not-found';
import Signup from 'pages/signup';
import SignupError from 'pages/signup/error';
import { Private, Public } from 'providers/auth';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import routes from 'routes';
import Auth from 'templates/auth';

const router = createBrowserRouter([
	{
		element: <Public />,
		children: [
			{
				index: true,
				path: routes.home.base,
				element: <Home />,
				errorElement: <HomeError />
			},
			{
				element: <Auth />,
				children: [
					{
						path: routes.auth.signup.base,
						element: <Signup />,
						errorElement: <SignupError />
					}
				]
			}
		]
	},
	{
		element: <Private />
	},
	{
		path: '*',
		element: <NotFound />
	}
]);

export default function Router() {
	return <RouterProvider router={router} />;
}
