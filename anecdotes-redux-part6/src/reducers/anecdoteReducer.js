import { createSlice } from '@reduxjs/toolkit'
import wordService from '../services/anecdotes'

//const anecdotesAtStart = [
// 'If it hurts, do it more often',
//  'Adding manpower to a late software project makes it later!',
//  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
//  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
//  'Premature optimization is the root of all evil.',
//  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
//]

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

//const initialState = anecdotesAtStart.map(asObject)
const initialState = []

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
    appendAnex(state, action){
      return state.concat(action.payload)
    },
    replacePhrase(state, action){
      console.log(action, 'is action in replace phrase')
      const id = action.payload.id
      const phraseToReplace = state.find((word) => word.id === id)
      console.log(phraseToReplace, 'is phrasetoreplace in replace phrase')
      phraseToReplace.votes = action.payload.votes
    }
  }
})

export const { addVote, appendAnex, replacePhrase } = wordSlice.actions

export const initializeWords = () => {
  return async dispatch => {
    const words = await wordService.getAll()
    dispatch(appendAnex(words))
  }
}

export const newWords = (content) => {
   return async dispatch => {
     const newWord = await wordService.createNew(content)
     dispatch(appendAnex(newWord))
   }    
}

export const addingVote = (id) => {
  return async dispatch => {
    const voted = await wordService.incVote(id)
    dispatch(replacePhrase(voted))
  }
}

export default wordSlice.reducer