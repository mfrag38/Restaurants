import React from 'react';
import { View, Text, TextInput, FlatList, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import restaurants from '../../data/restaurants.json';
import tags from '../../data/tags.json';
import IRestaurant from '../../models/IRestaurant';
import ITag from '../../models/ITag';
import styles from './styles';

const HomeScreen = (props: any) => {
	const RenderTag = ({ tag }: { tag: ITag }) => {
		return (
			<View style={styles.tagContainer}>
				<Image
					source={{ uri: tag.image }}
					resizeMode='contain'
					style={styles.tagImage}
				/>
				<View style={styles.tagTextContainer}>
					<Text style={styles.tagText}>{tag.name}</Text>
				</View>
			</View>
		);
	};

	const RenderRestaurant = ({ restaurant }: { restaurant: IRestaurant }) => {
		return (
			<View style={styles.restaurantContainer}>
				<View style={styles.restaurantImageContainer}>
					<Image
						source={{ uri: restaurant.logo }}
						resizeMode='contain'
						style={styles.restaurantImage}
					/>
				</View>
				<View style={styles.restaurantTextInfoContainer}>
					<Text style={styles.restaurantTitleText}>
						{restaurant.name}
					</Text>
					<Text style={styles.restaurantSubTitleText}>
						{restaurant.tags
							.map((tag: ITag) => tag.name)
							.join(', ')}
					</Text>
				</View>
			</View>
		);
	};

	return (
		<View style={styles.container}>
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
			<View style={styles.tagsListContainer}>
				<FlatList
					data={tags}
					renderItem={({ item }) => <RenderTag tag={item} />}
					horizontal
				/>
			</View>
			<View style={styles.body}>
				<View style={styles.bodyTitleContainer}>
					<Text style={styles.bodyTitle}>Restaurants</Text>
				</View>
				<View style={styles.restaurantsListContainer}>
					<FlatList
						data={restaurants.brands}
						renderItem={({ item }) => (
							<RenderRestaurant restaurant={item} />
						)}
					/>
				</View>
			</View>
		</View>
	);
};

export default HomeScreen;
