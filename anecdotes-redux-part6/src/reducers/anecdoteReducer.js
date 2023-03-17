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

export const anecdoteReducer = (state = initialState, action) => {
  //console.log('state now: ', state)
  //console.log('action', action)
  switch (action.type) {
  case 'ADD_VOTE':
    //console.log('we are supposed to add vote here')
    const id = action.payload
    console.log(id, 'is action payload in add vote')
    
    
    const phraseToChange = state.find((word) => word.id === id)
    //console.log(phraseToChange, 'is phrase to change')
    const changedPhrase = {
      ...phraseToChange,
      votes: phraseToChange.votes += 1
    }
    
    //console.log(changedPhrase, 'is changed phrases')
    //const testing = state.map((words) => words.id !== id ? words : changedPhrase)
    //console.log(testing, 'is testing')
    
    return state.map((words) => words.id !== id ? words : changedPhrase)
  case 'NEW_PHRASE':
    console.log('we are in new phrase')
    console.log(action.payload, 'is action payload in new phrase')
    return state.concat(action.payload)
  default:
    return state
  }
}

export default anecdoteReducer