import { createSlice } from '@reduxjs/toolkit'

const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

const initialState = anecdotesAtStart.map(asObject)

const wordSlice = createSlice({
  name: 'phrases',
  initialState,
  reducers: {
    addVote(state, action){
      //console.log(JSON.parse(JSON.stringify(state)), 'is state in addVote in wordSlice')
      const id = action.payload
      //console.log(id, 'is action payload in add vote')
      const phraseToVote = state.find((word) => word.id === id)
      //console.log(phraseToVote, 'is phrase to vote') <- proxy junk
      //console.log(JSON.parse(JSON.stringify(phraseToVote)), 'is pTV with json')
      phraseToVote.votes += 1
      //console.log(JSON.parse(JSON.stringify(state)), 'is state in addVote in wordSlice after voting') 
    },
    newWords(state, action){
     //console.log(JSON.parse(JSON.stringify(state)), 'is state in newphrase in wordSlice')
     //console.log(action, 'is action in new words')
     const newAnec = asObject(action.payload)
     //console.log(newAnec, 'is new anec')
     state.push(newAnec)
    }
  }
})

export const { addVote, newWords } = wordSlice.actions
export default wordSlice.reducer