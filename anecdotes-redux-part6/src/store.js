import { configureStore } from '@reduxjs/toolkit'
import anecdoteReducer from './reducers/anecdoteReducer'
import filterReducer from './reducers/filterReducer'
import notificationReducer from './reducers/notificationReducer'
import wordService from './services/anecdotes'
import { appendAnex } from './reducers/anecdoteReducer'

const store = configureStore({
  reducer: {
    anecdotes: anecdoteReducer,
    searchTerm: filterReducer,
    notification: notificationReducer
  }  
})

wordService.getAll().then((phrases) => {
  phrases.forEach((words) => {
    console.log(words, 'is words in store in get all in for each')
    store.dispatch(appendAnex(words))
  })
})
console.log(store.getState(), 'is store get state in store.js')

export default store