import React from 'react'

function Input({expense,type,placeholder,name,label,handleChange}) {
  return (
    <div className='inputs'>
        <label htmlFor={name}>{label}</label><br/>
        <input value={expense[name]}  onChange={handleChange} type={type} placeholder={placeholder} name={name} />
    </div>
  )
}

export default Input