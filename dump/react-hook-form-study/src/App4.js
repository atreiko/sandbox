import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Headers from './Header';

let renderCount = 0;

export default function App() {
  const {
    register,
    handleSubmit,
    watch
  } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      age: '',
      count: 50,
      secondCount: 50
    }
  });

  useEffect(() => {
    const subscription = watch((data) => {
      console.log(data);
    })

    return () => {
      subscription.unsubscribe()
    }
  }, [watch])

  // const firstName = watch('firstName')
  // console.log(firstName); ''

  // const array = watch(['firstName', 'lastName'])
  // console.log(array); ['', '']

  renderCount++

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
          <option value='10'>10</option>
          <option value='20'>20</option>
          <option value='30'>30</option>
          <option value='40'>40</option>
          <option value='50'>50</option>
        </select>

        <select {...register('secondCount', { valueAsNumber: true })} id='secondCount'>
          <option value='10'>10</option>
          <option value='20'>20</option>
          <option value='30'>30</option>
          <option value='40'>40</option>
          <option value='50'>50</option>
        </select>

        <input type='submit' />
      </form>
    </>
  )
}