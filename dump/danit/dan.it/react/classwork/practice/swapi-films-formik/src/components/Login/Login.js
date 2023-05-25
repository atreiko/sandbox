import { withFormik } from 'formik';
import React from 'react'
import { Redirect } from 'react-router-dom';
import MyInput from './MyInput';
import schema from './schema';

function Login({ isAuth, handleSubmit }) {
  if (isAuth) {
    return <Redirect to='/' />
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div>
        <MyInput name='login' type='text' placeholder='Email' />
      </div>
      <div>
        <MyInput name='password' type='password' placeholder='Password' />
      </div>
      <div>
        <button type='submit'>Log in</button>
      </div>
    </form>
  )
}

const logInUser = (values, { props }) => {
  props.setUser(values)
}

export default withFormik({
  mapPropsToValues: () => ({
    login: '',
    password: '',
  }),
  handleSubmit: logInUser,
  validationSchema: schema
})(Login)
