'use client';
import { experimental_useOptimistic as useOptimistic } from 'react';
import PostCard from './PostCard';
import { deletePost } from '@/actions/postActions';

export default function PostList({ posts }) {
  const [optimisticPosts, addOptimisticPost] = useOptimistic({ posts }, (state, newPost) => ({
    ...state,
    posts: newPost,
  }));

  const handleDelete = async (postId) => {
    if (window.confirm('Do you want to delete this post?')) {
      const newPosts = posts.filter((post) => post._id !== postId);
      addOptimisticPost((optimisticPosts.posts = newPosts));
      await deletePost(postId);
    }
  };

  return (
    <ul className='flex p-4 gap-4 mt-4 flex-wrap'>
      {optimisticPosts.posts.map((post) => (
        <PostCard key={post._id} post={post} handleDelete={handleDelete} />
      ))}
    </ul>
  );
}
