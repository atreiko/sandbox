import * as yup from 'yup';

const FIELD_REQUIRED = 'This field is required'

const schema = yup.object().shape({
  login: yup
    .string()
    .required(FIELD_REQUIRED)
    .email('This is not a valid email'),
  password: yup
    .string()
    .required(FIELD_REQUIRED)
    .min(6, 'Password should contain at least 6 characters'),
})

export default schema;