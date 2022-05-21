import React from 'react';
import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import restaurants from '../../data/restaurants.json';
import styles from './styles';

const restaurant = restaurants.brands[0];

const DetailsScreen = (props: any) => {
	const RenderItem = ({ item }: { item: any }) => {
		return (
			<View style={styles.itemContainer}>
				<View style={styles.itemInfoContainer}>
					<Text style={styles.itemTitleText}>{item.name}</Text>
					<Text style={styles.itemSubTitleText}>
						{item.description}
					</Text>
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

	return (
		<View style={styles.container}>
			<View style={styles.headerContainer}>
				<Image
					source={{ uri: restaurant.logo }}
					resizeMode='cover'
					style={styles.headerImage}
				/>
				<View style={styles.backButtonContainer}>
					<TouchableOpacity
						style={styles.backButton}
						onPress={() => console.log('Should Go Back')}
					>
						<Icon name='chevron-left' size={24} color='#000' />
					</TouchableOpacity>
				</View>
				<View style={styles.branchesButtonContainer}>
					<TouchableOpacity
						style={styles.branchesButton}
						onPress={() => console.log('Should Show Bottom Sheet')}
					>
						<Icon name='map-marker' size={24} color='#000' />
						<Text style={styles.branchesText}>Branches</Text>
					</TouchableOpacity>
				</View>
			</View>
			<View style={styles.restaurantInfoContainer}>
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
						{restaurant.tags.map((tag) => tag.name).join(', ')}
					</Text>
				</View>
			</View>
			<View style={styles.itemsListContainer}>
				<FlatList
					data={restaurant.items}
					renderItem={({ item }) => <RenderItem item={item} />}
				/>
			</View>

			{/* <View style={styles.container}>
					<FlatList
						data={data}
						renderItem={({ item }) => <RenderItem item={item} />}
					/>
				</View> */}
		</View>
	);
};

export default DetailsScreen;
