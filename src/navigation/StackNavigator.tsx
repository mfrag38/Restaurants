import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';

/* Creating a StackNavigator component. */
const Stack = createNativeStackNavigator();

/**
 * This function returns a Stack Navigator component that has two screens, Home and Details, and the
 * header is not shown.
 * @returns A StackNavigator component that is a function that returns a Stack.Navigator component.
 */
const StackNavigator = () => {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
			}}
		>
			<Stack.Screen name='Home' component={HomeScreen} />
			<Stack.Screen name='Details' component={DetailsScreen} />
		</Stack.Navigator>
	);
};

export default StackNavigator;
