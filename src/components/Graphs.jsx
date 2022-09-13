import React from 'react';
import GraphLine from './shared/GraphLine';

function Graphs({type,amount}) {
  return (
    <div className='graphs'>
        <h5>{type}</h5>
        <p>${amount}</p>
        <GraphLine />
    </div>
  )
}

export default Graphs