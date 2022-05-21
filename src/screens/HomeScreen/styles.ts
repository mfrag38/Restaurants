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
});
