import React, { useEffect } from 'react';
import { Formik, Form } from 'formik';
import { connect } from 'react-redux';


import { validationSchema } from './validationSchema';
import { Container, StyledField, StyledLabel, ErrorMessage, FooterForm } from './StyledCreateForm';
import { Button } from '../button/Button';
import { createForm, selectValues, selectOrders, createOrders } from '../../store/form';
import { getProducts } from '../../store/products';

const mapStateToProps = state => ({
    value: selectValues(state),
    orders: selectOrders(state)
})


export const CreateForm = connect(mapStateToProps, { createForm, createOrders, getProducts })((
    { value, orders, createForm, getProducts, createOrders }) => {

    useEffect(() => {
        getProducts();
    }, [orders, getProducts])

    const onSubmit = (values, actions) => {
        console.log(values);
        createForm();
        createOrders(values);
        actions.resetForm(value);
    }

    const btnForm = {
        text: 'CHECKOUT',
        backgroundColor: '#86347a'
    };


    return (
        <Container>
            <Formik
                initialValues={value}
                onSubmit={onSubmit}
                validationSchema={validationSchema}
            >
                {({ errors, touched }) => (
                    <Form>
                        <StyledLabel htmlFor="name">First Name</StyledLabel>
                        <StyledField id="name" name="name" placeholder="Enter your name" />
                        {errors.name && touched.name ? (
                            <ErrorMessage>{errors.name}</ErrorMessage>
                        ) : null}

                        <StyledLabel htmlFor="surname">Last Name</StyledLabel>
                        <StyledField id="surname" name="surname" placeholder="Enter your surname" />
                        {errors.surname && touched.surname ? (
                            <ErrorMessage>{errors.surname}</ErrorMessage>
                        ) : null}

                        <StyledLabel htmlFor="age">Age</StyledLabel>
                        <StyledField id="age" name="age" type="number" placeholder="Enter your age" />
                        {errors.age && touched.age ? (
                            <ErrorMessage>{errors.age}</ErrorMessage>
                        ) : null}

                        <StyledLabel htmlFor="adress">Adress</StyledLabel>
                        <StyledField id="adress" name="adress" placeholder="Enter your adress" />
                        {errors.adress && touched.adress ? (
                            <ErrorMessage>{errors.adress}</ErrorMessage>
                        ) : null}

                        <StyledLabel htmlFor="phone">Phone</StyledLabel>
                        <StyledField id="phone" name="phone" placeholder="Enter your phone number +3 (8)" />
                        {errors.phone && touched.phone ? (
                            <ErrorMessage>{errors.phone}</ErrorMessage>
                        ) : null}
                        <FooterForm>
                            <Button {...btnForm} />
                        </FooterForm>
                    </Form>)
                }
            </Formik>
        </Container>
    )
})

