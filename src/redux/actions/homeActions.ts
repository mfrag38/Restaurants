import { createAction } from '@reduxjs/toolkit';
import { SET_SELECTED_TAG, SET_TAGS, SET_LIST } from '../types';

export const setSelectedTag = (payload: any) =>
	createAction(SET_SELECTED_TAG)(payload);

export const setTags = (payload: any) => createAction(SET_TAGS)(payload);

export const setList = (payload: any) => createAction(SET_LIST)(payload);
