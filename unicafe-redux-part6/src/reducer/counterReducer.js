const initialState = {
  good: 0,
  ok: 0,
  bad: 0
}

const counterReducer = (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case 'GOOD':
      console.log(state, 'is state in reducer')
      //const newValsGd = {...initialState}
      //newValsGd.good += 1
      //console.log(newVals, 'is new vals')
      //return newValsGd
    case 'OK':
      
      
      
      //const newValsOk = {...initialState}
      //newValsOk.ok += 1
      //return newValsOk
    case 'BAD':
      
      
      //const newValsBd = {...initialState}
      //newValsBd.bad += 1
      //return newValsBd
    case 'ZERO':
      
      
      //const newValsZero = {...initialState}
      //console.log(newValsZero, 'is new vals zero')
      //newValsZero.good = 0
      //newValsZero.bad = 0
      //newValsZero.ok = 0
      //return newValsZero
    default: 
      return state
  }

}

export default counterReducer