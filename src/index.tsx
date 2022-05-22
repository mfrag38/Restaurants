import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import RootNavigator from './navigation/RootNavigator';

/**
 * The App function returns a Provider component that wraps the RootNavigator component.
 *
 * The Provider component is a component that comes from the react-redux library.
 *
 * The Provider component is a component that makes the Redux store available to any nested components
 * that have been wrapped in the connect() function.
 *
 * The Provider component takes a single prop, a store, which is set to the Redux store we created
 * earlier in the file.
 *
 * The RootNavigator component is a component that we will create in the next step.
 *
 * The RootNavigator component is a component that will be used to switch between the different screens
 * of our app.
 *
 * The RootNavigator component will be a React Navigation component.
 *
 * React Navigation is a library that allows us to easily implement navigation in our React Native
 * apps.
 *
 * The RootNav
 * @returns The Provider component is being returned.
 */
const App = () => {
	return (
		<Provider store={store}>
			<RootNavigator />
		</Provider>
	);
};

export default App;
