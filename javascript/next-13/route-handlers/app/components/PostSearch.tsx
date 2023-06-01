'use client';
import useSWR from 'swr';
// import { usePosts } from "@/store";
import { FormEventHandler, useState } from 'react';
import { getPostsBySearch } from '../services/getPosts';

const PostSearch = () => {
  const { mutate } = useSWR('posts');
  const [search, setSearch] = useState('');
  // const getPostsBySearch = usePosts((state) => state.getPostsBySearch);

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();

    const posts = await getPostsBySearch(search);

    mutate(posts);
  };

  return (
    <form onSubmit={handleSubmit} className='border-2 border-slate-800 mb-4 inline-block'>
      <input
        type='search'
        placeholder='search'
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
      <button type='submit'>Search</button>
    </form>
  );
};

export { PostSearch };
