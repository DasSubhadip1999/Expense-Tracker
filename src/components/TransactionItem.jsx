import React, { useContext } from 'react';
import TransactionContext from '../context/TransactionContext';


function TransactionItem({title, date, amount,id}) {
  const {deleteTransaction, editExpenseFn, } = useContext(TransactionContext);
  //object with data from item to send to form
  let expenseItem = {id,title, date, amount}
  return (
    <div className='transaction-item'>
        <i onClick={() => editExpenseFn(expenseItem)} className="fa-regular fa-pen-to-square"></i>
        <div>
            <h4>{title}</h4>
            <p>{date}</p>
        </div>
        <h2>${amount}</h2>
        <i onClick={() => deleteTransaction(id)}  className="fa-solid fa-trash"></i>
    </div>
  )
}

export default TransactionItem