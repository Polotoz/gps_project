<?php

    //headers permettant de se servir de l'application en localhost
    header("Content-Type: application/json; charset=UTF-8");
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: GET, POST');

    //On créé une nouvelle connexion PDO
    $db = new PDO("mysql:host=localhost;dbname=markers", "root", "admin");
    //On récupère les données passées en paramètre
    $postdata = file_get_contents("php://input");
    $request = json_decode($postdata);
    $lat = $request->lat;
    $lng = $request->lgt;
    $type = $request->type;
    //On récupère le type passé en paramètre
    $query1 = "SELECT id_type FROM type WHERE nom_type = '".$type."' LIMIT 1";

    $result = $db->query($query1);
    //On récupère la première valeur
    while ($row = $result->fetch(PDO::FETCH_ASSOC))
    {
     $id = $row["id_type"];
    }

    //On le converti en int
    $id = intval($id);
    //On insère le nouveau marker
    $query = "INSERT INTO list (lat, lng, type_id, active) VALUES (".$lat.", ".$lng.", ".$id.", 1) ";

    $db->query($query);

?>
