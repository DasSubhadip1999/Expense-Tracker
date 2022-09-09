import React from 'react'
import {Link} from 'react-router-dom'


function FormButton() {
  return (
    <div className='form-btn'>
        <Link to="/form" >
            Add Transaction
        </Link>
    </div>
  )
}

export default FormButton