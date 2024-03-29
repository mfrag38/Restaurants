import React from 'react';
import { View, Text, Image } from 'react-native';
import IItem from '../../../models/IItem';
import styles from './styles';

/**
 * This function takes in an item object and returns a view with an image and some texts.
 * @param {any} props - any
 * @returns A React component.
 */
const Item = (props: any) => {
	const { item }: { item: IItem } = props;

	return (
		<View style={styles.container}>
			<View style={styles.itemInfoContainer}>
				<Text style={styles.itemTitleText}>{item.name}</Text>
				<Text style={styles.itemSubTitleText}>{item.description}</Text>
				<Text style={styles.itemPriceText}>{item.price}</Text>
			</View>
			<View style={styles.itemImageContainer}>
				<Image
					source={{ uri: item.image }}
					resizeMode='contain'
					style={styles.itemImage}
				/>
			</View>
		</View>
	);
};

export default Item;
