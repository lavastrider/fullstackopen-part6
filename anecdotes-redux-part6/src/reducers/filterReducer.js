const filterReducer = (state = '', action) => {
  //console.log('we are in filter reducer')
  switch (action.type) {
    case 'SET_FILTER':
      //console.log('we are in the set filter case')
      //console.log(action.payload, 'is action payload')
      return action.payload
    default:
      return state 
  }
}

export const filterChange = (filter) => {
  return {
    type: 'SET_FILTER',
    payload: filter
  }
}

export default filterReducer