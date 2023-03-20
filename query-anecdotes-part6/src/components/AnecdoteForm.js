import { useQueryClient, useMutation } from 'react-query'
import { createAnec } from '../requests'

const AnecdoteForm = () => {

  const queryClient = useQueryClient()
  
  const newAnecMutation = useMutation(createAnec, {
    onSuccess: (newAnec) => {
      const anex = queryClient.getQueryData('anecdotal')
      //console.log(anex, 'is anex in newmutate in anecform')
      queryClient.setQueryData('anecotal', anex.concat(newAnec))
    }    
  })

  const onCreate = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    //console.log('new anecdote')
    newAnecMutation.mutate({ content })
}

  return (
    <div>
      <h3>create new</h3>
      <form onSubmit={onCreate}>
        <input name='anecdote' />
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm
