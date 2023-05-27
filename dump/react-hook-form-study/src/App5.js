import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Headers from './Header';

let renderCount = 0;

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { 
      isDirty,
      dirtyFields,
      touchedFields,
      isSubmitted,
      isSubmitSuccessful,
      submitCount,
      // async 
      isSubmitting,
      isValidating
    },
  } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
    }
  });

  console.log('isDirty', isDirty);
  console.log('dirtyFields', dirtyFields);
  console.log('touchedFields', touchedFields);
  console.log('isSubmitted', isSubmitted);
  console.log('isSubmitSuccessful', isSubmitSuccessful);
  console.log('submitCount', submitCount);

  // async submit
  console.log('isValidating', isValidating);

  console.log('isSubmitting', isSubmitting);

  const onSubmit = data => {
    console.log(data);
  }

  // const asyncSubmit = async data => {
  //   await ...
  // }

  renderCount++

  return (
    <>
      <form onSubmit={onSubmit}>

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

        {/* isValidating */}
        <input
          {...register('validating', { validate: async () => {
            // await ...
            // return true
          } })}
          placeholder='Validating'
        />

        <input type='submit' />
      </form>
    </>
  )
}