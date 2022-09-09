import React from 'react'
import TransactionItem from './TransactionItem';
import transactionData from '../data/transactionData';
import { useContext } from 'react';
import TransactionContext from '../context/TransactionContext';


function TransactionList() {
  const {transaction} = useContext(TransactionContext);
  return (
    <div className='transaction-list'>
        <h3>Transactions</h3>
        {
            transaction.map( ({id,title,date,amount}) => {
                return (
                    <TransactionItem key={id} title={title} date={date} amount={amount}  />
                )
            })
        }
    </div>
  )
}

export default TransactionList;