import { createSlice } from '@reduxjs/toolkit'

const notifSlice = createSlice({
  name: 'notify',
  initialState: '',
  reducers: {
    notifVote(state, action){
      console.log('we are in notif reducer')
      console.log(action.type, 'is action type')
      switch (action.type){
        case 'notify/notifVote':
          console.log('we are in the notifReducer case')
          console.log(action.payload, 'is action payload')
          const msg = "you voted for "
          const msgAdd = msg.concat(action.payload)
          //console.log(msgAdd, 'is msg add')
          return msgAdd
        default:
          //console.log('we are in default action type case')
          return state
      }
    },
    notifHide(state, action) {
      console.log('we are in notifHide')
      console.log(action, 'is action')
      console.log(JSON.parse(JSON.stringify(state)), 'is state')
      return "hi"
    
    },
    notifAdd(state, action){
      console.log('we are in notifAdd')
      //console.log(action.type, 'is action type')
      switch (action.type) {
        case 'notify/notifAdd':
          //console.log('we are in the notif add case')
          //console.log(action.payload, 'is action payload')
          const msg = "you created "
          const msgAdd = msg.concat(action.payload)
          return msgAdd
        default:
          return state      
      }
    }
  }
})


export const { notifVote, notifHide, notifAdd } = notifSlice.actions
export default notifSlice.reducer