import React from 'react';
import { Image, Text, View, TouchableOpacity } from 'react-native';
import styles from './styles';

/**
 * The Tag function takes in a tag object and a function called onTagPress and selected and
 * returns a view with a touchable opacity that calls the onTagPress function when pressed.
 * @param {any} props - any
 * @returns A React component
 */
const Tag = (props: any) => {
	const { tag, onTagPress, selected } = props;

	return (
		<View style={[styles.container, selected ? styles.selected : null]}>
			<TouchableOpacity onPress={onTagPress}>
				<Image
					source={{ uri: tag.image }}
					resizeMode='contain'
					style={styles.tagImage}
				/>
				<View style={styles.tagTextContainer}>
					<Text style={styles.tagText}>{tag.name}</Text>
				</View>
			</TouchableOpacity>
		</View>
	);
};

export default Tag;
