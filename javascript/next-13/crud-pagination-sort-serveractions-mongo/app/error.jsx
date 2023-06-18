'use client';

export default function Error({ error, reset }) {
  return (
    <div className='grid place-content-center'>
      <h1 className='text-4xl my-4'>{error.message}</h1>
      <button className='border rounded py-2 px-4' onClick={reset}>Try again</button>
    </div>
  );
}
