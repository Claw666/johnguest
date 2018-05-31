function initMap() {
 
   var myLatLng = {lat: 51.511177, lng: -0.464732};

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 14,
    center: myLatLng
  });

  var trafficLayer = new google.maps.TrafficLayer();
  trafficLayer.setMap(map);

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map
  });
}