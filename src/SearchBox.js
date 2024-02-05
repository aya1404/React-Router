import React from 'react'

const SearchBox = ({search}) => {
  return (
    <div>
        <input
        className='search-box'
		type='text'
		onChange={(event) => search(event.target.value)}
	    placeholder='Type to search...'
		></input>
    <label for="search-box"><i className="fa-solid fa-magnifying-glass search-icon"></i></label>
    <input type="submit" id="search-submit" />
    </div>
  )
}

export default SearchBox