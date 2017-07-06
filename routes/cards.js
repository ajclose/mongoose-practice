const express = require("express");
const router = express.Router();
const Card = require("../models/Card");

router.get('/cards/new', function(req, res) {
  res.render('new')
})

router.get("/cards/:id/edit", function(req,res){

  Card.findOne({"_id": req.params.id})
  .then(function(card){
    res.render("edit", {
      card: card
    })
  })
})

router.post("/cards", function(req, res){

  const card = new Card()
  card.firstName = req.body.firstName
  card.lastName = req.body.lastName
  card.team = req.body.team
  card.position = req.body.position
  card.year = parseInt(req.body.year)
  card.number = parseInt(req.body.number)
  card.rookie = req.body.rookie
  card.save()
  .then( function(card){
    res.redirect('/')
  })
  .catch( function(validationError){
    res.render("new", {
      card: card,
      validationError: validationError
    })
  })
})

router.post("/cards/:id", function(req,res){

  Card.findOne({"_id": req.params.id})
  .then( function(card){
    card.firstName = req.body.firstName
    card.lastName = req.body.lastName
    card.team = req.body.team
    card.position = req.body.position
    card.year = parseInt(req.body.year)
    card.number = parseInt(req.body.number)
    card.rookie = req.body.rookie
    card.save()
    .then( function(card){
      res.redirect("/")
    })
    .catch( function(validationError){
      res.render("edit", {
        card: card,
        validationError: validationError
      })
    })

  })
})

module.exports = router;
