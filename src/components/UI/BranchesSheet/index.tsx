import React from 'react';
import BranchesList from '../../organisms/BranchesList';

/**
 * BranchesSheet is a function that takes in a prop called data and returns a BranchesList component
 * that takes in the data prop.
 * @param {any} props - any
 * @returns A function that returns a component.
 */
const BranchesSheet = (props: any) => {
	const { data } = props;

	return <BranchesList data={data} />;
};

export default BranchesSheet;
