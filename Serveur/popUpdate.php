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
    $id = $request->id;
    //On désactive le marker
    $query = "UPDATE list SET active = 0 WHERE id = ".$id."";

    $db->query($query);

?>
