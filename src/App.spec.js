import React from 'react';
import { render, unmountComponentAtNode } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import App from './App';
import { act } from "react-dom/test-utils";
let container = null;
const middlewares = [thunk]
const iniState = {
    spaceData: [],
    loading: true,
    filterData: ['2001', '2002']
}
const mockStore = configureMockStore(middlewares)
const store = mockStore(iniState)
const props = {
    history: { location: { pathname: '/launch=2001', search: '' } },
    match: { url: '/some url' },
    spaceData: [],
    loadin: false,
    filterData: ['2001']
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
            render(<Router><App {...props} store={store} /></Router>, container);
        });
    })
})

