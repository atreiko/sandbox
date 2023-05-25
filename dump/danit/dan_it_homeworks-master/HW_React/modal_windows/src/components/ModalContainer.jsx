import React from 'react';
import { Modal } from './Modal';
import { Button } from './Button'
import { firstModal, secondModal } from '../modalContent/index.js'
import { useState } from 'react';

export const ModalContainer = () => {
    const { firstModalTitle, firstModalText, textBtnFirst, colorBtnFirst } = firstModal;
    const { secondModalTitle, secondModalText, textBtnSecond, colorBtnSecond } = secondModal;

    const [activeFirst, setActiveFirst] = useState(false);
    const [activeSecond, setActiveSecond] = useState(false)

    const activeFirstModal = () => setActiveFirst(!activeFirst);
    const activeSecondModal = () => setActiveSecond(!activeSecond)

    const closeModalFirst = () => setActiveFirst(false)
    const closeModalSecond = () => setActiveSecond(false)

    return (
        <>
            <div className='wrap-modal'>
                <div className='modal__wrapper'>
                    <Button showModalFirst={activeFirstModal} text={textBtnFirst} backgroundColor={colorBtnFirst} className='button' />
                    {
                        activeFirst && <Modal
                            className={{
                                modal: "modal-window-first",
                                header: 'modal-window-first__header-first',
                                body: 'modal-window-first__body-first',
                                footer: 'modal-window-first__footer-first',
                                closeButton: 'modal-window-first__close-btn-first'
                            }}
                            header={firstModalTitle}
                            text={firstModalText}
                            textBtn={textBtnFirst}
                            colorBtn={colorBtnFirst}
                            closeModalFirst={closeModalFirst}
                            actions={[
                                <Button text='Ok' className='button__controls' backgroundColor='#B3382C' showModalFirst={closeModalFirst} />,
                                <Button text='Cansel' className='button__controls' backgroundColor='#B3382C' showModalFirst={closeModalFirst} />
                            ]}
                        />
                    }
                </div>
                <div className='modal__wrapper'>
                    <Button showModalSecond={activeSecondModal} text={textBtnSecond} backgroundColor={colorBtnSecond} className='button' />
                    {
                        activeSecond && <Modal
                            className={{
                                modal: 'modal-window-second',
                                header: 'modal-window-second__header-second',
                                body: 'modal-window-second__body-second',
                                footer: 'modal-window-second__footer-second',
                                closeButton: 'modal-window-second__close-btn-second'
                            }}
                            header={secondModalTitle}
                            text={secondModalText}
                            textBtn={textBtnSecond}
                            colorBtn={colorBtnSecond}
                            closeModalSecond={closeModalSecond}
                            actions={[
                                <Button text='Ready' className='button__controls' backgroundColor='#4935E1' showModalSecond={closeModalSecond} />,
                                <Button text='Return' className='button__controls' backgroundColor='#4935E1' showModalSecond={closeModalSecond} />
                            ]}
                        />
                    }
                </div>
            </div>
        </>
    )
}