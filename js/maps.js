function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 3,
        center: {
            lat: 35.4929498,
            lng: 35.4929498
        }
    });

    // Create an array of alphabetical characters used to label the markers.
    var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    var locations = [
        { lat: 35.4929498, lng: 35.4929498 },  //Tokyo
        { lat: 40.6971745, lng: -74.5401066 },  // New York
        { lat: -22.9118825, lng: -43.7261746 },  // Rio de Janeiro
        { lat: 51.5287352, lng: -0.3817756 },  // London
        { lat: -33.913129, lng: 18.095636 }  // Cape Town
    ];

    var markers = locations.map(function(location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });

    var markerCluster = new MarkerClusterer(map, markers, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
}
