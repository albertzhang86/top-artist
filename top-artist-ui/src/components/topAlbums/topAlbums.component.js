import React, {Component} from 'react';
import { Link } from 'react-router';
import TopAlbumItem from './topAlbumItem';
import Paginator from '../paginator';
export default class TopAlbumsComponent extends Component {
  constructor(props) {
    super(props);
    this.handlePageChange = this.handlePageChange.bind(this);
  }

  componentDidMount() {
    this.props.requestTopAlbumByArtist({ mbid: this.props.mbid, page: this.props.page || 1});
  }
  handlePageChange(page) {
    this.props.requestTopAlbumByArtist({mbid: this.props.mbid, page});
  }

  render() {
    const { mbid, page, topAlbums, searchInFlight} = this.props;
    const { albums, attr } = topAlbums;
    return (
      <div className="search-result-wrapper">
        {
          attr && attr.artist && (
            <div className="row">
              <ol className="breadcrumb">
                <li><Link to="/">Home</Link></li>
                <li className="active">{attr.artist}</li>
              </ol>
            </div>
          )
        }

        <div className="row search-result-container">
          { albums && albums.length && (
            <div className="col-xs-12">
              <ul className="list-group">
                {
                  albums.filter((album, index) => (albums.length - index) <= 5 ).map((album, index) => (
                    <li className="list-group-item row" key={`li-${index}`}>
                      <TopAlbumItem {...album} />
                    </li>
                  ))
                }
              </ul>
              <Paginator totalPages={attr.totalPages} page={attr.page || page} handleSelect={this.handlePageChange}/>
            </div>
          )}
        </div>
      </div>
    );
  }
}
