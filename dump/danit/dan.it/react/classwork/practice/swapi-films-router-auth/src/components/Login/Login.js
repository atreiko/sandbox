import React, { useRef } from 'react'
import { Redirect } from 'react-router-dom';

function Login({ setUser, isAuth }) {
  const loginRef = useRef(null);
  const passwordRef = useRef(null);

  const logInUser = (e) => {
    e.preventDefault()

    setUser({
      login: loginRef.current.value,
      password: passwordRef.current.value
    })
  }

  if (isAuth) {
    return <Redirect to='/' />
  }

  return (
    <form onSubmit={logInUser}>
      <div>
        <input type='text' placeholder='Email' ref={loginRef} />
      </div>
      <div>
        <input type='password' placeholder='Password' ref={passwordRef} />
      </div>
      <div>
        <button type='submit'>Log in</button>
      </div>
    </form>
  )
}

export default Login
