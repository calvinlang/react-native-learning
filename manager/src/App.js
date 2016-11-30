import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';

class App extends Component {

	componentWillMount() {
		const config = {
			apiKey: 'AIzaSyB21GQEeEKMDEgv8-RW20kF6VPw39ytOoo',
			authDomain: 'authentication-53145.firebaseapp.com',
			databaseURL: 'https://authentication-53145.firebaseio.com',
			storageBucket: 'authentication-53145.appspot.com',
			messagingSenderId: '925925988603'
		};
		firebase.initializeApp(config);
	}

	render() {
		return (
			<Provider store={createStore(reducers)}>
				<View>
					<Text>
						Hello!
						
					</Text>
				</View>
			</Provider>
		);
	}
}

export default App;
