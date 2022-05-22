import React from 'react';
import { View, FlatList } from 'react-native';
import IRestaurant from '../../../models/IRestaurant';
import Restaurant from '../../molecules/Restaurant';
import styles from './styles';

const RestaurantsList = (props: any) => {
	const { data, navigation } = props;

	/**
	 * RenderRestaurant is a function that takes in a restaurant object and returns a Restaurant component
	 * with the restaurant object passed in as a prop.
	 * @param  - { restaurant: IRestaurant }
	 * @returns A function that returns a component.
	 */
	const RenderRestaurant = ({ restaurant }: { restaurant: IRestaurant }) => {
		return (
			<Restaurant
				restaurant={restaurant}
				onRestaurantPress={() =>
					navigation.navigate('Details', {
						restaurant: restaurant,
					})
				}
			/>
		);
	};

	return (
		<View style={styles.container}>
			<FlatList
				data={data}
				renderItem={({ item }) => (
					<RenderRestaurant restaurant={item} />
				)}
				showsVerticalScrollIndicator={false}
			/>
		</View>
	);
};

export default RestaurantsList;
