import React from 'react';
import PropTypes from 'prop-types';
import { Button } from './Button'

export const Modal = ({
    header, text, className, closeModal, addToBasket, item
}) => {

    return (
        <div className='modal'>
            <div className='modal-overlay' onClick={closeModal}>
                <div className={className.modal} onClick={(e) => e.stopPropagation()}>
                    <div className={className.header}>
                        {header}
                        <button className={className.closeButton} onClick={closeModal}>&#10006;</button>
                    </div>
                    <div className={className.body}>
                        {text}
                    </div>
                    <div className={className.footer}>
                        <Button text='Ok' className='button__controls' backgroundColor='#86347a'
                            addToBasket={() => {
                                addToBasket(item)
                                closeModal()
                            }
                            
                            }
                        />
                        <Button text='Cancel' className='button__controls' backgroundColor='#86347a' showModal={closeModal} />
                    </div>
                </div>
            </div>
        </div>
    )
};

Modal.propTypes = {
    header: PropTypes.string,
    closeButton: PropTypes.bool,
    text: PropTypes.string,
    addToLocal: PropTypes.func
}

Modal.defaultProps = {
    header: 'Modal title',
    closeButton: true,
}