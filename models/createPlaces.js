// create an array of added places
const addedPlaces = [];

// handle click "save Place" button
$('#savePlace').click(() => {
    if (areFilledFields()) {
        let placesNameList = "";
        let newPlace = {
            name: $("#placeName").val(),
            lat: $("#lat").val(),
            lng: $("#lng").val(),
            type: $("#placeType").val(),
            image: $("#placeImage").val()
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
    } else {
        alert("All fields must be filled in !");
    }
});

// send a added Tour to server : "/createnewtour"
function sendTour() {
    const name = $("#tourName").val();
    const image = addedPlaces[0].image;
    const review = $('#review').val();
    $.post("/createnewtour", {name: name, places: addedPlaces, review: review, imageURL: image});
    const url = '/mytours/' + name;
    console.log(url);           /* <---- Important !!!*/
    $(document).ready(function () {
        $(location).attr('href', url);
    });
}

// check if all fields are filled
function areFilledFields() {
    return ($("#placeName").val() && $("#lat").val() &&
        $("#lng").val() && $("#placeType").val());
}

// clear form of Modal Pop-up
function modalReset() {
    $("#placeName").val('');
    $("#lat").val('');
    $("#lng").val('');
    $("#placeType").val('');
}

