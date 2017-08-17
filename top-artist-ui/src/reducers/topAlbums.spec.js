import topAlbumsReducer from './topAlbums';

import * as actionTypes from '../constants/actionTypes';
describe('topAlbumsReducer', () => {
    it('should return initial state', () => {
        const initialState = topAlbumsReducer(undefined, {});
        expect(initialState).toEqual({});
    });

    it('should respond to REQUESTED_TOP_ALBUMS', () => {
        const clearedState = topAlbumsReducer({}, {
            type: actionTypes.REQUESTED_TOP_ALBUMS
        });
        expect(clearedState).toEqual({});
    });

    it('should respond to RECEIVED_TOP_ALBUMS', () => {
        const albumsState = topAlbumsReducer({}, {
            type: actionTypes.RECEIVED_TOP_ALBUMS,
            topAlbums: {
              attr: {page: 1, artist: 'ab'},
              albums: [{mbid: '1'}]
            }
        });
        expect(albumsState).toEqual({
          attr: {page: 1, artist: 'ab'},
          albums: [{mbid: '1'}]
        });
    });
});
