import React from 'react'
import ReactDOM from 'react-dom/client'

import { createStore } from 'redux'
import counterReducer from './reducer/counterReducer'

const store = createStore(counterReducer)
//console.log(store, 'is store')
//console.log(store.getState(), 'is store get state')
//console.log(store.getState().good, 'is store get state good')

const App = () => {
  return (
    <div>
      <button 
        onClick={e => store.dispatch({ type: 'GOOD' })}
      >
        good
      </button>
      <button
        onClick={e => store.dispatch({ type: 'OK' })}
      >
        ok
      </button>
      <button
        onClick={e => store.dispatch({ type: 'BAD' })}
      >
        bad
      </button>
      <button 
        onClick={e => store.dispatch({ type: 'ZERO' })}
      >
        reset stats
      </button>
      <div>
        <p>good: {store.getState().good} </p>
        <p>ok: {store.getState().ok}</p>
        <p>bad: {store.getState().bad}</p>
      </div>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

const renderApp = () => {
  root.render(<App />)
}

renderApp()
store.subscribe(renderApp)