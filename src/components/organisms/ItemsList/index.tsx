import React from 'react';
import { View, FlatList } from 'react-native';
import IItem from '../../../models/IItem';
import Item from '../../molecules/Item';
import styles from './styles';

const ItemsList = (props: any) => {
	const { data } = props;

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
