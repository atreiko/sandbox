# React router dom 6.4

`npm i react-router-dom`

Layout.jsx
```jsx
import { Outlet } from 'react-router-dom';

  <>
    <header>
      <CustomLink to='/'>Home</CustomLink>
      <CustomLink to='/posts'>Blog</CustomLink>
      <CustomLink to='/about'>About</CustomLink>
    </header>

    <main>
      <Outlet />
    </main>
  </>
```

```jsx
import { 
  Route, 
  RouterProvider, 
  createBrowserRouter, 
  createRoutesFromElements 
} from 'react-router-dom'

import { BlogPage, blogLoader } from './pages/BlogPage'

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout />}>

    <Route index element={<HomePage />} />
    <Route path='about' element={<AboutPage />}>
      <Route path='contacts' element={<p>Our contacts</p>} />
      <Route path='team' element={<p>Our team</p>} />
    </Route>
    <Route path='posts' element={<BlogPage />} loader={blogLoader} />
    <Route path='posts:id' element={<SinglePostPage />} />
    <Route path='*' element={<NotFountPage />} />

  </Route>
))

const App = () => <RouterProvider router={router} />
```

BlogPage.jsx
```jsx
  import { Link, useLoaderData } from 'react-router-dom'

const BlogPage = () => {
  const posts = useLoaderData()

  return (
    <div>
      <h1>Our news</h1>

      <div className='container'>
        {
          posts.map(post => (
            <Link key={post.id} to={`/posts/${post.id}`}>
              <p>{post.title}</p>
            </Link>
          ))
        }
      </div>

    </div>
  )
}

const blogLoader = async ({request, params}) => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  return res.json()
}

export { BlogPage, blogLoader }
```

---

## Loader

BlogPage.jsx
```jsx
import React, { Suspense } from 'react'
import { Link, useLoaderData, Await, defer } from 'react-router-dom'

const BlogPage = () => {
  const { posts } = useLoaderData()

  return (
    <>
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
    </>
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
```

SinglePostPage.jsx
```jsx
import React, { Suspense } from 'react'
import { useLoaderData, defer, Await, useAsyncValue } from 'react-router-dom'

const Post = () => {
  const post = useAsyncValue()
  return (
    <>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </>
  )
}

const SinglePostPage = () => {
  const { post, id } = useLoaderData()

  return (
    <div className='container'>
      <button onClick={goBack}>Go back</button>
      <Suspense fallback={<h2>LOADING...</h2>}>
        <Await resolve={post}>
          <Post />
        </Await>
      </Suspense>
    </div>
  )
}

async function getPostById(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  return res.json()
}

const postLoader = async ({ params }) => {
  const id = params.id
  return { post: getPostById(id), id }
}

export { SinglePostPage, postLoader }
```