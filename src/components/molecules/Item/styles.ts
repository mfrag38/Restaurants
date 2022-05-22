import { StyleSheet } from 'react-native';
import { fontScale, scale } from 'react-native-utils-scale';

export default StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		alignSelf: 'stretch',
		marginVertical: scale(8),
		padding: scale(8),
		borderRadius: scale(5),
		overflow: 'hidden',
		elevation: 3,
		backgroundColor: '#fff',
	},
	itemInfoContainer: {
		flex: 1,
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
		alignSelf: 'stretch',
		marginHorizontal: scale(8),
	},
	itemTitleText: {
		fontSize: fontScale(16),
		fontWeight: 'bold',
		color: '#000',
		marginVertical: scale(2),
	},
	itemSubTitleText: {
		marginVertical: scale(2),
		fontSize: fontScale(16),
		color: '#888',
	},
	itemPriceText: {
		marginVertical: scale(2),
		fontWeight: 'bold',
		color: '#080',
	},
	itemImageContainer: {
		width: scale(75),
		height: scale(75),
		justifyContent: 'center',
		alignItems: 'center',
	},
	itemImage: {
		width: scale(75),
		height: scale(75),
	},
});
