import React from 'react';
import { render, unmountComponentAtNode } from "react-dom";
import Cards from './index';
import { act } from "react-dom/test-utils";
let container = null;
const props = {
    data: [{
        links: { mission_patch: 'url' },
        launch_success: true,
        launch_year: '2006',
        mission_name: 'test',
        flight_number: '1',
        mission_id: ['1230'],
        rocket: {
            first_stage: { cores: [{ land_success: false }] }
        }
    }]
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
            render(<Cards {...props} />, container);
        });
    })
})