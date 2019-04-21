function initMap() {
    let myLatLng = {lat: 51.517564, lng:  7.459443};

    let map = new google.maps.Map(document.getElementById('map'), {
        zoom: 14,
        center: myLatLng
    });

    google.maps.event.addListener(map, 'click', (e) => {
        let lat = e.latLng.lat();
        let lng = e.latLng.lng();
        // alert("Lat= " + lat + "  Lng= " + lng);
        $('#lat').val(lat);
        $('#lng').val(lng);
    });

    let marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Welcome to Dortmund!'
    });
}
