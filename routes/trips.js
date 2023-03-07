var express = require('express');
var router = express.Router();
require("../models/connection")

const Trip = require('../models/Trips');

// route GET pour ....

router.get('/', (req, res) => {

  //etape 1 Récupération data user
  const newTrip = new Trip({
    departure : req.body.departure,
    arrival : req.body.arrival,
    date: req.body.date,
    price: req.body.price
  })

  //etape 2 comparaison avec la DB.
  Trip.find({departure : req.body.departure, arrival: req.body. arrival})
  .then(data => {
    console.log(data);
    if (data) {
      res.json({ result: true, data});
    } else {
      res.json({ result: false, error: "Le trajet n'existe pas" });
    }
  });
})

 
module.exports = router;
