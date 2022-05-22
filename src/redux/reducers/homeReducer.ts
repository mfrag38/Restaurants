import { createReducer } from '@reduxjs/toolkit';
import { SET_SELECTED_TAG, SET_TAGS, SET_LIST } from '../types';

/* Creating a reducer. */
export default createReducer(
	{
		selectedTag: '',
		tags: [],
		list: [],
	},
	(builder) => {
		builder.addCase(SET_SELECTED_TAG, (state, action: any) => {
			state.selectedTag = action.payload;
		});
		builder.addCase(SET_TAGS, (state, action: any) => {
			state.tags = action.payload;
		});
		builder.addCase(SET_LIST, (state, action: any) => {
			state.list = action.payload;
		});
	},
);
