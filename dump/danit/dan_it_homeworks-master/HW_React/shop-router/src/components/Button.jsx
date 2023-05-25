import React from 'react';
import PropTypes from 'prop-types';

export const Button = ({
    backgroundColor, text, showModal, className, addToBasket
}) => {
    return (
        <>
            <button onClick={showModal || addToBasket} style={{ background: backgroundColor }} className={className}>{text}</button>
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