import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { store } from './redux/store'
import { Provider } from 'react-redux'
import App from './App'
import {persistStore} from "redux-persist"
import { PersistGate } from "redux-persist/integration/react"
const root = ReactDOM.createRoot(document.getElementById('root'))

let persistor = persistStore(store)
root.render(
  <BrowserRouter>
    <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
      <App />
      </PersistGate>
      </Provider>
    </React.StrictMode>
  </BrowserRouter>
)
