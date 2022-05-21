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
		justifyContent: 'center',
		alignItems: 'center',
		alignSelf: 'stretch',
		borderBottomWidth: StyleSheet.hairlineWidth,
		borderBottomColor: '#888',
	},
	headerSubContainer: {
		height: scale(40),
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		alignSelf: 'stretch',
		marginHorizontal: scale(16),
		marginVertical: scale(8),
		borderRadius: scale(32),
		overflow: 'hidden',
		backgroundColor: '#69696978',
	},
	headerIconContainer: {
		width: scale(48),
		justifyContent: 'center',
		alignItems: 'center',
		alignSelf: 'stretch',
	},
	headerInputContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		alignSelf: 'stretch',
	},
	headerInput: {
		flex: 1,
		alignSelf: 'stretch',
	},
	body: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		alignSelf: 'stretch',
		paddingHorizontal: scale(16),
	},
	bodyTitleContainer: {
		justifyContent: 'center',
		alignItems: 'flex-start',
		alignSelf: 'stretch',
		marginVertical: scale(8),
	},
	bodyTitle: {
		fontSize: fontScale(22),
		fontWeight: 'bold',
		color: '#000',
	},
	tagsListContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		alignSelf: 'stretch',
	},
	tagContainer: {
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
	restaurantsListContainer: {
		flex: 1,
		justifyContent: 'center',
		alignSelf: 'stretch',
	},
	restaurantContainer: {
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
