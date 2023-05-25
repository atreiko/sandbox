import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import { Modal } from './Modal';

let container = null;
beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

it('Modal is rendered correctly', () => {
    const closeModal = jest.fn();
    const actions = [<div key="1">ModalActions</div>];

    act(() => {
        render(<Modal header="ModalHeader" text="ModalText" actions={actions} closeModal={closeModal} />, container);
    });

    const modal = container.getElementsByTagName('div')[1];
    const modalHeader = container.getElementsByTagName('div')[3];
    const modalText = container.getElementsByTagName('div')[4];
    const modalFooter = container.getElementsByTagName('div')[5];
    const modalCloseButton = container.querySelector('button');

    expect(modalHeader.textContent).toBe('ModalHeaderX');
    expect(modalText.textContent).toBe('ModalText');
    expect(modalFooter.textContent).toBe('ModalActions');
    expect(modalCloseButton.textContent).toBe('X');

    //Проверка кликов вне модального окна
    act(() => {
        for (let i = 0; i < 5; i++) {
            modal.dispatchEvent(new MouseEvent("click", { bubbles: true }));
        }
    });
    expect(closeModal).toHaveBeenCalledTimes(5);

    // Проверка кликов на кнопку Close
    act(() => {
        for (let i = 0; i < 5; i++) {
            modalCloseButton.dispatchEvent(new MouseEvent("click", { bubbles: true }));
        }
    });
    expect(closeModal).toHaveBeenCalledTimes(10);
})

