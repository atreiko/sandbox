import React from 'react';
import { useField } from 'formik';

const MyInput2 = ({ name, ...rest }) => {
  const [field, meta] = useField(name);

  return (
    <div>
      <input {...field} {...rest} />
      { meta.error && meta.touched && <span className='error'>{meta.error}</span>}
    </div>
  )
}

export default MyInput2
