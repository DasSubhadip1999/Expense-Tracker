import React from 'react'

function Graphs({type,amount}) {
  return (
    <div className='graphs'>
        <h5>{type}</h5>
        <p>${amount}</p>
        <div>graph line</div>
    </div>
  )
}

export default Graphs