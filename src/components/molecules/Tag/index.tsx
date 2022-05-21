import React from 'react';
import { Image, Text, View } from 'react-native';
import styles from './styles';

const Tag = (props: any) => {
	const { tag } = props;

	return (
		<View style={styles.container}>
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

export default Tag;
