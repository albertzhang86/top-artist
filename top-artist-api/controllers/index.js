const express = require('express');
const router = express.Router();
const apiKey = require('../constants/config').APIKEY;
const LastFM = require('../models/last-fm')
const lastfm = new LastFM(apiKey);
router.route('/topartists')
.get((req, res) => {
  const {country, limit, page} = req.query
  lastfm.geoTopTracks({country, limit, page})
  .then((collection) => {
    collection.error ? res.status(400).json({message: collection.message}) : res.json(collection);
  })
  .catch((err) => {
    res.status(500).json({message: err.message});
  });
});

router.route('/topartists/:mbid')
.get((req, res) => {
  const {limit, page} = req.query
  lastfm.getTopAlbums({mbid: req.params.mbid, limit, page})
  .then((collection) => {
    collection.error ? res.status(400).json({message: collection.message}) : res.json(collection);
  })
  .catch((err) => {
    res.status(500).json({message: err.message});
  });
});
module.exports = router;
