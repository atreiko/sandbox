import React from 'react'

const MyInput = ({ field, form, ...rest }) => (
  <div>
    <input {...field} {...rest} />
    { form.errors[field.name] && form.touched[field.name] && <span className='error'>{form.errors[field.name]}</span>}
  </div>
)

export default MyInput
