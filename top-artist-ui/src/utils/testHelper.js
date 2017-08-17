import React from 'react';
import { merge } from 'lodash';

/* eslint-disable import/prefer-default-export */
export const renderComponentFactory = (Component, defaultProps, options) => {
    const renderComponent = (renderFunction, customProps = {}) => {
        const props = merge({}, defaultProps, customProps);

        return renderFunction(<Component {...props} />, options);
    };

    return renderComponent;
};
