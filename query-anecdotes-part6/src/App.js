import AnecdoteForm from './components/AnecdoteForm'
import { useQuery, useMutation, useQueryClient } from 'react-query'
import { getAnec, updateAnec } from './requests'
import Notification from './components/Notification'

const App = () => {
  const queryClient = useQueryClient()
  const result = useQuery(
    'anecdotal', getAnec,
      {
        retry: 1
      }
  )
  
  const updateAnecMutation = useMutation(updateAnec, {
    onSuccess: () => {
      queryClient.invalidateQueries('anecdotal')
    }
  })

  const handleVote = (anecdote) => {
    //console.log('we are in the handle vote')
    //console.log(anecdote, 'is anecdote in handlevote before voting')
    updateAnecMutation.mutate({...anecdote, votes: anecdote.votes + 1})
    console.log(anecdote.content, 'is anec content in vote')
  }

  //console.log(result, 'is result in app')
  
  if (result.isLoading) {
    return <div>loading data...</div>
  } else if (result.isError) {
    return <div>anecdote service not available due to problems in server</div> 
  }
  
    
  const anecdotals = result.data
  //console.log(anecdotals, 'is anecdotals in app')

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
