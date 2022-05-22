import React from 'react';
import { View, FlatList } from 'react-native';
import ITag from '../../../models/ITag';
import Tag from '../../molecules/Tag';
import styles from './styles';

const TagsList = (props: any) => {
	const { data, selectedTag, onTagPress } = props;

	/**
	 * RenderTag is a function that takes in a tag and returns a Tag component with the tag, onTagPress,
	 * and selected props.
	 * @param  - `tag` - the tag object
	 * @returns A function that returns a component.
	 */
	const RenderTag = ({ tag }: { tag: ITag }) => {
		return (
			<Tag
				tag={tag}
				onTagPress={() =>
					onTagPress(selectedTag === tag.name ? null : tag.name)
				}
				selected={selectedTag === tag.name}
			/>
		);
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
