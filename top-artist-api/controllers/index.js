const express = require('express');
const router = express.Router();
const apiKey = require('../constants/config').APIKEY;
const LastFM = require('../models/last-fm')
const lastfm = new LastFM(apiKey);
router.route('/topartists')
.get((req, res) => {
  lastfm.geoTopTracks({country: req.query.country})
  .then((collection) => {
    collection.error ? res.status(400).json({message: collection.message}) : res.json(collection);
  })
  .catch((err) => {
    res.status(500).json({error: true, data: {message: err.message}});
  });
});
module.exports = router;
