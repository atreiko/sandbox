# React Hook Form 

`npm i react-hook-form`

BASE: `https://codesandbox.io/s/brave-elgamal-2m1kq?file=/src/Header.tsx`  

## App1

---

## App2

useFieldArray используетя с useForm  

```jsx
import { useForm, useFieldArray /* add */ } from 'react-hook-form';

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid }, /* isValid on submit btn */
    watch,
    control  /* add */
  } = useForm({
    mode: 'onChange', /* add */
    defaultValues: {
      name: '',
      age: '',
      details: {  /* 'details.desc' */
        desc: ''
      },
      pets: [] /* add */
    }
  });

  const { fields, append, prepend } = useFieldArray({
    control,
    name: 'pets'
  })

  return (
    <>   
      <input
        {...register('details.desc', { required: 'Name is required.' })} /* 'details.desc' */
        placeholder='Name'
      />

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
    </>
  )
```

---

## App3.js

value as Number for for float numbers

```jsx

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
```

---

## App4.js

```jsx

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

  return (
    <>
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
    </>
  )
```

---

## App5.js

```jsx
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
  console.log('isSubmitting', isSubmitting);

  console.log('isValidating', isValidating);
  
  const onSubmit = data => {
    console.log(data);
  }

  // const asyncSubmit = async data => {
  //   await ...
  // }

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
```

---

## App6.js

```jsx
  const {
    register,
    handleSubmit,
    formState: { 
      dirtyFields,
      isDirty,
      touchedFields,
    },
    setValue
  } = useForm({
    defaultValues: {
      firstName: '',
    }
  });

  console.log(dirtyFields, isDirty, touchedFields)

  <input
    {...register('firstName', { required: 'This is required.' })}
    placeholder='FirstName'
  />
  <button 
    type='button' 
    onClick={() => setValue('firstName', 'bill', { shouldDirty: true })} // dirtyFields, isDirty
    // or
    onClick={() => setValue('firstName', 'bill', { shouldTouch: true })} // touchedFields 
  >
    Set value
  </button>
```

---

## App7.js

```jsx
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
    }
  });

  console.log('errors', errors); // errors.firstName.type: 'minLength'
  console.log('isValid', isValid); // false

  <input
    {...register('firstName', { required: 'This is required.', minLength: 2 })}
    placeholder='FirstName'
  />

  <button 
    type='button' 
    onClick={() => setValue('firstName', 'bill', { shouldValidate: true })} 
  >
    Set value
  </button>
```

---

## App8.js

```jsx
import { Controller, useForm } from 'react-hook-form';

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

  return (
    <>
      <input
        {...register('firstName', { required: 'This is required.', minLength: 2 })}
        placeholder='FirstName'
      />

      <Controller 
        render={({ field }) => <input {...field} placeholder='LastName' />} 
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
    </>
  )
```