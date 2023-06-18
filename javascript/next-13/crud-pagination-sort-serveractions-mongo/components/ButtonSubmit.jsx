'use client';

import { experimental_useFormStatus as useFormStatus } from 'react-dom';

export default function ButtonSubmit({ value, onClick }) {
  const { pending } = useFormStatus();

  return (
    <button className='border rounded py-2 px-4' type='submit' disabled={pending} onClick={onClick}>
      {pending ? 'Pending...' : value}
    </button>
  );
}
