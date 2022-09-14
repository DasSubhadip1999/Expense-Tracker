import React, { useEffect } from 'react'
import GraphBar from './GraphBar';
import TransactionContext from '../../context/TransactionContext';
import { useContext } from 'react';

function GraphLine() {
  const {transaction} = useContext(TransactionContext);

  return (
    <ul className='graph-line'>
        {
          transaction.map((item) => <GraphBar key={item.id} amount={item.amount} id={item.id}/>)
        }
    </ul>
  )
}

export default GraphLine