
var map = document.getElementById("map-canvas");
google.maps.event.addDomListener(map, 'onclick', initialize);

function initialize() {
  var latlng = new google.maps.LatLng(39.8282, -98.5795);

  var mapOptions = {
    center: latlng,
    zoom: 5
  };
  var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
}