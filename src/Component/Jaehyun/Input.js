import React from 'react'

const Input = ({name, type, placeholder, onchange}) => {
  return <input name={name} type={type} placeholder={placeholder} onChange={onchange}></input>
}

export default Input