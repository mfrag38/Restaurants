import { brands } from '../data/restaurants.json';
import tags from '../data/tags.json';

/**
 * It simulates the fetch restaurants process from an API
 * @returns An array of objects.
 */
export const getRestaurants = () => {
	return brands;
};

/**
 * It simulates the fetch tags process from an API
 * @returns An array of objects.
 */
export const getTags = () => {
	return tags;
};
