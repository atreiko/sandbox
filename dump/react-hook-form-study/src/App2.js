import React from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import Headers from './Header';

let renderCount = 0;

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    control
  } = useForm({
    mode: 'onChange',
    delayError: 500,
    defaultValues: {
      name: '',
      age: '',
      details: {
        desc: ''
      },
      pets: []
    }
  });

  renderCount++;

  const { fields, append, prepend } = useFieldArray({
    control,
    name: 'pets'
  })

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
          {...register('name', { required: 'Name is required.' })}
          placeholder='Name'
        />
        <p>{errors?.name?.message}</p>

        <input
          {...register('details.desc', { required: 'Name is required.' })}
          placeholder='Name'
        />

        <input
          type='number'
          {...register('age', 
            { required: 'Please enter your age.', valueAsNumber: true, maxLength: 3, max: 100 })
          }
          placeholder='Age'
        />
        <p>{errors?.age?.message}</p>

        <h3>PETS</h3>

        <div>
          {fields.map((field, index) => {
            return <input key={field.id} {...register(`pets.${index}.name`, {required: true})} />
          })}
        </div>

        <button
          type='button'
          onClick={() => append({name: 'append'})}
        >
          Append
        </button>

        <button
          type='button'
          onClick={() => prepend({name: 'append'})}
        >
          Prepend
        </button>

        <input type='submit' disabled={!isValid} />

      </form>
    </>
  );
}
