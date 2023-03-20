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

const incVote = async (id) => {
  //find object in array with same id
  //increase vote by one
  console.log(id, 'is id in incVote in word service')
  const listing = await axios.get(baseUrl)
  console.log(listing.data, 'is listing data in inc vote in word services')
  const matchVote = listing.data.find((state) => state.id === id)
  console.log(matchVote, 'is matchvote in incv in wordserv')
  matchVote.votes += 1
  const response = await axios.put(`http://localhost:3001/anecdotes/${id}`, matchVote)
  //console.log(response.data, 'is response data in incvote in wordservice')
  return response.data
}

export default {
  getAll,
  createNew,
  incVote
}