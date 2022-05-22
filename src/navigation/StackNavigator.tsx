import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';

const Stack = createNativeStackNavigator();

const StackNavigator = (props: any) => {
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