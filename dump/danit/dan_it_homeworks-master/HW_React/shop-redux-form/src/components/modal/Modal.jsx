import React from 'react';
import PropTypes from 'prop-types';

import {ContainerModal, ModalOverlay, ModalWindow, ModalHeader, CloseBtn, ModalBody, ModalFooter} from './StyledModal'

export const Modal = (props) => {
    const { header, text, closeModal, actions } = props;

    return (
        <ContainerModal>
            <ModalOverlay onClick={closeModal}>
                <ModalWindow onClick={(e) => e.stopPropagation()}>
                    <ModalHeader>
                        {header}
                        <CloseBtn onClick={closeModal}>&#10006;</CloseBtn>
                    </ModalHeader>
                    <ModalBody>{text}</ModalBody>
                    <ModalFooter>
                        {actions}
                    </ModalFooter>
                </ModalWindow>
            </ModalOverlay>
        </ContainerModal>
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