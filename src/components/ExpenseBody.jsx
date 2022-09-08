import React from 'react';
import CatagoryList from './CatagoryList';
import Search from './Search';
import TransactionList from './TransactionList';


function ExpenseBody() {
  return (
    <div className='expense-body'>
      <Search />
      <CatagoryList  />
      <TransactionList />
    </div>
  )
}

export default ExpenseBody