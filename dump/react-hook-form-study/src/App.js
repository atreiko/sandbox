import React from 'react';
import { useForm } from 'react-hook-form';
import Headers from './Header';

let renderCount = 0;

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  console.log(errors);

  renderCount++;

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
    <form onSubmit={handleSubmit(onSubmit)}>
      <Headers
        renderCount={renderCount}
        description='Performant, flexible and extensible forms with easy-to-use validation.'
      />
      <label htmlFor='firstName'>First Name:</label>
      <input
        {...register('firstName', { required: 'This is required.' })}
        id='firstName'
      />
      {errors.firstName && <p>{errors.firstName.message}</p>}

      <label htmlFor='lastName'>Last Name:</label>
      <input {...register('lastName', { required: true, minLength: 5 })} />

      <label htmlFor='age'>Age</label>
      <input
        type='number'
        {...register('age', { valueAsNumber: true })}
        id='age'
      />

      <label htmlFor='gender'></label>
      <select {...register('gender')} id='gender'>
        <option value=''>Select...</option>
        <option value='male'>male</option>
        <option value='female'>female</option>
      </select>

      <label htmlFor='developer'>Are you a developer?</label>
      <input {...register('developer')} value='yes' type='checkbox' />

      <input type='submit' />
    </form>
    </>
  );
}
