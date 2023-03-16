import React from 'react'
import ReactDOM from 'react-dom/client'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import index from './index'
import counterReducer from './reducer/counterReducer'

const App = () => {
  console.log('at least we are returning something')

  return (
   <p>Why isn't there anything here?</p>  
  )
}

export default App