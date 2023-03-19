import { useSelector } from 'react-redux'
import { notifReducer, notifHide } from '../reducers/notificationReducer'

const Notification = () => {
  const notif = useSelector(state => state.notification)
  //const notif = 'peep'
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  return (
    <div style={style}>
      {notif}
    </div>
  )
}

export default Notification