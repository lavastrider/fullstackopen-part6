import { useDispatch } from 'react-redux'
import { newWords } from '../reducers/anecdoteReducer'

const AnecdotesForm = () => {
  const dispatch = useDispatch()
  
  const newPhrase = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    //console.log('we got here first')
    dispatch(newWords(content))
  }

  return (
    <div>
      <h2>create new</h2>
        <form onSubmit={newPhrase}>
          <div><input
                 name="anecdote"
                 placeholder='type a new anecdote here...'/></div>
          <button type="submit">create</button>
        </form>
    </div> 
  )
}

export default AnecdotesForm