import React from 'react';
import { View, FlatList } from 'react-native';
import IRestaurant from '../../../models/IRestaurant';
import Restaurant from '../../molecules/Restaurant';
import styles from './styles';

const RestaurantsList = (props: any) => {
	const { data } = props;

	const RenderRestaurant = ({ restaurant }: { restaurant: IRestaurant }) => {
		return <Restaurant restaurant={restaurant} />;
	};

	return (
		<View style={styles.container}>
			<FlatList
				data={data}
				renderItem={({ item }) => (
					<RenderRestaurant restaurant={item} />
				)}
			/>
		</View>
	);
};

export default RestaurantsList;