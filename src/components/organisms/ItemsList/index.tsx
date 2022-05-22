import React from 'react';
import { View, FlatList } from 'react-native';
import IItem from '../../../models/IItem';
import Item from '../../molecules/Item';
import styles from './styles';

const ItemsList = (props: any) => {
	const { data } = props;

	/**
	 * RenderItem is a function that takes an object with a property called item, which is of type IItem,
	 * and returns Item Component, which is passed the item property.
	 * @param  - `item` - The item to render.
	 * @returns A function that takes an object with a property called item and returns a component called
	 * Item with a prop called item.
	 */
	const RenderItem = ({ item }: { item: IItem }) => {
		return <Item item={item} />;
	};

	return (
		<View style={styles.container}>
			<FlatList
				data={data}
				renderItem={({ item }) => <RenderItem item={item} />}
				showsVerticalScrollIndicator={false}
			/>
		</View>
	);
};

export default ItemsList;
