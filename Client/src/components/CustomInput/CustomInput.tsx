import React from 'react'

const CustomInput = (props:any) => {
  const { type,label,i_id,i_class } = props
  return (
    <div className='form-floating mb-3'>
                  <input
                    type={type}
                    placeholder={label}
                    className={`form-control ${i_class}`}
                    id={i_id} 
                  />
        <label htmlFor={label}>{label}</label>
                </div>
  )
}

export default CustomInput