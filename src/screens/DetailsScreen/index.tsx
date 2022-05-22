import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
	View,
	Text,
	Image,
	TouchableOpacity,
	TouchableWithoutFeedback,
	ActivityIndicator,
} from 'react-native';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';
import ItemsList from '../../components/organisms/ItemsList';
import BottomSheet from '../../components/UI/BottomSheet';
import BranchesSheet from '../../components/UI/BranchesSheet';

const DetailsScreen = (props: any) => {
	const { restaurant } = props.route.params;

	const [isLoading, setIsLoading] = useState(true);

	const bottomSheetModalRef = useRef<BottomSheetModal>(null);

	/* A hook that is used to simulate a loading state. */
	useEffect(() => {
		setTimeout(() => {
			setIsLoading(false);
		}, 1000);
	}, []);

	/* A function that is used to present the bottom sheet. */
	const presentBottomSheet = useCallback(() => {
		bottomSheetModalRef.current?.present();
	}, []);

	/* A function that is used to dismiss the bottom sheet. */
	const dismissBottomSheet = useCallback(() => {
		bottomSheetModalRef.current?.dismiss();
	}, []);

	return isLoading ? (
		<View style={styles.container}>
			<ActivityIndicator color='#000' size={32} />
		</View>
	) : (
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
							onPress={() => props.navigation.goBack()}
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
							{restaurant.tags
								.map((tag: any) => tag.name)
								.join(', ')}
						</Text>
					</View>
				</View>
				<ItemsList data={restaurant.items} />
				<BottomSheet bottomSheetModalRef={bottomSheetModalRef}>
					<BranchesSheet
						data={restaurant.branches}
						dismiss={dismissBottomSheet}
					/>
				</BottomSheet>
			</View>
		</TouchableWithoutFeedback>
	);
};

export default DetailsScreen;
