import { useDispatch } from 'react-redux'
import { filterReducer } from '../reducers/filterReducer'


const Filter = () => {

  const dispatch = useDispatch()
  
  const handleChange = (event) => {
    event.preventDefault()
    const searchTerm = event.target.value
    //console.log(searchTerm, 'is search term')
    dispatch(filterReducer(searchTerm))    
  }
  const style = {
    marginBottom: 10
  }

  return (
    <div style={style}>
      filter <input
        placeholder='Start typing to search' 
        onChange={handleChange} />
    </div>
  )
}

export default Filter