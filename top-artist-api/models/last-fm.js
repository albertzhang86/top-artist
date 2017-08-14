const rp = require('request-promise');
const basUrl = 'https://ws.audioscrobbler.com/2.0/';
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
      country,
      limit,
      page
    }
    return this._sendRequest(options)
  }

}

module.exports = LastFM
