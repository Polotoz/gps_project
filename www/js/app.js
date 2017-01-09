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
    GoogleMaps.init("AIzaSyC2OxsNntHPrwjeTlufG9qroEu_pzMNx9I");
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
  
        return {
          getMarkers: function(latLng){
             lat = latLng.lat();
             lgt = latLng.lng();
            return $http.get('http://localhost/markers.php?lat='+lat+'&lng='+lgt+'&distance=1').then(function(response){
                markers = response;
                return markers;
            });

          }
         
        }
         
})

.factory('GoogleMaps', function($cordovaGeolocation, $ionicLoading, 
$rootScope, $cordovaNetwork, Markers, $ionicPopup, $interval, $http, ConnectivityMonitor){
    
    //On initialise l'apiKey à faux
    var apiKey = false;
    //var map correspond à la carte
    var map;
    //var markesList correspond aux marqueurs récupérés en base
    var markersList = [];
    
    var markerCache = [];

    function initMap(){

        var options = {timeout: 10000, enableHighAccuracy: true};
        
        //On déclare la création de la carte avec un zoom à 25
	map = new google.maps.Map(document.getElementById('map'), {   
                                    zoom: 25,
                                    mapTypeId: google.maps.MapTypeId.ROADMAP,
				    disableDefaultUI: true
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
	
	//On attend que la carte soit chargée pour initialiser les POI
        google.maps.event.addListenerOnce(map, 'idle', function(){
       			callAtInterval();
      		});
                
        enableMap();

	function callAtInterval() {

	    $cordovaGeolocation.getCurrentPosition(options).then(function(position){
		
                //On récupère la position actuelle
		var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);  

                //On centre la carte sur la position actuelle
		map.setCenter(latLng);
		directionsDisplay.setMap(map);
                //On change la position de l'utilisateur à chaque passage dans la boucle
                markerHere.setPosition(latLng);                                        
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
    
    function enableMap(){
    $ionicLoading.hide();
  }
 
  function disableMap(){
    $ionicLoading.show({
      template: "Vous devez être connecté pour utiliser l'application"
    });
  }
 
  function loadGoogleMaps(){
 
    $ionicLoading.show({
      template: 'Chargement de la carte'
    });
 
    //Cette fonction sera appelée lorsque le SDK sera chargé
    window.mapInit = function(){
      initMap();
    };  
 
    //Créer un element afin de l'insérer dans la page
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.id = "googleMaps";
 
    if(apiKey){
      script.src = 'http://maps.google.com/maps/api/js?key=' + apiKey 
+ '&libraries=places,geometry&callback=mapInit';
    }
    else {
script.src = 'http://maps.google.com/maps/api/js?sensor=true&callback=mapInit';
    }
 
    document.body.appendChild(script);
 
  }
 
  function checkLoaded(){
    if(typeof google == "undefined" || typeof google.maps == "undefined"){
      loadGoogleMaps();
    } else {
      enableMap();
    }       
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
            	
                var distance = Math.floor( distM );
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
  
  function addConnectivityListeners(){
 
    if(ionic.Platform.isWebView()){
 
      // Regarde si la map est déjà chargée quand l'utilisateur redeviens en ligne
      $rootScope.$on('$cordovaNetwork:online', function(event, networkState){
        checkLoaded();
      });
 
      // Désactive la carte si l'utilisateur est hors ligne
      $rootScope.$on('$cordovaNetwork:offline', function(event, networkState){
        disableMap();
      });
 
    }
    else {
 
      window.addEventListener("online", function(e) {
        checkLoaded();
      }, false);    
 
      window.addEventListener("offline", function(e) {
        disableMap();
      }, false);  
    }
 
  }
  
  
  return {
    init: function(key){
 
      if(typeof key != "undefined"){
        apiKey = key;
      }
 
      if(typeof google == "undefined" || typeof google.maps == "undefined"){
 
        disableMap();
 
        if(ConnectivityMonitor.isOnline()){
          loadGoogleMaps();
        }
      }
      else {
        if(ConnectivityMonitor.isOnline()){
          initMap();
          enableMap();
        } else {
          disableMap();
        }
      }
 
      addConnectivityListeners();
 
    }
  }

})

.factory('ConnectivityMonitor', function($rootScope, $cordovaNetwork){
 
  return {
    isOnline: function(){
 
      if(ionic.Platform.isWebView()){
        return $cordovaNetwork.isOnline();    
      } else {
        return navigator.onLine;
      }
 
    },
    ifOffline: function(){
 
      if(ionic.Platform.isWebView()){
        return !$cordovaNetwork.isOnline();    
      } else {
        return !navigator.onLine;
      }
 
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
        });
    });
	}

  $ionicPopover.fromTemplateUrl('templates/popover.html', {
    scope: $scope,
  }).then(function(popover) {
    $scope.popover = popover;
  });
 										
});
