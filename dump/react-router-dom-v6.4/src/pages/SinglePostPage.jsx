import React, { Suspense } from 'react'
import { useLoaderData, useNavigate, defer, Await, useAsyncValue } from 'react-router-dom'

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

  const navigate = useNavigate()
  const goBack = () => navigate(-1)

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