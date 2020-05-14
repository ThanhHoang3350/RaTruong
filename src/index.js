	import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import appReducers from './reducers/index';

import App from './components/App';
import * as serviceWorker from './serviceWorker';

import { firebaseApp, usersRef } from './firebase';
import {actLogin, actLogout} from './actions/index';


const store = createStore(
	appReducers, /* preloadedState, */
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

			
firebaseApp.auth().onAuthStateChanged((user) => {
	if (user) {
		let userInfo = {
			email: user.email,
			uid: user.uid,
			username: '',
		}
		usersRef.child(user.uid).once('value').then(data => {
			let info = data.val();
			userInfo.username = info.website;
			store.dispatch(actLogin(userInfo));			
		})
	} else {
		// User is signed out.
		store.dispatch(actLogout())
	}
});

ReactDOM.render(
	<Provider store={store}>
        <App />
    </Provider>, document.getElementById('container'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
