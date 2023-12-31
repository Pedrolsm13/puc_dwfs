import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'

import { createStore } from 'redux'
import storeConfig from './store/store.jsx'
const store = createStore(storeConfig)

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
        <App />
    </React.StrictMode>,
  </Provider>
)