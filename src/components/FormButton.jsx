import React from 'react'
import { useContext} from 'react';
import StyleContext from '../context/StyleContext';
import TransactionContext from '../context/TransactionContext';

function FormButton() {
  const {isDisabled} = useContext(TransactionContext);
  const {showForm} = useContext(StyleContext);
  return (
    <div className='form-btn'>
        <button disabled={isDisabled} onClick={showForm}>Add Transaction</button>
    </div>
  )
}

export default FormButton