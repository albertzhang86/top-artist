import React, {Component} from 'react';
import TopArtistItem from './topArtistItem';
import Paginator from '../paginator';
export default class TopArtistsComponent extends Component {
  constructor(props) {
    super(props);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handlePageChange = this.handlePageChange.bind(this)
  }

  handleSearch(query) {
    this.props.searchTopArtists(query);
  }

  handleInputChange(country) {
    this.props.searchTopArtists({page: 1, country});
  }

  handlePageChange(page) {
    this.props.searchTopArtists({...this.props.query, page});
  }


  componentDidMount() {
    this.handleSearch(this.props.query);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.query.page !== nextProps.query.page || this.props.query.country !== nextProps.query.country ) {
      this.handleSearch(nextProps.query);
    }
  }

  render() {
    const { query, topArtists, searchInFlight } = this.props;
    const { artists, attr } = topArtists;
    const { country, page } = query;
    return (
      <div className="search-result-wrapper">
        <div className="row">
          <div className="col-xs-12 form-group">
            <input className="form-control" type="text" defaultValue={country} onChange={e => this.handleInputChange(e.target.value)} placeholder="Enter Country"/>
          </div>
        </div>
        <div className="row search-result-container">
          { artists && artists.length && (
            <div className="col-xs-12">
              <ul className="list-group">
                {
                  artists.filter((artist, index) => (artists.length - index) <= 5 ).map((artist, index) => (
                    <li className="list-group-item row" key={`li-${index}`}>
                    <TopArtistItem  {...artist} />
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
