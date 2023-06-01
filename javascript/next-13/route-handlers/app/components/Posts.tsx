'use client';
// import { useEffect } from "react";
import Link from 'next/link';
import useSWR from 'swr'
// import { shallow } from "zustand/shallow";
// import { usePosts } from "@/store";
import { getAllPosts } from '../services/getPosts';

const Posts = () => {
  const { data: posts, isLoading } = useSWR('posts', getAllPosts);
  // const [posts, loading, getAllPosts] = usePosts(
  //   (state) => [state.posts, state.loading, state.getAllPosts],
  //   shallow
  // );

  // useEffect(() => {
  //   getAllPosts();
  // }, [getAllPosts]);

  return isLoading ? (
    <h3>Loading... </h3>
  ) : (
    <ul className='flex gap-4'>
      {posts.map((post: any) => (
        <li key={post.id} className='bg-slate-800 p-2'>
          <Link href={`/blog/${post.id}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export { Posts };
