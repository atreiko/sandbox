import React, { useEffect, useState } from 'react'

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

function ControlledForm() {
  const [values, setValues] = useState({
    login: 'admin@test.com',
    password: '',
    repeatPassword: ''
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const validateForm = () => {
    const { login, password, repeatPassword } = values;
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

    setTouched({login: true, password: true, repeatPassword: true})
    const isValid = validateForm()

    if (!isValid) {
      return
    }

    console.log(values)
  }

  const handleChange = (e) => {
    setValues({...values, [e.target.name]: e.target.value})
  }

  const handleTouched = (e) => {
    setTouched({...touched, [e.target.name]: true})
  }

  useEffect(() => {
    validateForm()
  }, [values])

  return (
    <form onSubmit={register} noValidate>
      <h3>ControlledForm</h3>
      <div>
        <input name='login' type='email' placeholder='Email' value={values.login} onChange={handleChange} onBlur={handleTouched} />
        {errors.login && touched.login && <span className='error'>{errors.login}</span>}
      </div>
      <div>
        <input name='password' type='password' placeholder='Password' value={values.password} onChange={handleChange} onBlur={handleTouched} />
        {errors.password && touched.password && <span className='error'>{errors.password}</span>}
      </div>
      <div>
        <input name='repeatPassword' type='password' placeholder='Repeat Password' value={values.repeatPassword} onChange={handleChange} onBlur={handleTouched} />
        {errors.repeatPassword && touched.repeatPassword && <span className='error'>{errors.repeatPassword}</span>}
      </div>
      <div>
        <button type='submit'>Register</button>
      </div>
    </form>
  )
}

export default ControlledForm
