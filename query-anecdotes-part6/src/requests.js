import axios from 'axios'
import { useContext } from 'react'
import AnexContext, { AnexContextProvider } from './anecdotesContext'
import index from './index'

const baseUrl = 'http://localhost:3001/anecdotes'

//const [anexxer, anexDispatch] = useContext(AnexContext)

export const getAnec = () =>
  axios.get(baseUrl).then((response) => response.data)

export const createAnec = (newAnec) => {
  //const [anexxer, anexDispatch] = useContext(AnexContext)
  //console.log(newAnec, 'is new anec in createanec in request')
  newAnec.votes = 0
  //console.log(newAnec, 'is new anec in createanec in request after adding votes') 
  const prom = axios
    .post(baseUrl, newAnec)
    .then((response) => response.data)
  return prom
}
  
export const updateAnec = updatedAnec => 
  axios.put(`${baseUrl}/${updatedAnec.id}`, updatedAnec).then((response) => response.data)