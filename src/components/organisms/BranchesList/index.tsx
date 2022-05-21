import React from 'react';
import { View, FlatList } from 'react-native';
import IBranch from '../../../models/IBranch';
import Branch from '../../molecules/Branch';
import styles from './styles';

const BranchesList = (props: any) => {
	const { data } = props;

	const RenderBranch = ({ branch }: { branch: IBranch }) => {
		return <Branch branch={branch} />;
	};

	return (
		<View style={styles.container}>
			<FlatList
				data={data}
				renderItem={({ item }) => <RenderBranch branch={item} />}
			/>
		</View>
	);
};

export default BranchesList;
