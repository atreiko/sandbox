import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


export const Button = (props) => {
    const { backgroundColor, text, onClick } = props;
    return (
        <>
            <StyledButton onClick={onClick} style={{ background: backgroundColor }}>{text}</StyledButton>
        </>
    )
};

const StyledButton = styled.button`
padding: 1.5rem;
font-size: 1.5rem;
font-weight: 700;
outline: none;
border: none;
border-radius: 1.5rem;
color: #ffffff;
`

Button.propTypes = {
    backgroundColor: PropTypes.string,
    text: PropTypes.string,
    onClick: PropTypes.func,
}

Button.defaultProps = {
    backgroundColor: 'red',
    text: 'Ok',
    onClick: () => { console.log('Hello') },
}