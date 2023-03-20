import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

export const getAnec = () =>
  axios.get(baseUrl).then((response) => response.data)

export const createAnec = (newAnec) => {
  //console.log(newAnec, 'is new anec in createanec in request')
  newAnec.votes = 0
  //console.log(newAnec, 'is new anec in createanec in request after adding votes')
  axios.post(baseUrl, newAnec).then((response) => response.data)
}
  
export const updateAnec = updatedAnec => 
  axios.put(`${baseUrl}/${updatedAnec.id}`, updatedAnec).then((response) => response.data)
