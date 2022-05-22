import { combineReducers } from '@reduxjs/toolkit';
import homeReducer from './homeReducer';

/* Exporting the combined reducer. */
export default combineReducers({
	Home: homeReducer,
});
