import AnecdoteForm from './components/AnecdoteForm'
import Notification from './components/Notification'
import { useQuery, useMutation, useQueryClient } from 'react-query'
import { getAnec, createAnec, updateAnec } from './requests'

const App = () => {
  const queryClient = useQueryClient()
  
  const updateAnecMutation = useMutation(updateAnec, {
    onSuccess: () => {
      queryClient.invalidateQueries('anecdotal')
    }
  })

  const handleVote = (anecdote) => {
    //going to use mutation here
    console.log('vote')
  }
  
  const result = useQuery(
    'anecdotal', getAnec,
      {
        retry: 1
      }
  )
  console.log(result, 'is result in app')
  
  if (result.isLoading) {
    return <div>loading data...</div>
  } else if (result.isError) {
    return <div>anecdote service not available due to problems in server</div> 
  }
  
    
  const anecdotals = result.data
  console.log(anecdotals, 'is anecdotals in app')

  return (
    <div>
      <h3>Anecdote app</h3>
    
      <Notification />
      <AnecdoteForm />

      {anecdotals.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => handleVote(anecdote)}>vote</button>
          </div>
        </div>
      )}    
    </div>
  )
}

export default App
