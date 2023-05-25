import React, { useRef } from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { saveUserAction } from '../../store/user/actions';

export function Login({ setUser, isAuth }) {
  const loginRef = useRef(null);
  const passwordRef = useRef(null);

  const logInUser = (e) => {
    e.preventDefault()
    
    setUser({
      login: loginRef.current.value,
      password: passwordRef.current.value
    })
  }

  // useEffect(() => {
  //   loginRef.current.focus()
  // }, [])

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
        <button type='submit' data-testid='loginButton'>Log in</button>
      </div>
    </form>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    setUser: (newUser) => dispatch(saveUserAction(newUser))
  }
}

export default connect(null, mapDispatchToProps)(Login)
