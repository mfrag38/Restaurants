import { combineReducers } from '@reduxjs/toolkit';
import homeReducer from './homeReducer';

export default combineReducers({
	Home: homeReducer,
});
