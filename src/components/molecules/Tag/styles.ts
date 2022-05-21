import { StyleSheet } from 'react-native';
import { scale } from 'react-native-utils-scale';

export default StyleSheet.create({
	container: {
		marginHorizontal: scale(8),
		marginVertical: scale(4),
		borderBottomWidth: scale(2),
		borderBottomColor: '#ff0',
	},
	tagImage: {
		width: scale(150),
		height: scale(75),
	},
	tagTextContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		alignSelf: 'stretch',
	},
	tagText: {
		fontSize: scale(16),
		color: '#000',
	},
});
