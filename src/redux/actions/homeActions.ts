import { createAction } from '@reduxjs/toolkit';
import { SET_SELECTED_TAG, SET_LIST } from '../types';

export const setSelectedTag = (payload: any) =>
	createAction(SET_SELECTED_TAG)(payload);

export const setList = (payload: any) => createAction(SET_LIST)(payload);
