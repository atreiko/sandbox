import React from 'react'
import { withFormik } from 'formik';
import MyInput2 from './MyInput2';
import schema from './schema';

function FormikForm2(props) {
  return (
    <form onSubmit={props.handleSubmit} noValidate>
      <h3>Formik Form 2</h3>
      <MyInput2 name='login' type='email' placeholder='Email' />
      <MyInput2 name='password' type='password' placeholder='Password' />
      <MyInput2 name='repeatPassword' type='password' placeholder='Repeat Password' />
      <div>
        <button type='submit' disabled={props.isSubmitting}>Register</button>
      </div>
    </form>
  )
}

const register = (values, { setSubmitting }) => {
  console.log(values);
  setSubmitting(false);
}

export default withFormik({
  mapPropsToValues: (props) => ({
    login: 'admin@test.com',
    password: '',
    repeatPassword: ''
  }),
  handleSubmit: register,
  validationSchema: schema
})(FormikForm2)
