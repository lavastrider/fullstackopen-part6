import { configureStore } from '@reduxjs/toolkit'
import anecdoteReducer from './reducers/anecdoteReducer'
import { filterReducer } from './reducers/filterReducer'

const store = configureStore({
  reducer: {
    anecdotes: anecdoteReducer,
    searchTerm: filterReducer
  }  
})

console.log(store.getState(), 'is store get state in store.js')

export default store