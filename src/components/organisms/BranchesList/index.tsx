import React from 'react';
import { View, FlatList } from 'react-native';
import IBranch from '../../../models/IBranch';
import Branch from '../../molecules/Branch';
import styles from './styles';

const BranchesList = (props: any) => {
	const { data } = props;

	/**
	 * RenderBranch is a function that takes a branch as a parameter and returns a Branch component with
	 * the branch as a prop.
	 * @param  - branch - The branch to render.
	 * @returns A function that takes a single argument, branch, and returns a component, Branch, with the
	 * branch prop set to the branch argument.
	 */
	const RenderBranch = ({ branch }: { branch: IBranch }) => {
		return <Branch branch={branch} />;
	};

	return (
		<View style={styles.container}>
			<FlatList
				data={data}
				renderItem={({ item }) => <RenderBranch branch={item} />}
				showsVerticalScrollIndicator={false}
			/>
		</View>
	);
};

export default BranchesList;
