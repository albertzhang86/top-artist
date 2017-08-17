import React from 'react';
import { Link } from 'react-router';

const TopAlbumItem = ({name, image, playcount, url}) => (
  <div className="result-item row">
    <div className="col-xs-12 col-sm-4">
      <a className="thumbnail" href={url}>
        <img src={image[3]['#text']} alt={`albums cover ${name}`}/>
      </a>
    </div>
    <div className="col-xs-12 col-sm-8">
      <h3>{name}</h3>
      <p>
        <strong>Play Count: </strong>
        {playcount}
      </p>
    </div>
  </div>
);
export default TopAlbumItem
