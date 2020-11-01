import React from 'react';
import { render, unmountComponentAtNode } from "react-dom";
import Loader from './index';
import { act } from "react-dom/test-utils";
let container = null;
beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});
describe('Should render the component', () => {
    it('check the component ', () => {
        act(() => {
            render(<Loader />, container);
        });
    })
})