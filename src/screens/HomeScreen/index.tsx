import React from 'react';
import { View, Text, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import restaurants from '../../data/restaurants.json';
import tags from '../../data/tags.json';
import TagsList from '../../components/organisms/TagsList';
import RestaurantsList from '../../components/organisms/RestaurantsList';
import styles from './styles';

const HomeScreen = (props: any) => {
	const { container } = styles;

	return (
		<View style={container}>
			<View style={styles.headerContainer}>
				<View style={styles.headerSubContainer}>
					<View style={styles.headerIconContainer}>
						<Icon name='magnify' size={24} color='#888' />
					</View>
					<View style={styles.headerInputContainer}>
						<TextInput
							placeholder='What would you like to buy?'
							style={styles.headerInput}
						/>
					</View>
				</View>
			</View>
			<TagsList data={tags} />
			<View style={styles.body}>
				<View style={styles.bodyTitleContainer}>
					<Text style={styles.bodyTitle}>Restaurants</Text>
				</View>
				<RestaurantsList data={restaurants.brands} />
			</View>
		</View>
	);
};

export default HomeScreen;
