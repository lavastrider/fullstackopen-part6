import { configureStore } from '@reduxjs/toolkit'
import anecdoteReducer from './reducers/anecdoteReducer'
import filterReducer from './reducers/filterReducer'
import notificationReducer from './reducers/notificationReducer'

const store = configureStore({
  reducer: {
    anecdotes: anecdoteReducer,
    searchTerm: filterReducer,
    notification: notificationReducer
  }  
})

console.log(store.getState(), 'is store get state in store.js')

export default store