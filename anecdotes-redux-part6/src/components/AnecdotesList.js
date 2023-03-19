import { useSelector, useDispatch } from 'react-redux'
import { toAddVote } from '../reducers/anecdoteReducer'

const Anecdotes = () => {
  const test = useSelector(state => state)
  console.log(test, 'is test in anecdotes')
  
  const words = useSelector((state) => {
    if (state.searchTerm) {
      //console.log('we are in the results that match the search term')
      //console.log(state.anecdotes, 'is state dot anecdotes')
      console.log(state.searchTerm, 'is state search term')
      //console.log(state.searchTerm.payload, 'is state search term payload')
      //return state.anecdotes.filter((phrase) => phrase.content.toLowerCase().includes(state.searchTerm.toLowerCase()))
    }
    //console.log(state.anecdotes, 'is state anecdotes')
    return state.anecdotes.sort((a,b) => b.votes-a.votes)
  })
  
  //const anecdotalSort = anecdotes.anecdotes.sort((a,b) => b.votes-a.votes)
  
  //const testAnec = anecdotal.filter((phrase) => phrase.content.toLowerCase().includes('x'))
  //console.log(testAnec, 'is test anec')

  const dispatch = useDispatch()
  
  const vote = (id) => {
    dispatch(toAddVote(id))
  }
  
  //return (
  //  <div>
    //  {words.map(anecdote =>
      //  <div key={anecdote.id}>
        //  <div>
          //  {anecdote.content}
//          </div>
  //        <div>
    //        has {anecdote.votes}
      //      <button onClick={() => vote(anecdote.id)}>vote</button>
        //  </div>
//        </div>
  //    )}    
    //</div>
  //)
  
  return (
   <p>peepee</p>
  )
  
}

export default Anecdotes