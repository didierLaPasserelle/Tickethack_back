let mongoose = require('mongoose');

let tripSchema = mongoose.Schema({
    departure: String,
    arrival: String,
    date: Date,
    price: Number,
});

let Trip = mongoose.model('Trips', tripSchema);

module.exports = Trip;