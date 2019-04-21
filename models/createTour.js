const addedPlaces = [];

// clear forms of Modal Pop-up
function modalReset() {
    $("#placeName").val('');
    $("#lat").val('');
    $("#lng").val('');
    $("#placeType").val('');
}

$("#savePlace").click(() => {
    let placesNameList ="";
    let newPlace = {
        name: $("#placeName").val(),
        lat: $("#lat").val(),
        lng: $("#lng").val(),
        type: $("#placeType").val()
    };
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
});
