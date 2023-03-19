import { createSlice } from '@reduxjs/toolkit'

const filterSlice = createSlice({
  name: 'filtering',
  initialState: '',
  reducers: {
    filterReducer(state = '', action){
      //console.log('we are in filter reducer')
      //console.log(action.type, 'is action type')
      switch (action.type){
        case 'filtering/filterReducer':
          //console.log('we are in the set filter case')
          //console.log(action.payload, 'is action payload')
          return action.payload
        default:
          //console.log('we are in default action type case')
          return state
      }
    } 
  }
})


export const { filterReducer } = filterSlice.actions
export default filterSlice.reducer