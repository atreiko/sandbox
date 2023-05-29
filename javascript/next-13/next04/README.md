# NEXT 13.2.3

## SSG, SSR, ISR

`npm run build`  

λ  (Server)  server-side renders at runtime (uses getInitialProps or getServerSideProps)  
○  (Static)  automatically rendered as static HTML (uses no initial props)  

`npm run start` 

>Network: watch fetching data  

---

Static Site Generation:  
``` tsx
export async function generateStaticParams() {
  const usersData: Promise<User[]> = getAllUsers()
  const users = await usersData

  return users.map(user => ({
    userId: user.id.toString()
  }))
}
```

●  (SSG)  automatically generated as static HTML + JSON (uses getStaticProps)  