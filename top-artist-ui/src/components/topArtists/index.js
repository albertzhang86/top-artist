import React from 'react';
import { connect } from 'react-redux';
import { searchTopArtists } from '../../actions';
import TopArtistsComponent from './topArtists.component';

const mapStateToProps = ({ routing, topArtists, searchInFlight }) => ({
  query: routing.locationBeforeTransitions.query,
  topArtists: topArtists,
  searchInFlight
});

export default connect(mapStateToProps, { searchTopArtists })(TopArtistsComponent);
