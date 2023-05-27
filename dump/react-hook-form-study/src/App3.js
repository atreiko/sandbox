import React from 'react';
import { useForm } from 'react-hook-form';
import Headers from './Header';

let renderCount = 0;

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      age: '',
      count: ''
    }
  });

  return (

    <>
      <form onSubmit={handleSubmit((data) => {
        console.log(data);
      })}>

        <Headers
          renderCount={renderCount}
          description='Performant, flexible and extensible forms with easy-to-use validation.'
        />

        <input
          {...register('firstName', { required: 'This is required.' })}
          placeholder='FirstName'
        />

        <input 
          {...register('lastName', { required: true, minLength: 3 })}
          placeholder='LastName'
        />

        <input
          {...register('age', {
            valueAsNumber: true,
            pattern: {
              value: /^(0|[1-9]\d*)(\.\d+)?$/
            }
          })}
          placeholder='Age'
        />

        <select {...register('count', { valueAsNumber: true })} id='count'>
          <option value=''>Select...</option>
          <option value='1'>1</option>
          <option value='2'>2</option>
        </select>

        <input type='submit' />
      </form>
    </>
  )
}