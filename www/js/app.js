angular.module('starter', ['ionic', 'ngCordova'])

//le .run est lancé dès le lancement de l'application et permet d'initialiser les services
.run(function($ionicPlatform, GoogleMaps) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
    GoogleMaps.init();
  });
})

//Défini le template utilisé dans l'application avec comme route /
.config(function($stateProvider, $urlRouterProvider) {
 
  $stateProvider
  .state('map', {
    url: '/',
    templateUrl: 'templates/map.html',
    controller: 'MapCtrl'
  });
 
  $urlRouterProvider.otherwise("/");
 
})

.config(function($httpProvider) {
    //Enable cross domain calls
    $httpProvider.defaults.useXDomain = true;
})

//Permets de récupérer les markers présent en base
.factory('Markers', function($cordovaGeolocation, $http) {

  var markers = [];
  var options = {timeout: 10000, enableHighAccuracy: true};
  var lat;
  var lgt;
 
//  $cordovaGeolocation.getCurrentPosition(options).then(function(position){
//      
//        lat = position.coords.latitude;
//        lgt = position.coords.longitude;
//  });     
        return {
          getMarkers: function(latLng){
              console.log(latLng);
             lat = latLng.lat();
             lgt = latLng.lng();
            return $http.get('http://localhost/markers.php?lat='+lat+'&lng='+lgt+'&distance=1').then(function(response){
                markers = response;
                return markers;
            });

          }
         
        }
         
})

.factory('GoogleMaps', function($cordovaGeolocation, Markers, $ionicPopup, $interval, $http){
    
    //var map correspond à la carte
    var map;
    //var markesList correspond aux marqueurs récupérés en base
    var markersList = [];

    function initMap(){

        var options = {timeout: 10000, enableHighAccuracy: true};
        
        //On déclare la création de la carte avec un zoom à 25
	map = new google.maps.Map(document.getElementById('map'), {   
                                    zoom: 25,
                                    mapTypeId: google.maps.MapTypeId.ROADMAP
                                });	          
        
        //On déclare le marker de la position de l'utilisateur
        var markerHere = new google.maps.Marker({
                                                map: map,
                                                animation: null,
                                                icon: 'http://localhost/icon/here.png',
                                                });
        
        //On affiche un message si l'utilisateur clique sur sa position
        var infoWindow = new google.maps.InfoWindow({
                                                content: "Vous êtes ici"
                                                });
                                                
        google.maps.event.addListener(markerHere, 'click', function () {
                                infoWindow.open(map, markerHere);
                                });
                                        
        //On déclare le service permettant de créer les itinéraires
        var directionsService = new google.maps.DirectionsService;
	var directionsDisplay = new google.maps.DirectionsRenderer;
       
	function callAtInterval() {

            console.log("Interval occurred");

	    $cordovaGeolocation.getCurrentPosition(options).then(function(position){
		
                //On récupère la position actuelle
		var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);  

                //On centre la carte sur la position actuelle
		map.setCenter(latLng);
		directionsDisplay.setMap(map);
                //On change la position de l'utilisateur à chaque passage dans la boucle
                markerHere.setPosition(latLng);                              
                console.log('lat : '+latLng.lat());          
                //Si l'utilisateur à renseigné un itinéraire alors on l'affiche
	  	if(document.getElementById('end').value){
                    calculateAndDisplayRoute(directionsService, directionsDisplay, latLng);
		}                
		var onChangeHandler = function() {
                    calculateAndDisplayRoute(directionsService, directionsDisplay, latLng);
		};

		document.getElementById('end').addEventListener('change', onChangeHandler);
	     	var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
	     		        
                //On charge les marqueurs à proximité de l'utilisateur
	        loadMarkers(latLng);
      			
            });
        }
	$interval( function(){ callAtInterval(); }, 30000);   
    }
    
    //Fonction permettant de charger tous les markers à proximité de l'utilisateur et de les afficher sur la map
    function loadMarkers(latLng){
	       
//        function setMapOnAll(map) {
//                    for (var i = 0; i < markersList.length; i++) {
//	   		markersList[i].setMap(map);
//                    }
//		}
//                
//	setMapOnAll(null);
	markersList = [];
        
        //Récupère tous les markers à proximité
        Markers.getMarkers(latLng).then(function(markers){
            
            var records = markers.data.markers;
            //Pour chaque résultat retourné
            for (var i = 0; i < records.length; i++) {                
                //On traduit la lat et lng récupéré en position LatLng
                var markerPos = new google.maps.LatLng(records[i].lat, records[i].lng);
                // On ajoute les markers à la carte
                
                var marker = new google.maps.Marker({
                    map: map,
                    animation: null,
                    position: markerPos,
                    icon: records[i].icon,
                    distance: parseFloat(records[i].dist)*1000,
                    nom: records[i].name,
                    id: records[i].id
                });               
                
                console.log(marker);
                markersList.push(marker);
                               
                //On ajoute une écoute sur le click des markers
                google.maps.event.addListener(markersList[i], 'click', function (event) {
                    actionClickMarker(this.distance, this.nom, this.id);
                });
  	  
            }
//            angular.forEach(markersList, function(value, key){
//                console.log('tatata');
//            });
        }); 
    }

    function actionClickMarker(distM, nom, id){
            	
//		data = {}
                var distance = Math.floor( distM );
                console.log(distance);
                var myPopup = $ionicPopup.show({
                    template: ""+nom+" à "+distance+" m",
                    title: "Evenement",    
                    buttons: [
                    { 
                        text: 'Plus là',
                        onTap: function(e) {
                            $http.post("api/popUpdate.php",'{"id":'+id+'}')
                            .success(function(data, status, headers, config){
                                myPopup.close();
                            });       
                        }}, {
                        text: '<b>Encore là</b>',
                        type: 'button-positive',
                        onTap: function(e) {
                            myPopup.close();        
                        }
                        }
                 ]
              });
  }

//  function addInfoWindow(marker, message, record) {
//
//      var infoWindow = new google.maps.InfoWindow({
//          content: message
//      });
//
//      google.maps.event.addListener(marker, 'click', function () {
//          infoWindow.open(map, marker);
//      });
//      
//  }

  return {
    init: function(){
      initMap();
    }
  }

})


.controller('MapCtrl', function($scope, $state, $cordovaGeolocation, $ionicPopover, $http) {

	//Sauvegarder les coordonnées signalées par l'utilisateur en base
	$scope.saveDetails = function(a){
    var options = {timeout: 10000, enableHighAccuracy: true};

    $cordovaGeolocation.getCurrentPosition(options).then(function(position){

      	var lat = position.coords.latitude;
      	var lgt = position.coords.longitude;

        $http.post("api/saveDetails.php",'{"lat":'+lat+', "lgt" :'+lgt+', "type" :"'+a+'"}')
        .success(function(data, status, headers, config){
            console.log("inserted Successfully");
        });
    });
	}

  $ionicPopover.fromTemplateUrl('templates/popover.html', {
    scope: $scope,
  }).then(function(popover) {
    $scope.popover = popover;
  });
 										
});
