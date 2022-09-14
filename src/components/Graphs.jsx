import React, { useContext } from 'react';
import GraphLine from './shared/GraphLine';
import TransactionContext from '../context/TransactionContext';


function Graphs({type,amount}) {
  const {transaction, leftAmount} = useContext(TransactionContext)
  
  return (
    <div className='graphs'>
        <h5>{type}</h5>
        <p>${amount}</p>
        {
          type === "income" && 
          <>
            <h5>Balance</h5>
            <p>${leftAmount()}</p>
          </>
        }
        {type !== "income" && transaction.length !== 0 && <GraphLine />}
    </div>
  )
}

export default Graphs