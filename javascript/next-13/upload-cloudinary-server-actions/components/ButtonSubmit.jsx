'use client';

import { experimental_useFormStatus as useFormStatus } from 'react-dom'

export default function ButtonSubmit({ value, ...props }) {
  const { pending } = useFormStatus()

  return (
    <button className='px-4 py-2 border rounded' type='submit' disabled={pending} {...props}>
      {pending ? 'Loading...' : value}
    </button>
  )
}
