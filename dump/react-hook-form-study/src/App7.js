import React, { useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import Headers from './Header';

let renderCount = 0;

export default function App() {
  const {
    register,
    handleSubmit,
    formState: {
      errors,
      isValid
    },
    setValue
  } = useForm({
    defaultValues: {
      firstName: '',
      lastName: ''
    }
  });

  renderCount++

  console.log('errors', errors);
  console.log('isValid', isValid);

  return (
    <>
      <form onSubmit={handleSubmit((data) => console.log('submitted', data))}>

        <Headers
          renderCount={renderCount}
          description='Performant, flexible and extensible forms with easy-to-use validation.'
        />

        <input
          {...register('firstName', { required: 'This is required.' })}
          placeholder='FirstName'
        />

        <input
          {...register('lastName', { required: 'This is required.' })}
          placeholder='FirstName'
        />

        <button 
          type='button' 
          onClick={() => setValue('firstName', 'bill', { shouldValidate: true })} // errors.firstName.type: 'minLength'
        >
          Set value
        </button>

        <input type='submit' />
      </form>
    </>
  )
}