import { Field } from 'formik';
import styled from 'styled-components';

export const Container = styled.div`
max-width: 50rem;
margin: 2.5rem;
overflow: hidden;
`;

export const ErrorMessage = styled.div`
position: absolute;
color: red;
text-align: center;
font-size: 1.5rem;
font-weight: 700;
`;

export const StyledLabel = styled.label`
display: block;
font-size: 2rem;
font-weight: 700;
color: #86347a;
:not(:first-child){
    margin-top: 2rem;
}
`;

export const StyledField = styled(Field)`
display: block;
width: 100%;
height: 3.5rem;
margin-top: .5rem;
padding-left: .5rem;
outline: none;
border: .3rem solid #86347a;
border-radius: .7rem;
`;

export const FooterForm = styled.div`
display: flex;
justify-content: center;
margin-top: 2rem;
`