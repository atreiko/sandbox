import React, { Suspense } from 'react'
import { Link, useLoaderData, Await, defer } from 'react-router-dom'

const BlogPage = () => {
  const { posts } = useLoaderData()

  return (
    <div>
      <h1>Our news</h1>

      <div className='container'>

        <Suspense fallback={<h2>LOADING...</h2>}>
          <Await resolve={posts}>
            {
              (resolvedPosts) => (
                <>
                  {
                    resolvedPosts.map(post => (
                      <Link key={post.id} to={`/posts/${post.id}`}>
                        <p>{post.title}</p>
                      </Link>
                    ))
                  }
                </>
              )
            }
          </Await>
        </Suspense>

      </div>

    </div>
  )
}

async function getPosts() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  return res.json()
}

const blogLoader = async ({ request, params }) => {
  return defer({
    posts: getPosts()
  })
}

export { BlogPage, blogLoader }