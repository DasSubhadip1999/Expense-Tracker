import React from 'react'

function Input({type,placeholder,name,label,handleChange}) {
  return (
    <div className='inputs'>
        <label htmlFor={name}>{label}</label><br/>
        <input onChange={handleChange} type={type} placeholder={placeholder} name={name} />
    </div>
  )
}

export default Input