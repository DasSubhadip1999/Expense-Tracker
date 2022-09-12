import React from 'react'
import TransactionItem from './TransactionItem';
import { useContext } from 'react';
import TransactionContext from '../context/TransactionContext';



function TransactionList() {
  //whole array from context to create each item
  const {transaction} = useContext(TransactionContext);
  if(!transaction || transaction.length === 0) {
    return (<h4>No Expenses yet</h4>)
  }
  return (
    <div className='transaction-list'>
        <h3>Transactions</h3>
        {
            transaction.map( ({title,date,amount,id}) => {
                return (
                    <TransactionItem id={id} key={id} title={title} date={date} amount={amount}  />
                )
            })
        }
    </div>
  )
}

export default TransactionList;