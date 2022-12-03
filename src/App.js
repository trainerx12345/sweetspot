import { Routes, Route, Link } from 'react-router-dom';
import * as React from 'react';

import ERROR_404 from './COMPONENTS/ERROR_404.js';
import LOGIN from './PAGES/CREDENTIALS/LOGIN.js';

import HOME from './PAGES/HOME.js';
import CLIENT from './PAGES/CLIENT.js';
import CLT_CHECKOUT from './COMPONENTS/CLT_PRODUCT_SUMMARY.js';
import CLT_CART from './COMPONENTS/CLT_CART.js';
import REGISTER from './PAGES/CREDENTIALS/REGISTER.js';
import ADMIN from './PAGES/ADMIN.js';
import CLT_PRODUCT_SUMMARY from './COMPONENTS/CLT_PRODUCT_SUMMARY.js';
import './COMPONENTS/style.css';

const App = () => {
	return (
		<main>
			<div></div>
			<Routes>
				<Route
					path='/'
					element={<HOME />}
				/>
				<Route
					path='/LOGIN'
					element={<LOGIN />}
				/>
				<Route
					path='/REGISTER'
					element={<REGISTER />}
				/>
				<Route
					path='/PRODUCTS'
					element={<CLIENT />}
				/>
				<Route
					path='/SUMMARY'
					element={<CLT_PRODUCT_SUMMARY />}
				/>
				<Route
					path='/CART'
					element={<CLT_CART />}
				/>
				<Route
					path='/CHECKOUT'
					element={<CLT_CHECKOUT />}
				/>
				<Route
					path='*'
					element={<ERROR_404 />}
				/>
			</Routes>
		</main>
	);
};
export default App;
