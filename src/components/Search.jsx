import React, { useContext } from 'react'
import TransactionContext from '../context/TransactionContext'

function Search() {
  const {searchExpense} = useContext(TransactionContext);
  return (
    <div className='search'>
        <div>
            <i className="fa-solid fa-magnifying-glass"></i>
            <input onChange={searchExpense} type="text" placeholder='Search' />
        </div>
        <p>Calender</p>
        <p>Notification</p>
    </div>
  )
}

export default Search