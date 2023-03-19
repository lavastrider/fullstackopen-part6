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

export const newWords = (words) => {
  return {
    type: 'NEW_PHRASE',
    payload: {
      content: words,
      id: getId(),
      votes: 0
      }
  }
}

export const toAddVote = (id) => {
    return { type: 'ADD_VOTE', payload: id}
  }

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
    newPhrase(state, action){
     console.log(JSON.parse(JSON.stringify(state)), 'is state in newphrase in wordSlice')
    }
  }
})


export const anecdoteReducer = (state = initialState, action) => {
  switch (action.type) {
  case 'NEW_PHRASE':
    console.log('we are in new phrase')
    console.log(action.payload, 'is action payload in new phrase')
    return state.concat(action.payload)
  default:
    return state
  }
}

export const { addVote } = wordSlice.actions
export default wordSlice.reducer