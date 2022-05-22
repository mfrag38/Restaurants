import React from 'react';
import { View, FlatList } from 'react-native';
import ITag from '../../../models/ITag';
import Tag from '../../molecules/Tag';
import styles from './styles';

const TagsList = (props: any) => {
	const { data } = props;

	const RenderTag = ({ tag }: { tag: ITag }) => {
		return <Tag tag={tag} />;
	};

	return (
		<View style={styles.container}>
			<FlatList
				data={data}
				renderItem={({ item }) => <RenderTag tag={item} />}
				horizontal
				showsHorizontalScrollIndicator={false}
			/>
		</View>
	);
};

export default TagsList;
