import { createAction } from '@reduxjs/toolkit';
import { SET_SELECTED_TAG, SET_TAGS, SET_LIST } from '../types';

/**
 * It creates an action creator function that returns an action object with a type and a payload
 * @param {any} payload - any - this is the data that will be passed to the reducer.
 */
export const setSelectedTag = (payload: any) =>
	createAction(SET_SELECTED_TAG)(payload);

/**
 * It creates an action creator function that returns an action object with a type and a payload
 * @param {any} payload - any - this is the data that will be passed to the reducer.
 */
export const setTags = (payload: any) => createAction(SET_TAGS)(payload);

/**
 * It creates an action function that returns an action object with a type and a payload
 * @param {any} payload - any - The payload that will be passed to the reducer.
 */
export const setList = (payload: any) => createAction(SET_LIST)(payload);
