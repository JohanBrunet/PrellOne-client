import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';
import App from './components/App'
import { BrowserRouter } from 'react-router-dom'
import './main.scss'

const store = createStore(rootReducer)

ReactDOM.render(<BrowserRouter><Provider store={store}><App/></Provider></BrowserRouter>, document.getElementById('app'));