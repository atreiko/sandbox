import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import Input from './components/Input';
import Headers from './Header';

let renderCount = 0;

export default function App() {
  const {
    register,
    handleSubmit,
    reset,
    control
  } = useForm({
    defaultValues: {
      firstName: '',
      lastName: ''
    }
  });

  renderCount++

  console.log(control);

  return (
    <>
      <form onSubmit={handleSubmit((data) => console.log('submitted', data))}>

        <Headers
          renderCount={renderCount}
          description='Performant, flexible and extensible forms with easy-to-use validation.'
        />

        <input
          {...register('firstName', { required: 'This is required.', minLength: 2 })}
          placeholder='FirstName'
        />

        <Controller 
          render={({ field }) => {
            console.log(field);
          }} 
          name={'lastName'} 
          control={control} 
        />

        <button 
          type='button' 
          onClick={() => reset({
            firstName: 'asd',
            lastName: 'qwe'
          })} 
        >
          Reset
        </button>

        <input type='submit' />
      </form>
    </>
  )
}