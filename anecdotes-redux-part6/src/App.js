import AnecdotesForm from './components/AnecdotesForm'
import AnecdotesList from './components/AnecdotesList'
import Filter from './components/Filter'
import Notification from './components/Notification'

const App = () => {

 const filterSelected = (value) => {
   console.log(value) 
 }

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