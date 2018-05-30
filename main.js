function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 17,
    center: {lat: 51.5099544, lng: -0.4680009}
  });

  var trafficLayer = new google.maps.TrafficLayer();
  trafficLayer.setMap(map);
}