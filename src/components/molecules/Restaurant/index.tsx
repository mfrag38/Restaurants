import React from 'react';
import { Image, Text, View } from 'react-native';
import ITag from '../../../models/ITag';
import styles from './styles';

const Restaurant = (props: any) => {
	const { restaurant } = props;

	return (
		<View style={styles.container}>
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
					{restaurant.tags.map((tag: ITag) => tag.name).join(', ')}
				</Text>
			</View>
		</View>
	);
};

export default Restaurant;
