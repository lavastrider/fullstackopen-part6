import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

export const getAnec = () => 
  axios.get(baseUrl).then((response) => response.data)

export const createAnec = newAnec =>
  axios.post(baseUrl, newAnec).then((response) => response.data)
  
export const updateAnec = updatedAnec => 
  axios.put(`${baseUrl}/${updatedAnec.id}`, updatedAnec).then((response) => response.data) 