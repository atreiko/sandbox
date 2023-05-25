import * as Yup from 'yup';


export const validationSchema = Yup.object().shape({
    name: Yup.string()
        .matches(/^[a-zA-Zа-яА-Я]+$/, 'Allowed characters for First Name is a-z, A-Z, а-я, А-Я')
        .min(2, 'Your name must be two characters!')
        .max(25, 'Your name must be less than twenty five characters!')
        .required('Required'),
    surname: Yup.string()
        .matches(/^[a-zA-Zа-яА-Я]+$/, 'Allowed characters for Last Name is a-z, A-Z, а-я, А-Я')
        .min(2, 'Your surname must be two characters!')
        .max(25, 'Your surname must be less than twenty five characters!')
        .required('Required'),
    age: Yup.number()
        .lessThan(100, 'You are too old to make a purchase!')
        .moreThan(18, 'You are too young to make a purchase!')
        .required('Required'),
    adress: Yup.string()
        .matches(/^[a-zA-Zа-яА-Я0-9\s,.]+$/, 'That is not a valid adress!')
        .min(5, 'Your adress is too short!')
        .max(100, 'Your adress is too long!')
        .required('Required'),
    phone: Yup.string()
        .matches(/^3?8?[0-9-+\s()]{10,20}$/, 'That is not a valid phone number!')
        .required('Required'),

})