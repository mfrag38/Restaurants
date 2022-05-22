import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './StackNavigator';

/**
 * The RootNavigator function returns a Navigation Container component that contains a Stack Navigator
 * component.
 * @returns A function that returns a component.
 */
const RootNavigator = () => {
	return (
		<NavigationContainer>
			<StackNavigator />
		</NavigationContainer>
	);
};

export default RootNavigator;
