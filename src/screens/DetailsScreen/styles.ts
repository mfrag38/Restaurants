import { StyleSheet } from 'react-native';
import { fontScale, scale } from 'react-native-utils-scale';

export default StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		alignSelf: 'stretch',
		backgroundColor: '#fff',
	},
	headerContainer: {
		height: scale(150),
		justifyContent: 'center',
		alignItems: 'center',
		alignSelf: 'stretch',
		elevation: 3,
	},
	headerImage: {
		height: scale(150),
		alignSelf: 'stretch',
	},
	backButtonContainer: {
		width: scale(48),
		height: scale(48),
		justifyContent: 'center',
		alignItems: 'center',
		position: 'absolute',
		left: 0,
		top: 0,
	},
	backButton: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		alignSelf: 'stretch',
	},
	branchesButtonContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		position: 'absolute',
		right: scale(8),
		bottom: scale(8),
		paddingHorizontal: scale(6),
		borderRadius: scale(50),
		overflow: 'hidden',
		elevation: 3,
		backgroundColor: '#FF0',
	},
	branchesButton: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		alignSelf: 'stretch',
	},
	branchesText: {
		color: '#080',
	},
	restaurantInfoContainer: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		alignSelf: 'stretch',
		marginVertical: scale(4),
		paddingHorizontal: scale(16),
		borderBottomWidth: StyleSheet.hairlineWidth,
		borderBottomColor: '#888',
	},
	restaurantImageContainer: {
		width: scale(75),
		height: scale(75),
		justifyContent: 'center',
		alignItems: 'center',
	},
	restaurantImage: {
		width: scale(75),
		height: scale(75),
	},
	restaurantTextInfoContainer: {
		flex: 1,
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
		alignSelf: 'stretch',
		marginHorizontal: scale(8),
	},
	restaurantTitleText: {
		fontSize: fontScale(16),
		fontWeight: 'bold',
		color: '#000',
		marginVertical: scale(2),
	},
	restaurantSubTitleText: {
		marginVertical: scale(2),
		color: '#888',
	},
});
