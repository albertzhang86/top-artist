import React from 'react';
import { Link } from 'react-router';

const TopArtistItem = ({name, image, listeners, mbid}) => (
  <div className="result-item row">
    <div className="col-xs-12 col-sm-4">
      <Link  className="thumbnail" to={`/topartists/${mbid}`}>
        <img src={image[3]['#text']} alt={`top albums of ${name}`}/>
      </Link>
    </div>
    <div className="col-xs-12 col-sm-8">
      <h3>{name}</h3>
      <p>
        <strong>Listener: </strong>
        {listeners}
      </p>
    </div>
  </div>
);
export default TopArtistItem
