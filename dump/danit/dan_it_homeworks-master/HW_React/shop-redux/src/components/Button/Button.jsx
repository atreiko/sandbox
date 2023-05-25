import React from 'react';
import PropTypes from 'prop-types';

import {StyledButton} from './StyledButton';

export const Button = (props) => {
    const { backgroundColor, text, onClick } = props;
    return (
        <>
            <StyledButton onClick={onClick} style={{ background: backgroundColor }}>{text}</StyledButton>
        </>
    )
};

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