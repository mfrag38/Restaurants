import { StyleSheet } from 'react-native';
import { fontScale, scale } from 'react-native-utils-scale';

export default StyleSheet.create({
	container: {
		justifyContent: 'center',
		alignItems: 'center',
		alignSelf: 'stretch',
		marginVertical: scale(8),
		borderRadius: scale(5),
		overflow: 'hidden',
		elevation: 3,
		backgroundColor: '#fff',
	},
	buttonContainer: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		alignSelf: 'stretch',
		padding: scale(8),
	},
	imageContainer: {
		width: scale(75),
		height: scale(75),
		justifyContent: 'center',
		alignItems: 'center',
	},
	image: {
		width: scale(75),
		height: scale(75),
	},
	textInfoContainer: {
		flex: 1,
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
		alignSelf: 'stretch',
		marginHorizontal: scale(8),
	},
	titleText: {
		fontSize: fontScale(16),
		fontWeight: 'bold',
		color: '#000',
		marginVertical: scale(2),
	},
	subTitleText: {
		marginVertical: scale(2),
		color: '#888',
	},
});
