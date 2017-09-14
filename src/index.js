import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/App.js';
import registerServiceWorker from './registerServiceWorker';
import reducersObj from './reducers/index.js'
//引入redux
import {createStore,combineReducers} from 'redux'
import {Provider} from 'react-redux'
//创建reducer
const reducers = combineReducers(reducersObj)
//创建store
const store = createStore(reducers);
//订阅 subscribe
const renderPage = () => {
	ReactDOM.render(
		<Provider store={store}>
			<App />
		</Provider>, document.getElementById('root'));
}
store.subscribe(renderPage);
renderPage();
registerServiceWorker();
