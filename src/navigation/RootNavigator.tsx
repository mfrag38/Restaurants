import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './StackNavigator';

const RootNavigator = (props: any) => {
	return (
		<NavigationContainer>
			<StackNavigator />
		</NavigationContainer>
	);
};

export default RootNavigator;
