import React from 'react';
import PropTypes from 'prop-types';

export const Modal = ({
    header, text, actions, className, closeModalFirst, closeModalSecond
}) => {

    return (
        <div className='modal__wrapper-item'>
            <div className='modal-overlay' onClick={closeModalFirst || closeModalSecond}>
                <div className={className.modal} onClick={(event) => event.stopPropagation()}>
                    <div className={className.header}>
                        {header}
                        <button className={className.closeButton} onClick={closeModalFirst || closeModalSecond}>&#10006;</button>
                    </div>
                    <div className={className.body}>
                        {text}
                    </div>
                    <div className={className.footer}>
                        {actions[0]}
                        {actions[1]}
                    </div>
                </div>
            </div>
        </div>
    )
};

Modal.propTypes = {
    header: PropTypes.string,
    text: PropTypes.string,
    actions: PropTypes.array,
}

Modal.defaultProps = {
    header: 'Modal title',

}