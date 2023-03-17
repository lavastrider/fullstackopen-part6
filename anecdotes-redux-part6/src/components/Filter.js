const Filter = () => {
  const handleChange = (event) => {
    // input-field value is in variable event.target.value
    
    //maybe filter state
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