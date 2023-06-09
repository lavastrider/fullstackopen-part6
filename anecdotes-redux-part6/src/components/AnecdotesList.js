import { useSelector, useDispatch } from 'react-redux'
import { addingVote } from '../reducers/anecdoteReducer'
import { setNotif } from '../reducers/notificationReducer'

const Anecdotes = () => {
  //const test = useSelector(state => state.anecdotes)
  //console.log(test, 'is test in anecdotes')
  let arrayForSort = []
  
  const words = useSelector((state) => {
    if (state.searchTerm) {
      console.log('we are in the results that match the search term')
      //console.log(state.anecdotes, 'is state dot anecdotes')
      console.log(state.searchTerm, 'is state search term')
      //console.log(state.searchTerm.payload, 'is state search term payload')
      return state.anecdotes.filter((phrase) => phrase.content.toLowerCase().includes(state.searchTerm.toLowerCase()))
    }
    //console.log(state.anecdotes, 'is state anecdotes')
    arrayForSort = [...state.anecdotes]
    //copy is needed because sort directly edits the variable
    return arrayForSort.sort((a,b) => b.votes-a.votes)
    //return state.anecdotes
  })
  
  //const anecdotalSort = anecdotes.anecdotes.sort((a,b) => b.votes-a.votes)
  
  //const testAnec = anecdotal.filter((phrase) => phrase.content.toLowerCase().includes('x'))
  //console.log(testAnec, 'is test anec')

  const dispatch = useDispatch()
  
  const vote = (id, words) => {
    dispatch(addingVote(id))
    dispatch(setNotif(`you voted for ${words}`, 5))
  }
  
  return (
    <div>
      {words.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id, anecdote.content)}>vote</button>
          </div>
        </div>
      )}    
    </div>
  )
//   return (
//    <p>glasses</p>
//   )
//  return (
//   <p>tee hee</p>
//  )
}

export default Anecdotes