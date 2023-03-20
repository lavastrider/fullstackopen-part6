import { useEffect } from 'react'
import AnecdotesForm from './components/AnecdotesForm'
import AnecdotesList from './components/AnecdotesList'
import Filter from './components/Filter'
import Notification from './components/Notification'
import wordService from './services/anecdotes'
import { initializeWords } from './reducers/anecdoteReducer'
import { useDispatch } from 'react-redux'

const App = () => {

 const dispatch = useDispatch()
 
 useEffect(() => {
   dispatch(initializeWords())
 }, [dispatch])

  return (
    <div>
      <h2>Anecdotes</h2>
      <Notification />
      <Filter />
      <AnecdotesList />
      <AnecdotesForm />
    </div>
  )
}

export default App