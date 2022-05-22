import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';

/**
 * This function takes in a branch object and returns a view with an image and a text.
 * @param {any} props - any
 * @returns A React component.
 */
const Branch = (props: any) => {
	const { branch } = props;

	return (
		<View style={styles.container}>
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

export default Branch;
