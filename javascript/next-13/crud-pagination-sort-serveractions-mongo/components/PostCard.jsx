'use client';
import { useTransition } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useMyContext } from '@/context/Provider';

export default function PostCard({ post, handleDelete }) {
  const { setEditPost } = useMyContext();

  let [isPending, startTransition] = useTransition();

  const { title, image } = post;

  return (
    <li className='rounded h-52'>
      <Link href={`/post/${post._id}`}>
        <Image src={image} alt={title} width={200} height={150} priority className='h-full' />
        <h3 className='py-2 text-white'>{title}</h3>
      </Link>
      <div className='flex gap-4'>
        <button className='border rounded py-2 px-4' onClick={() => setEditPost(post)}>
          Edit
        </button>
        <button
          className='border rounded py-2 px-4'
          onClick={() => startTransition(() => handleDelete(post._id))}
          disabled={isPending}>
          {isPending ? 'Pending...' : 'Delete'}
        </button>
      </div>
    </li>
  );
}
