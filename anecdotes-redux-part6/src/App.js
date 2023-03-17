import AnecdotesForm from './components/AnecdotesForm'
import AnecdotesList from './components/AnecdotesList'
import Filter from './components/Filter'

const App = () => {

 const filterSelected = (value) => {
   console.log(value) 
 }

  return (
    <div>
      <h2>Anecdotes</h2>
      <Filter />
      <AnecdotesList />
      <AnecdotesForm />
    </div>
  )
}

export default App