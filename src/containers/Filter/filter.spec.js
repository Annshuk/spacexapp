import React from 'react';
import { render, unmountComponentAtNode } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Filter from './index';
import { act } from "react-dom/test-utils";
let container = null;
const props = {
    records: ['2001', '2002'],
    filterBy: '',
    activeClass: { lyActive: '2001' }
}
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
            render(<Router><Filter {...props} /></Router>, container);
        });
    });
})