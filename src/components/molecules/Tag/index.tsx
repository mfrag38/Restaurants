import React from 'react';
import { Image, Text, View, TouchableOpacity } from 'react-native';
import styles from './styles';

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
