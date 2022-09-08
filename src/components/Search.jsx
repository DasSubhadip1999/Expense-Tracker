import React from 'react'

function Search() {
  return (
    <div className='search'>
        <div>
            <i className="fa-solid fa-magnifying-glass"></i>
            <input type="text" placeholder='Search' />
        </div>
        <p>Calender</p>
        <p>Notification</p>
    </div>
  )
}

export default Search