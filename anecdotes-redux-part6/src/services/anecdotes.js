import axios from 'axios'
const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  //console.log(response.data, 'is response data in get all')
  return response.data
}

const createNew = async (content) => {
  const object = { content }
  object.votes = 0
  //console.log(object, 'is content in createnew in word service')
  const response = await axios.post(baseUrl, object)
  return response.data
}

export default {
  getAll,
  createNew
}