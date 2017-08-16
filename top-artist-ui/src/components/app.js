import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {searchWeather, setLoading} from '../actions';
//import SearchBox from './search-box/search-box';
import './app.css';
const App = ({children}) => {
    return (
      <div className="row">
        <div className="col-xs-offset-0 col-sm-offset-2"/>
        <div className="col-xs-12 col-sm-8">
        </div>
      </div>
    )
};

export default App;
App.propTypes = {
  children: PropTypes.array.isRequired
};
