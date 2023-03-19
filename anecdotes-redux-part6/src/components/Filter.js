import { useSelector, useDispatch } from 'react-redux'
import { filterChange } from '../reducers/filterReducer'


const Filter = () => {

  const dispatch = useDispatch()
  
  const handleChange = (event) => {
    event.preventDefault()
    const searchTerm = event.target.value
    //console.log(searchTerm, 'is search term')
    const pass = dispatch(filterChange(searchTerm))
    console.log(pass, 'is pass')
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