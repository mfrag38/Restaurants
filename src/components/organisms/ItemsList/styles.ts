import { StyleSheet } from 'react-native';
import { scale } from 'react-native-utils-scale';

export default StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignSelf: 'stretch',
		paddingHorizontal: scale(16),
	},
});
