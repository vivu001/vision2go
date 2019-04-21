const mongoose = require('mongoose');

// create Schema of place
const placeSchema = new mongoose.Schema({
    name: String,
    lat: Number,
    lng: Number,
    type: String
});
// create Model of place
const placeModel = mongoose.model("Place", placeSchema);

// create Schema of tour
const tourSchema = new mongoose.Schema({
    name: String,
    places: [placeSchema],
    rate: Number // Array<Number>
});
// create Model of tour
const tourModel = mongoose.model("Tour", tourSchema);

// export place- & tour Model
module.exports = {
    placeModel() { return placeModel },
    tourModel() { return tourModel }
};
