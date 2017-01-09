function calcRoute(){
	
	navigator.geolocation.getCurrentPosition(function(position) {
		
	var directionsService = new google.maps.DirectionsService();

	var directionsDisplay = new google.maps.DirectionsRenderer();
	
	var start = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

	var end = document.getElementById('end').value;
		
	var request = {
	    origin: start,
	    destination: end,
	    travelMode: 'DRIVING'
	  };

	directionsService.route(request, function(result, status) {   	
	if (status = 'OK') {
      	directionsDisplay.setDirections(result);
    	}

	
  });

});


}
function calculateAndDisplayRoute(directionsService, directionsDisplay, latLng) {

directionsService.route({
    origin: latLng,
    destination: document.getElementById('end').value,
    travelMode: google.maps.TravelMode.DRIVING
  }, function(response, status) {
    if (status === google.maps.DirectionsStatus.OK) {
      directionsDisplay.setOptions({ preserveViewport: true });
      directionsDisplay.setDirections(response);
    } else {
      window.alert('Directions request failed due to ' + status);
    }
  });

}

