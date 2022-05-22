import React, { useEffect, useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import restaurants from '../../data/restaurants.json';
import TagsList from '../../components/organisms/TagsList';
import RestaurantsList from '../../components/organisms/RestaurantsList';
import { setList, setSelectedTag } from '../../redux/actions/homeActions';
import styles from './styles';

const HomeScreen = (props: any) => {
	const { selectedTag, list, tags } = useSelector((state: any) => state.Home);
	const [searchTerm, setSearchTerm] = useState('');

	const dispatch = useDispatch();

	useEffect(() => {
		if (searchTerm.length === 0) {
			dispatch(setList(restaurants.brands));
		} else {
			let temp = restaurants.brands.filter((k) =>
				k.name
					.toLocaleLowerCase()
					.includes(searchTerm.toLocaleLowerCase()),
			);
			dispatch(setList(temp));
		}
	}, [searchTerm]);

	useEffect(() => {
		if (selectedTag.length === 0) {
			dispatch(setList(restaurants.brands));
		} else {
			let temp = restaurants.brands.filter((k) =>
				k.tags.some((e) => e.name === selectedTag),
			);
			dispatch(setList(temp));
		}
	}, [selectedTag]);

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
							value={searchTerm}
							onChangeText={(text) => setSearchTerm(text)}
						/>
					</View>
				</View>
			</View>
			<TagsList
				data={tags}
				selectedTag={selectedTag}
				onTagPress={(tag: string) => {
					tag
						? dispatch(setSelectedTag(tag))
						: dispatch(setSelectedTag(''));
				}}
			/>
			<View style={styles.body}>
				<View style={styles.bodyTitleContainer}>
					<Text style={styles.bodyTitle}>Restaurants</Text>
				</View>
				<RestaurantsList data={list} navigation={props.navigation} />
			</View>
		</View>
	);
};

export default HomeScreen;
