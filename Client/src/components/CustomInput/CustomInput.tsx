import React from 'react'

const CustomInput = (props:any) => {
  const { type,label,i_id,i_class,name,val,onCh,onBl } = props
  return (
    <div className='form-floating'>
                  <input
                    type={type}
                    placeholder={label}
                    className={`form-control ${i_class}`}
                    id={i_id}
                    name={name}
                    value={val}
                    onChange={onCh}
                    onBlur={onBl}
                  />
        <label htmlFor={label}>{label}</label>
                </div>
  )
}

export default CustomInput