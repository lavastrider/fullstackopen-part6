import { useContext } from 'react'
import AnexContext from '../anecdotesContext'


const Notification = () => {

   const [anex, dispatch] = useContext(AnexContext)
   //console.log(anex, 'is anex in notif')
   
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
    marginBottom: 5
  }
  
  if (!anex || anex === " ") {
    return null
  } else {
    setTimeout(()=> dispatch({type: "FORM_SENT", payload:" "}), 5000)
  }

  return (
    <div style={style}>
      {anex} 
    </div>
  )
}

export default Notification
