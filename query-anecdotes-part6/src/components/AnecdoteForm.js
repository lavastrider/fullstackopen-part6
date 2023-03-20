import { useQueryClient, useMutation } from 'react-query'
import { createAnec } from '../requests'
import { useContext, useReducer } from 'react'
import AnexContext from '../anecdotesContext'

const anexReducer = (state, action) => {
  switch (action.type) {
    case "FORM_SENT":
      //console.log(JSON.parse(JSON.stringify(state)), 'is json json state in anexreducer')
      console.log(state, 'is state in anexreducer')
      console.log(action, 'is action in anexreducer')
      return action.payload
  }
}

const AnecdoteForm = () => {

  const queryClient = useQueryClient()
  let dummyVal = ''
  
  const newAnecMutation = useMutation(createAnec, {
    onSuccess: (newAnec) => {
      const anex = queryClient.getQueryData('anecdotal')
      //console.log(anex, 'is anex in newmutate in anecform')
      dummyVal = anex[anex.length-1].content
      console.log(dummyVal, 'is dummy val in newanecmutate')
      queryClient.setQueryData('anecotal', anex.concat(newAnec))
    }    
  })
  
  const [anexxer, anexDispatch] = useReducer(anexReducer, '')

  const onCreate = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    //console.log('new anecdote')
    anexDispatch({ type: "FORM_SENT", payload: content })
    newAnecMutation.mutate({ content })
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
