import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import WhyDidYouUpdate from 'why-did-you-update'
import configureStore from './Store';

import 'bootstrap/scss/bootstrap.scss'

import './Styles/_index.scss'
import App from './App/index'
import * as serviceWorker from './serviceWorker'

WhyDidYouUpdate(React)

ReactDOM.render(
  <Provider store={configureStore()}>
    <App />
  </Provider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
