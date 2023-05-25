import React from 'react';
import PropTypes from 'prop-types';

import {StyledButton} from './StyledButton';

export const Button = (props) => {
    const { backgroundColor, text, onClick } = props;
    return (
        <>
            <StyledButton type="submit" onClick={onClick} style={{ background: backgroundColor }}>{text}</StyledButton>
        </>
    )
};

Button.propTypes = {
    backgroundColor: PropTypes.string,
    text: PropTypes.string,
    onClick: PropTypes.func,
}
