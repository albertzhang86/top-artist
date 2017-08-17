const proxyquire = require('proxyquire');
describe('LastFM', () => {
  const promise = new Promise((resolve, reject) => {
    resolve({});
  });
  const mockRp = jasmine.createSpy('rp').and.returnValue(promise);
  const LastFM = proxyquire('../../models/last-fm', { 'request-promise': mockRp});
  let lastFm;
  beforeEach(() => {
    lastFm = new LastFM('fake key');
  });
  it('should assign api key to instance', () => {
    expect(lastFm.apiKey).toEqual('fake key');
  });

  describe('when getting geoTopTracks', () => {
    beforeEach(() => {
      lastFm.geoTopTracks({country: 'china', page: 1, limit: 5});
    });

    it('should call rp to send request', () => {
      expect(mockRp).toHaveBeenCalledWith({
        uri: 'http://ws.audioscrobbler.com/2.0/',
        qs: {
          method: 'geo.getTopArtists',
          autocorrect: 1,
          country: 'china',
          page: 1,
          limit: 5,
          api_key: 'fake key',
          format: 'json',
        },
        headers: {
          'User-Agent': 'top-artist'
        },
        json: true
      })
    });
  });

  describe('when getting getTopAlbums', () => {
    beforeEach(() => {
      lastFm.getTopAlbums({mbid: '123', page: 1, limit: 5});
    });

    it('should call rp to send request', () => {
      expect(mockRp).toHaveBeenCalledWith({
        uri: 'http://ws.audioscrobbler.com/2.0/',
        qs: {
          method: 'artist.gettopalbums',
          autocorrect: 1,
          mbid: '123',
          page: 1,
          limit: 5,
          api_key: 'fake key',
          format: 'json',
        },
        headers: {
          'User-Agent': 'top-artist'
        },
        json: true
      })
    });
  });
});
