import React from 'react';
import { shallow } from 'enzyme';
import { create } from 'react-test-renderer';
import App from './app.js';

describe('App', () => {
    it('should render correctly', () => {
        const component = create(
            <App>
                <div>Children of the App</div>
            </App>
        );
        expect(component).toMatchSnapshot();
    });

    it('should re-render when props change', () => {
        const wrapper = shallow(
            <App>
                <div>The original string</div>
            </App>
        );

        wrapper.setProps({
            children: <div>A new string</div>,
        });

        expect(wrapper.text()).toBe('A new string');
    });
});
