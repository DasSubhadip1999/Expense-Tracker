import React from 'react'
import TransactionItem from './TransactionItem';
import transactionData from '../data/transactionData';


function TransactionList() {
  return (
    <div className='transaction-list'>
        <h3>Transactions</h3>
        {
            transactionData.map( ({id,title,date,amount}) => {
                return (
                    <TransactionItem key={id} title={title} date={date} amount={amount}  />
                )
            })
        }
    </div>
  )
}

export default TransactionList;