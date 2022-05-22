import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';

/* Creating a store with the rootReducer. */
const store = configureStore({
	reducer: rootReducer,
});

export default store;
