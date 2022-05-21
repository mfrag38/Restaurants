import React, { useCallback, useRef } from 'react';
import {
	View,
	Text,
	Image,
	TouchableOpacity,
	TouchableWithoutFeedback,
	FlatList,
} from 'react-native';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import restaurants from '../../data/restaurants.json';
import styles from './styles';
import BottomSheet from '../../components/BottomSheet';

const restaurant = restaurants.brands[0];

const DetailsScreen = (props: any) => {
	const bottomSheetModalRef = useRef<BottomSheetModal>(null);

	const presentBottomSheet = useCallback(() => {
		bottomSheetModalRef.current?.present();
	}, []);

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

	const RenderBranch = ({ branch }: { branch: any }) => {
		return (
			<View style={styles.branchContainer}>
				<View style={styles.branchImageContainer}>
					<Image
						source={{ uri: branch.image }}
						resizeMode='contain'
						style={styles.branchImage}
					/>
				</View>
				<Text style={styles.branchNameText}>{branch.name}</Text>
			</View>
		);
	};

	return (
		<TouchableWithoutFeedback
			onPress={() => bottomSheetModalRef.current?.close()}
		>
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
							onPress={presentBottomSheet}
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
				<BottomSheet bottomSheetModalRef={bottomSheetModalRef}>
					<View style={styles.branchesListContainer}>
						<FlatList
							data={restaurant.branches}
							renderItem={({ item }) => (
								<RenderBranch branch={item} />
							)}
						/>
					</View>
				</BottomSheet>
			</View>
		</TouchableWithoutFeedback>
	);
};

export default DetailsScreen;
