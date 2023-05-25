import React from 'react'
import { Formik, Form, Field } from 'formik';
import MyInput from './MyInput';

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

const validateForm = (values) => {
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

  return errors;
}

function FormikForm() {
  const register = (values, { setSubmitting }) => {
    console.log(values);
    setSubmitting(false);
  }

  return (
    <Formik
      initialValues={{
        login: 'admin@test.com',
        password: '',
        repeatPassword: ''
      }}
      onSubmit={register}
      validate={validateForm}
    >
      {(formikProps) => {
        return (
          <Form noValidate>
            <h3>Formik Form</h3>
            <Field component={MyInput} name='login' type='email' placeholder='Email' />
            <Field component={MyInput} name='password' type='password' placeholder='Password' />
            <Field component={MyInput} name='repeatPassword' type='password' placeholder='Repeat Password' />
            <div>
              <button type='submit' disabled={formikProps.isSubmitting}>Register</button>
            </div>
          </Form>
        )
      }}
    </Formik>
  )
}

export default FormikForm
