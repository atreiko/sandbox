import React from 'react';
import PropTypes from 'prop-types';

export const Button = ({
    backgroundColor, text, showModalFirst, className, showModalSecond
}) => {
    return (
        <>
            <button onClick={showModalFirst || showModalSecond} style={{ background: backgroundColor }} className={className}>{text}</button>
        </>
    )
};

Button.propTypes = {
    backgroundColor: PropTypes.string,
    text: PropTypes.string,
   
}

Button.defaultProps = {
    backgroundColor: 'red',
    text: 'Ok',
    
}