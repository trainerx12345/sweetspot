import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import STORAGE from './REDUX/store.js';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Provider store={STORAGE}>
				<App />
			</Provider>
		</BrowserRouter>
	</React.StrictMode>,
);
