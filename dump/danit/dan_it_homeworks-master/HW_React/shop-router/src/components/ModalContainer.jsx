import React, { useState } from 'react';
import { Modal } from './Modal';
import { Button } from './Button'

import { modalContent } from '../content/modalContent.js'

export const ModalContainer = ({
    addToBasket,item
}) => {
    const { header, text, textBtn, colorBtn } = modalContent;

    const [active, setActive] = useState(false);

    const activeModal = () => setActive(!active)

    const closeModal = () => setActive(false)
    
    return (
        <>
            <div className="modal">
                <Button showModal={activeModal} text={textBtn} backgroundColor={colorBtn} className='button' />
                {
                    active && <Modal
                        className={{
                            modal: 'modal-window',
                            header: 'modal-window__header',
                            body: 'modal-window__body',
                            footer: 'modal-window__footer',
                            closeButton: 'modal-window__header-close-btn'
                        }}
                        header={header}
                        text={text}
                        textBtn={textBtn}
                        colorBtn={colorBtn}
                        closeModal={closeModal}
                        addToBasket={addToBasket}
                        item={item}
                    />
                }
            </div>
        </>
    )
}