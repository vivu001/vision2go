/*const tour = require('../models/tour.js');
const placeModel = tour.placeModel();*/

// create an array of added places
const addedPlaces = [];

// handle click "save Place" button
$("#savePlace").click(() => {
    if (areFilledFields()) {
        let placesNameList = "";
        let newPlace = {
            name: $("#placeName").val(),
            lat: $("#lat").val(),
            lng: $("#lng").val(),
            type: $("#placeType").val()
        };

       /* let newPlace = placeModel({
            name: $("#placeName").val(), lat: $("#lat").val(), lng: $("#lng").val(),
            type: $("#placeType").val(), image: "imageURL"});*/
        alert("Successfully added: " + newPlace.name);

        addedPlaces.push(newPlace);
        addedPlaces.forEach((place) => {
            if (placesNameList === "") {
                placesNameList = place.name;
            } else {
                placesNameList += ", " + place.name;
            }
        });
        // add names of places to form in page "Creat a new tour"
        $("#places").val(placesNameList);
        modalReset();
    } else {
        alert("All fields must be filled in !")
    }
});

// check if all fields are filled
function areFilledFields() {
    return ($("#placeName").val() && $("#lat").val() &&
        $("#lng").val() && $("#placeType").val());
}

// clear forms of Modal Pop-up
function modalReset() {
    $("#placeName").val('');
    $("#lat").val('');
    $("#lng").val('');
    $("#placeType").val('');
}

function newPlaces() {
    return addedPlaces;
}

/*module.exports = {
    newPlaces: newPlaces()
};*/
