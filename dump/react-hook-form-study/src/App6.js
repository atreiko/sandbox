import React, { useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import Headers from './Header';

let renderCount = 0;

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { 
      dirtyFields,
      isDirty,
      touchedFields,

      errors
    },
    setValue
  } = useForm({
    defaultValues: {
      firstName: '',
    }
  });

  renderCount++

  console.log('dirtyFields', dirtyFields);
  console.log('isDirty', isDirty);
  console.log('touchedFields', touchedFields);

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

        <button 
          type='button' 
          onClick={() => setValue('firstName', 'bill', { shouldDirty: true} )} // dirtyFields, isDirty
          // onClick={() => setValue('firstName', 'bill', { shouldTouch: true })} // touchedFields  
        >
          Set value
        </button>

        <input type='submit' />
      </form>
    </>
  )
}