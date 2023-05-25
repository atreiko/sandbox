import React, { useRef, useState } from 'react'

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

function UncontrolledForm() {
  const [errors, setErrors] = useState({});
  const loginRef = useRef(null);
  const passwordRef = useRef(null);
  const repeatPasswordRef = useRef(null);

  const validateForm = () => {
    const login = loginRef.current.value
    const password = passwordRef.current.value
    const repeatPassword = repeatPasswordRef.current.value
    const errors = {}

    if (!EMAIL_REGEX.test(login)) {
      errors.login = 'This is not a valid email'
    }

    if (!login) {
      errors.login = 'This field is required'
    }

    if (password !== repeatPassword) {
      errors.repeatPassword = 'Passwords do not match'
    }

    if (password.length < 8) {
      errors.password = 'Password should contain at least 8 characters'
    }

    if (!password) {
      errors.password = 'This field is required'
    }

    if (!repeatPassword) {
      errors.repeatPassword = 'This field is required'
    }

    setErrors(errors)
    return Object.keys(errors).length === 0
  }
  
  const register = (e) => {
    e.preventDefault()

    const isValid = validateForm()

    if (!isValid) {
      return
    }

    console.log(
      loginRef.current.value,
      passwordRef.current.value,
      repeatPasswordRef.current.value
    )
  }

  return (
    <form onSubmit={register} noValidate>
      <h3>UncontrolledForm</h3>
      <div>
        <input type='email' placeholder='Email' ref={loginRef} defaultValue='admin@test.com' />
        {errors.login && <span className='error'>{errors.login}</span>}
      </div>
      <div>
        <input type='password' placeholder='Password' ref={passwordRef} />
        {errors.password && <span className='error'>{errors.password}</span>}
      </div>
      <div>
        <input type='password' placeholder='Repeat Password' ref={repeatPasswordRef} />
        {errors.repeatPassword && <span className='error'>{errors.repeatPassword}</span>}
      </div>
      <div>
        <button type='submit'>Register</button>
      </div>
    </form>
  )
}

export default UncontrolledForm
