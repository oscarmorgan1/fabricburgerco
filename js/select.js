function initialize() {

    // Create a LatLng object
    // We use this LatLng object to center the map and position the marker
    var center = new google.maps.LatLng(50,0);

    // Declare your map options
    var mapOptions = {
        zoom: 4,
        center: center,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    // Create a map in the #map HTML element, using the declared options
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);

    // Create a marker and place it on the map
    var marker = new google.maps.Marker({
        position: center,
        map: map
    });
}