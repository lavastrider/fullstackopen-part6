import React from 'react'
import ReactDOM from 'react-dom/client'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './App'
import counterReducer from './reducer/counterReducer'

const store = createStore(counterReducer)

store.dispatch({
  data: {
    good: 5,
    ok: 4,
    bad: 2
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)