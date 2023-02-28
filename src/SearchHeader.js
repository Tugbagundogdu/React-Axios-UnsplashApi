import React, { useState } from 'react'

const SearchHeader = ({search}) => {

  const handleSubmit = (event)=>{
    event.preventDefault();
    debugger;
    search(value);
  }

  const [value, setValue] = useState('');


  return (
    <div className='searchHeaderApp' >
      <form 
      value = {value}
      onChange = {(e) => setValue(e.target.value)}
      onSubmit={handleSubmit} className='searchHeaderForm'>
        <label>Ne Arıyorsunuz?</label>
        <input/>
      </form>
      <div>{value}</div>
    </div>
  )
}

export default SearchHeader
