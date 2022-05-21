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
		width: scale(75),
		height: scale(75),
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: scale(50),
		overflow: 'hidden',
	},
	branchImage: {
		width: scale(75),
		height: scale(75),
	},
	branchNameText: {
		flex: 1,
		color: '#000',
		fontSize: fontScale(17),
		fontWeight: 'bold',
		marginHorizontal: scale(16),
	},
});
