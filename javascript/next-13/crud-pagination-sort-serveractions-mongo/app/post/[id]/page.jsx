import { getOnePost } from '@/actions/postActions';
import PostCard from '@/components/PostCard';

export default async function PostDetails({ params: { id }, searchParams }) {
  const post = await getOnePost(id);

  return <div className='p-4'>
    {post && <PostCard post={post} />}
  </div>;
}
