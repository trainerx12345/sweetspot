import { configureStore } from '@reduxjs/toolkit';


import REDUCER from './reducer.js'
const store = configureStore({reducer:REDUCER});

export default store; 

