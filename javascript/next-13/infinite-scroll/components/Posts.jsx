// 'use client';
// import { useEffect } from 'react';
// import { useWindowDimensions } from '@/hooks/useWindowDimensions';
import Image from 'next/image';

export default async function Posts({ postsPromise }) {
  const posts = await postsPromise

  return (
    <ul className='grid grid-cols-3 gap-4 p-4'>
      {posts?.map((post) => (
        <li className='overflow-hidden border rounded max-h-[320px]' key={post.id}>
          <a className='h-full w-full border-red-800' href='/'>
            <div className='h-52 overflow-hidden'>
              <Image src={post.url} alt={post.title} width={235} height={210} quality={50} />
            </div>
            <div className='py-4'>
              <h1>{post.title}</h1>
            </div>
          </a>
        </li>
      ))}
    </ul>
  );
}
