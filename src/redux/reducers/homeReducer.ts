import { createReducer } from '@reduxjs/toolkit';
import { SET_SELECTED_TAG, SET_LIST } from '../types';
import { brands } from '../../data/restaurants.json';

export default createReducer(
	{
		selectedTag: '',
		list: brands,
	},
	(builder) => {
		builder.addCase(SET_SELECTED_TAG, (state, action: any) => {
			state.selectedTag = action.payload;
		});
		builder.addCase(SET_LIST, (state, action: any) => {
			state.list = action.payload;
		});
	},
);
