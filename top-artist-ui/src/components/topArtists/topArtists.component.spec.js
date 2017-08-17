import React from 'react';
import { mount, render, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import TopArtistsComponent from './topArtists.component';
import { renderComponentFactory } from '../../utils/testHelper';
import * as actionTypes from '../../constants/actionTypes';

const mockSearchTopArtists = jest.fn();

const renderComponent = renderComponentFactory(TopArtistsComponent, {
    searchTopArtists: mockSearchTopArtists,
    query: {
        page: 1,
        country: 'china'
    },
    topArtists: {
      artists: [{
        name: 'ar1',
        listeners: 2,
        mbid: '1',
        image: [{}, {}, {}, {"#test": 'http://mock.png'}]
      }, {
        name: 'ar2',
        listeners: 3,
        mbid: '2',
        image: [{}, {}, {}, {"#test": 'http://mock1.png'}]
      }],
      attr: {
        page: 1,
        totalPages: 3
      }
    },
});

describe('TopArtists', () => {
    it('renders correctly', () => {
        const component = renderComponent(renderer.create);

        expect(component).toMatchSnapshot();

        component.unmount();
    });

    it('query top artist when mount', () => {
        const component = renderComponent(shallow);
        expect(mockSearchTopArtists).toHaveBeenCalledWith({
            page: 1,
            country: 'china'
        });
        component.unmount();
    });

    it('query top artist when query changed', () => {
        const component = renderComponent(shallow);

        component.setProps({query: {
            page: 2,
            country: 'china'
        }})

        expect(mockSearchTopArtists).toHaveBeenCalledWith(
          {
              page: 2,
              country: 'china'
          }
        );
        component.unmount();
    });
    it('query top artist when search input changed', () => {
       const component = renderComponent(shallow);

       component.find('.form-control').simulate('change', {
           target: {
             value: 'spain'
           }
       });
       expect(mockSearchTopArtists).toHaveBeenCalledWith(
         {
             page: 1,
             country: 'spain'
         }
       );
       component.unmount();
   });

});
