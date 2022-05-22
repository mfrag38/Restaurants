import { StyleSheet } from 'react-native';
import { fontScale, scale } from 'react-native-utils-scale';

export default StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		alignSelf: 'stretch',
		paddingHorizontal: scale(8),
		paddingVertical: scale(8),
		borderBottomWidth: StyleSheet.hairlineWidth,
		borderBottomColor: '#888',
	},
	branchImageContainer: {
		width: scale(60),
		height: scale(60),
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: scale(60),
		overflow: 'hidden',
		backgroundColor: '#080',
	},
	branchImage: {
		width: scale(60),
		height: scale(60),
	},
	branchNameText: {
		flex: 1,
		color: '#000',
		fontSize: fontScale(17),
		fontWeight: 'bold',
		marginHorizontal: scale(16),
	},
});
