import React, { lazy, Suspense, useContext, useState } from 'react';
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
import CartContext from './utils/CartContext';

const Profile = lazy(() => import('./pages/Profile'));
const About = lazy(() => import('./pages/About'));

const AppLayout = () => {
	const [cartDetails, setCartDetails] = useState({
		totalItems: 1,
		itemDetails: [
			{
				name: '8" Paneer Chilli Pizza',
				cloudinaryImageId: '',
				category: 'Pizza',
				restaurantImg: 'j96lxqkk5lnzozglztvw',
				price: '20000',
				vegClassifier: 'VEG',
			},
		],
	});

	return (
		<CartContext.Provider
			value={{
				cartDetails: cartDetails,
				setCartDetails: setCartDetails,
			}}>
			<Header />
			<Outlet />
			<Footer />
		</CartContext.Provider>
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
