import React from 'react'
import './index.scss'
import ReactDOM from 'react-dom'
import App from './component/App/App'
import {Provider} from 'react-redux'
import {combineReducers, createStore} from 'redux'
const store = createStore(combineReducers({

}))
ReactDOM.render(
<Provider store={store}>
<App/>
</Provider>
,document.getElementById('root'));