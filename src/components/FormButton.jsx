import React from 'react'
import { useContext } from 'react';
import StyleContext from '../context/StyleContext';

function FormButton() {
  const {showForm} = useContext(StyleContext);
  return (
    <div className='form-btn'>
        <button onClick={showForm}>Add Transaction</button>
    </div>
  )
}

export default FormButton