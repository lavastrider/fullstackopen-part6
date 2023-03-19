import { createSlice } from '@reduxjs/toolkit'

const filterSlice = createSlice({
  name: 'filtering',
  initialState: '',
  reducers: {
    filterReducer(state = '', action){
      console.log('we are in filter reducer')
      switch (action.type){
        case 'SET_FILTER':
          //console.log('we are in the set filter case')
          console.log(action.payload, 'is action payload')
          return action.payload
        default:
          console.log('we are in default action type case')
          return state
      }
    },
    filterChange(state, action){
    console.log('pee')
    console.log(action, 'is action')
      //console.log(filter, 'is filter in filterchange')
      //return {
        //type: 'SET_FILTER',
        //payload: filter
      //}
      console.log(state, 'is state in filter change')
    }  
  }
})

export const { filterReducer, filterChange } = filterSlice.actions
export default filterReducer.reducer