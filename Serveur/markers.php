<?php
  
  //headers permettant de se servir de l'application en localhost
  header('Access-Control-Allow-Origin: *');
  header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
  header('Access-Control-Allow-Headers: Content-Type,x-prototype-version,x-requested-with');

  //On récupère les variables envoyées depuis l'application
  $lat_courante=$_GET['lat'];
  $lon_courante=$_GET['lng']; 
  $distance_choisie=$_GET['distance'];
  //On transforme ces variables en float
  $lat_courante = floatval($lat_courante);
  $lon_courante = floatval($lon_courante);
  $distance_choisie = floatval($distance_choisie);

  //On créé une nouvelle connexion PDO
  $db = new PDO("mysql:host=localhost;dbname=markers", "root", "admin");

  //Le résultat par défaut envoyé au navigateur
  $result = "{'success':false}";
  //Formule permettant de calculer la distance de chaque markers par rapport à la position de l'utilisateur 
  $formule="(6366*acos(cos(radians(".$lat_courante."))*cos(radians(`lat`))*cos(radians(`lng`) -radians(".$lon_courante."))+sin(radians(".$lat_courante."))*sin(radians(`lat`))))";
  //On sélectionne tous les markers concernés actifs
  $query = "SELECT *, ".$formule." AS dist FROM list, type WHERE list.type_id = type.id_type AND ".$formule."<=".$distance_choisie." AND active = 1";
  
  //On execute la requete
  $dbresult = $db->query($query);
 
  //On créer un tableau pour les résultats
  $markers = array();
  //Tant qu'il y a des résultats on enregistre chaque marker dans le tableau
  while($row = $dbresult->fetch(PDO::FETCH_ASSOC)){
    $markers[] = array(
      'id' => $row["id"],
      'lat' => $row["lat"],
      'lng' => $row["lng"],
      'icon' => $row["icone_type"],
      'name' => $row["nom_type"],
      'dist' => $row["dist"]
    );
  }
 
  //Si la requete est correctement executee, on créer un JSON contenant les informations qu'on renvoie à l'utilisateur
  if($dbresult){
	$result = '{"success":true, "markers":' . json_encode($markers) . '}';      
  }
  else
  {
    $result = "{'success':false}";
  }
 
  //On effectue un echo afin que l'application puisse voir les données
  echo($result);

  $db = null;
 
?>
