import React from 'react'
import TransactionItem from './TransactionItem';
import { useContext } from 'react';
import TransactionContext from '../context/TransactionContext';



function TransactionList() {
  const {transaction} = useContext(TransactionContext);
  return (
    <div className='transaction-list'>
        <h3>Transactions</h3>
        {
            transaction.map( ({key,title,date,amount,id}) => {
                return (
                    <TransactionItem id={id} key={key} title={title} date={date} amount={amount}  />
                )
            })
        }
    </div>
  )
}

export default TransactionList;