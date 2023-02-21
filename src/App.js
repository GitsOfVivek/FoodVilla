import React, { lazy, Suspense } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Error from './pages/Error';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import RestaurantMenu from './pages/RestaurantMenu';
import './App.css';

const Profile = lazy(() => import('./pages/Profile'));
const About = lazy(() => import('./pages/About'));

const AppLayout = () => {
	return (
		<>
			<Header />
			<Outlet />
			<Footer />
		</>
	);
};

const appRouter = createBrowserRouter([
	{
		path: '/',
		element: <AppLayout />,
		errorElement: <Error />,
		children: [
			{
				path: '/',
				element: <Main />,
			},
			{
				path: '/about',
				element: (
					<Suspense fallback={<h1>About is Loading...</h1>}>
						<About />
					</Suspense>
				),
			},
			{
				path: '/services',
				element: <Services />,
			},
			{
				path: '/contact',
				element: <Contact />,
			},
			{
				path: '/cart',
				element: <Cart />,
			},
			{
				path: '/login',
				element: <Login />,
			},
			{
				path: '/signup',
				element: <SignUp />,
			},
			{
				path: '/profile',
				element: (
					<Suspense fallback={<h1>Profile Loading...</h1>}>
						<Profile />
					</Suspense>
				),
			},
			{
				path: '/restaurant/:id',
				element: <RestaurantMenu />,
			},
		],
	},
]);

const App = () => {
	return <RouterProvider router={appRouter} />;
};
export default App;
