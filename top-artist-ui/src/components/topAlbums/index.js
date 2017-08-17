import React from 'react';
import { connect } from 'react-redux';
import { requestTopAlbumByArtist } from '../../actions';
import TopAlbumsComponent from './topAlbums.component';

export default connect(
  ({ topAlbums }, ownProps) => ({
    topAlbums,
    mbid: ownProps.params.mbid,
    page: ownProps.location.query.page
  }),
  { requestTopAlbumByArtist }
)(TopAlbumsComponent);
