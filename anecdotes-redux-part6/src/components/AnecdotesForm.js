import { useDispatch } from 'react-redux'
import { newWords } from '../reducers/anecdoteReducer'
import { notifAdd, notifHide, setNotif } from '../reducers/notificationReducer'
import wordService from '../services/anecdotes'

const AnecdotesForm = () => {
  const dispatch = useDispatch()
  
  const newPhrase = async (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    //console.log('we got here first')
    dispatch(newWords(content))
    dispatch(setNotif(`you added ${content}`, 5))
    //dispatch(notifAdd(content))
    //setTimeout(()=>dispatch(notifHide(content)), 5000)
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