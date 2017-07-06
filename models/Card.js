const mongoose = require('mongoose')
mongoose.Promise = require('bluebird')
// mongoose.connect('mongodb://localhost:27017/cards');

const cardSchema = new mongoose.Schema({
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  team: {type: String, required: true},
  position: {type: String, required: true},
  year: {type: Number, required: true},
  number: {type: Number, required: true},
  rookie: {type: Boolean, required: true},
})

const Card = mongoose.model('Card', cardSchema)

module.exports = Card;
