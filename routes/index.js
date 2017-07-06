const express = require('express')
const router = express.Router()
const Card = require("../models/Card")

router.get('/', function(req, res) {
  Card.find()
  .then(function(cards) {
    res.render('index', {
      cards: cards
    })
  })
})




module.exports = router;
