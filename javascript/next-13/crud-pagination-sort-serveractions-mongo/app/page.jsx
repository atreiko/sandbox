import { getAllPosts } from '@/actions/postActions';
import Feature from '@/components/Feature';
import Pagination from '@/components/Pagination';
import PostForm from '@/components/PostForm';
import PostList from '@/components/PostList';

export default async function Home({ params, searchParams }) {
  const { posts, totalPages } = await getAllPosts(searchParams);

  return (
    <main>
      <h1 className='text-center text-6xl mb-4 mt-4'>Next.js 13.4.4</h1>
      <h2 className='text-center text-3xl'>C.R.U.D. | Sort | Search | Pagination</h2>
      <PostForm />
      <Feature />
      {posts && <PostList posts={posts} />}
      {totalPages && <Pagination totalPages={totalPages} />}
    </main>
  );
}
