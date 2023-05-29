export default async function getUserPosts(userId: string) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`, 
    { next: { revalidate: 60 } } // { cache: 'force-cache'}, { cache: 'no-store' }
  )

  if (!res.ok) return undefined

  return res.json()
}
