import axios from 'axios'
import { useContext } from 'react'
import AnexContext from './anecdotesContext'
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
  axios
    .post(baseUrl, newAnec)
    .then((response) => response.data)
    .catch((error)=>{
      console.log(error, 'is error in createanec')
      console.log(error.response, 'is error response in createanec')
      console.log(error.response.data, 'is error response data in createanec')
      console.log(error.response.data.error, 'is error response data error in createanec')
      return error.response.data.error
    })
  //console.log(testPromise, 'is testPromise in createanec')
}

//Promise.all( (() => this.dispatch = dispatchVar) ).then( axios.post().then().then() ).catch( (error) => { this.dispatch({type: "ERROR_HANDLE", payload: error}) } )
  
export const updateAnec = updatedAnec => 
  axios.put(`${baseUrl}/${updatedAnec.id}`, updatedAnec).then((response) => response.data)
