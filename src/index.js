import React from 'react'
import './index.scss'
import ReactDOM from 'react-dom'
import App from './component/App/App'
import {Provider} from 'react-redux'
import {combineReducers, createStore,compose, applyMiddleware} from 'redux'
import userReducer from './redux/reducer/userReducer'
import thunk from 'redux-thunk'
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(combineReducers({
    userReducer
}),
composeEnhancers(applyMiddleware(thunk))
)
ReactDOM.render(
<Provider store={store}>
<App/>
</Provider>
,document.getElementById('root'));