const rp = require('request-promise');
const basUrl = 'http://ws.audioscrobbler.com/2.0/';
class LastFM {
  constructor (apiKey) {
    this.apiKey = apiKey
  }

  _sendRequest (params = {}) {
    const options = {
      uri: basUrl,
      qs: Object.assign({}, params, {
        api_key: this.apiKey,
        format: 'json',
      }),
      headers: {
        'User-Agent': 'top-artist'
      },
      json: true
    };
    return rp(options);
  }

  geoTopTracks (params) {
    const {country, limit, page} = params;
    const options = {
      method: 'geo.getTopArtists',
      autocorrect: 1,
      country,
      limit,
      page
    }
    return this._sendRequest(options);
  }

  getTopAlbums (params) {
    const {limit, page, mbid} = params;
    const options = {
      method: 'artist.gettopalbums',
      autocorrect: 1,
      mbid,
      limit,
      page
    }
    return this._sendRequest(options);
  }

}

module.exports = LastFM;
