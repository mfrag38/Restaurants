import React from 'react';
import { Image, Text, View, TouchableOpacity } from 'react-native';
import ITag from '../../../models/ITag';
import styles from './styles';

const Restaurant = (props: any) => {
	const { restaurant, onRestaurantPress } = props;

	return (
		<View style={styles.container}>
			<TouchableOpacity
				style={styles.buttonContainer}
				onPress={onRestaurantPress}
			>
				<View style={styles.imageContainer}>
					<Image
						source={{ uri: restaurant.logo }}
						resizeMode='contain'
						style={styles.image}
					/>
				</View>
				<View style={styles.textInfoContainer}>
					<Text style={styles.titleText}>{restaurant.name}</Text>
					<Text style={styles.subTitleText}>
						{restaurant.tags
							.map((tag: ITag) => tag.name)
							.join(', ')}
					</Text>
				</View>
			</TouchableOpacity>
		</View>
	);
};

export default Restaurant;
