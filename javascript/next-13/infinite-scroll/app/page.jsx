import getPosts from '@/actions/postsActions';
import Posts from '@/components/Posts';

export default function Home() {
  const postsPromise = getPosts({ limit: 9, page: 0});

  return (
    <main>
      <div className='max-w-[768px] mx-auto'>
        POSTS
        {postsPromise && <Posts postsPromise={postsPromise} />}
      </div>
    </main>
  );
}
