import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import { Button } from './Button';

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

it('Button is rendered correctly', () => {
    const onClick = jest.fn();

    act(() => {
       render(<Button text="SomeText" backgroundColor="red" onClick={onClick}/>, container) ;
    });

    const button = container.querySelector('button');

    expect(button.textContent).toBe('SomeText');
    expect(button.getAttribute("style")).toBe('background: red;');

    act(() => {
        for (let i = 0; i < 5; i++) {
        button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
        }
    });

    expect(onClick).toHaveBeenCalledTimes(5);

});