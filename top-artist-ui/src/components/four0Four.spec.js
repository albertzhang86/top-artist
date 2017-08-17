import React from 'react';
import { shallow } from 'enzyme';
import { create } from 'react-test-renderer';
import Four0Four from './four0Four.js';

describe('Four0Four', () => {
    it('should render correctly', () => {
        const component = create(
            <Four0Four/>
        );
        expect(component).toMatchSnapshot();
    });
});
