import 'babel-polyfill'

import React from 'react'
import { HashRouter, BrowserRouter } from 'react-router-dom'
import { render } from 'react-dom'
import createStore from './store'
import { Provider } from 'react-redux'
import App from 'components/app'

render(
  <Provider store={createStore()}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('app_mountpoint')
)
