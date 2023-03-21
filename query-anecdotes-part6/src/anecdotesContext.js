import { createContext, useReducer } from 'react'

const anexReducer = (state, action) => {
  switch (action.type) {
    case "FORM_SENT":
      //console.log(JSON.parse(JSON.stringify(state)), 'is json json state in anexreducer')
      //console.log(action, 'is action in form sent in anexreducer')
      return action.payload
    case "VOTE_SENT":
      return action.payload
    case "POST_ERROR":
      //console.log(action, 'is action in error post in anexreducer')
      return action.payload
    case "NOTIF_CLEAR":
      return action.payload
    default:
      return state
  }
}

const AnexContext = createContext()

export const AnexContextProvider = (props) => {
  const [anexxer, anexDispatch] = useReducer(anexReducer, 0)
  
  return (
   <AnexContext.Provider value={[anexxer, anexDispatch]}>
     {props.children}
   </AnexContext.Provider>
  )
}

export default AnexContext