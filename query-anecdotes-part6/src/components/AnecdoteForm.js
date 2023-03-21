import { useQueryClient, useMutation } from 'react-query'
import { createAnec } from '../requests'
import { useContext } from 'react'
import AnexContext from '../anecdotesContext'

const AnecdoteForm = () => {

  const queryClient = useQueryClient()
  
  const newAnecMutation = useMutation(createAnec, {
    onSuccess: (newAnec) => {
      const anex = queryClient.getQueryData('anecdotal')
      console.log(anex, 'is anex in newmutate in anecform before post request')
      queryClient.setQueryData('anecotal', anex.concat(newAnec))
    },
    onError: (error) => {
      console.log('we failed the post in createanex in usemutate')
    }
  })
  
  const [anexxer, anexDispatch] = useContext(AnexContext)

  const onCreate = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    //console.log('new anecdote')
    const pizza = newAnecMutation.mutate({ content })
    console.log(pizza, 'is pizza')
    const newMsg = `you created the anecdote ${content}`
    //console.log(newMsg, 'is new msg')
    anexDispatch({ type: "FORM_SENT", payload: newMsg })
  }

  return (
    <div>
      <h3>create new</h3>
      <form onSubmit={onCreate}>
        <input 
          name='anecdote'
          placeholder='Enter a new anecdote...'
          />
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm