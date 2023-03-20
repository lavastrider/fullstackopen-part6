import { useContext } from 'react'
import AnexContext from '../anecdotesContext'


const Notification = () => {

   //const [anexxer, anexDispatch] = useContext(AnexContext)
   
   const display = false
   
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
    marginBottom: 5
  }
  
  if (!display) {
    return null  
  } else {
    //display exists
    //after 5 seconds, set props.anec to null
    setTimeout(()=> display = '', 5000)
  }

  return (
    <div style={style}>
      {display} 
    </div>
  )
}

export default Notification
