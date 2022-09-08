import React from 'react';


function TransactionItem({title, date, amount}) {
  return (
    <div className='transaction-item'>
        <div>
            <h4>{title}</h4>
            <p>{date}</p>
        </div>
        <h2>{amount}</h2>
    </div>
  )
}

export default TransactionItem