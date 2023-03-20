import { createContext, useReducer } from 'react'

const anexReducer = (state, action) => {
  //console.log(JSON.parse(JSON.stringify(state)), 'is json json state in anexreducer')
  console.log(action, 'is action in anexreducer')
  return action.payload
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