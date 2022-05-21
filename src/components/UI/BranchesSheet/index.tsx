import React from 'react';
import BranchesList from '../../organisms/BranchesList';

const BranchesSheet = (props: any) => {
	const { data } = props;

	return <BranchesList data={data} />;
};

export default BranchesSheet;
