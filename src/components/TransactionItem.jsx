import React, { useContext } from 'react';
import TransactionContext from '../context/TransactionContext';


function TransactionItem({title, date, amount,id}) {
  const {deleteTransaction} = useContext(TransactionContext);
  return (
    <div className='transaction-item'>
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