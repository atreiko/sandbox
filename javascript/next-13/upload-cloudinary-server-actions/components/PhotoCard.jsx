import Image from 'next/image';
import { useTransition } from 'react';

export default function PhotoCard({ url, onClick }) {
  const [isPending, startTransition] = useTransition();

  return (
    <div className='border rounded flex flex-col gap-4'>
      <div className='overflow-hidden mb-2 h-1/2'>
        <Image
          className='rounded overflow-hidden h-auto'
          src={url}
          alt='image'
          width={100}
          height={60}
          priority
        />
      </div>
      <button
        className='p-2 border rounded disabled:border-stone-600'
        type='button'
        onClick={() => startTransition(onClick)}
        disabled={isPending}>
        {isPending ? 'Loading...' : 'Delete'}
      </button>
    </div>
  );
}
