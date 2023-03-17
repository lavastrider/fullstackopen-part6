import { useSelector, useDispatch } from 'react-redux'
import { createStore } from 'redux'
import anecdoteReducer from './reducers/anecdoteReducer'

const App = () => {
  const anecdotes = useSelector(state => state)
  const dispatch = useDispatch()
  const store = createStore(anecdoteReducer) 
  
  const vote = (id) => {
    console.log('vote', id)
    store.dispatch({ type: 'ADD VOTE', payload: {id} })
    console.log(store.getState(), 'is store get state')
  }

  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
      <h2>create new</h2>
      <form>
        <div><input /></div>
        <button>create</button>
      </form>
    </div>
  )
}

export default App