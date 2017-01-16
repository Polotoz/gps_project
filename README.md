# gps_project

## Utiliser le projet / Using this project

Afin d'utiliser ce projet, veuillez avoir Node.js d'installé sur votre machine.

- Clonez le repository gitHub : `git clone https://github.com/Polotoz/gps_project.git`.
- Installez npm `npm install -g npm`.
- Lancez `npm install` depuis la racine du projet.
- Installez ionic : `npm install -g ionic`.
- Installez SASS : `ionic setup sass`.
- Installez bower : `npm install -g bower`.
- Lancez la commande : `bower install`.
- Installez Cordova : `bower install ngCordova` et le plugin de géolocalisation `cordova plugin add cordova-plugin-geolocation`.
- Installez le plugin network information : `cordova plugin add cordova-plugin-network-information`
- Lancez `ionic serve` depuis la racine du projet.

Côté serveur, vous aurez besoin d'un serveur de base de données Mysql configuré de la sorte :

- Login : root
- Password : admin

Lancez le script d'installation de la base de données présente dans le dossier "Serveur" (fichier en .sql).

Vous aurez également besoin d'un serveur Web configuré avec la version 5 de PHP.

- Déplacez les sources présentes dans le dossier "Serveur" vers la racine "www" de votre serveur Web.

Pour une meilleure expérience, utilisez l'application depuis le navigateur Google Chrome
------------------------------------------------------------------------------------------------------

Node.js need to be installed on your machine.

- Clone the repository : `git clone https://github.com/Polotoz/gps_project.git`.
- Install npm `npm install -g npm`.
- Execute `npm install` from the project root.
- Install ionic : `npm install -g ionic`.
- Install SASS : `ionic setup sass`.
- Install bower : `npm install -g bower`.
- Execute : `bower install`.
- Install Cordova : `bower install ngCordova` and the geolocation plugin `cordova plugin add cordova-plugin-geolocation`.
- Install network information plugin : `cordova plugin add cordova-plugin-network-information`
- Execute `ionic serve` from the project root.

Server side, you need a MySQL server running with the following params :

- Login : root
- Password : admin

Launche the .sql script from the MySQL Server (folder "Serveur").

You need au Web server with PHP5 installed on it.

- Move the php files to the "www" Web server root.

For a better experience, please use this application with Google Chrome

## 1 - Présentation du projet / Project display

Ce projet a été réalisé dans le cadre de la formation de Responsable en Ingénierie des Logiciels au sein du CESI de Labège.
Le sujet du projet était le suivant :

Développement d’une application mobile HTML 5, permettant d’afficher une carte géographique, déterminer la position actuelle, enregistrer et partager des POI sur une carte interactive. La mise en place de la trajectographie sera un plus. Il s’agit tout simplement de refaire l’application Waze.

------------------------------------------------------------------------------------------------------

This project was realized during the formation of Software Engineer in the CESI of Labège.
The subject of this project was :

Development of an HTML 5 mobile application to display a map, determine the current location, save and share POIs on an interactive map. The implementation of the trajectogram will be a plus. It is simply to redo the Waze application.

# Etude préalable

## 2 - Product Breakdown Structure

Le PBS permet de découper l'application à réaliser en différentes catégories. Pour ce projet, il a été établi 3 catégories qui sont les suivantes :

- Carte
- Points d'intérêt
- Trajectographie

------------------------------------------------------------------------------------------------------

The PBS allows the application to be divided into different categories. For this project, three categories were established :

- Map
- POI
- Directions

![alt tag](https://github.com/Polotoz/gps_project/blob/master/images/pbs.png)

## 3 - Diagrammes d'utilisation / Use cases

Cette partie permet d'analyser les diverses actions que l'utilisateur pourra réaliser durant l'utilisation de l'application.

------------------------------------------------------------------------------------------------------

This part allows to analyze the various actions that the user can realize during the use of the application.

![alt tag](https://github.com/Polotoz/gps_project/blob/master/images/use_case.jpg)

## 4 - Work Breakdown Structure (WBS)

Le WBS nous permet de décomposer le projet visuellement en unité gérable et appréhendable par tous les membres de l'équipe, chaques niveau du WBS permettant d'approfondir le detail des tâches jusqu'au niveau final.

------------------------------------------------------------------------------------------------------

The WBS allow us to decompose the project visually into a manageable and apprehendable unit for all the member of the team. EachWBS level allowing to deepen the detail of the task to the final level.

![alt tag](https://github.com/Polotoz/gps_project/blob/master/images/wbs.png)

## 5 - Etude de l'Interface Homme Machine / Human Machine Interface Study

Etant donné que la consigne du sujet, celle-ci devait être optimisé pour une utilisation mobile tout en respectant l'utilisation d'HTML 5 et javascript. Nous avons réalisé plusieurs maquettes avant de pouvoir commencer à réaliser l'application.

Vous pouvez trouver le mock-up complet contenant des liens cliquables à l'adresse suivante :

https://github.com/Polotoz/gps_project/blob/master/mock_ups/gps_project_mu.pdf

------------------------------------------------------------------------------------------------------

Considering that the subject's instructions, this one had to be optimized for mobile use while respecting the use of HTML 5 and javascript. We realized several models before we could begin to realize the application.

You can find the complete mock-up with clickable buttons here :

https://github.com/Polotoz/gps_project/blob/master/mock_ups/gps_project_mu.pdf


![alt tag](https://github.com/Polotoz/gps_project/blob/master/images/0001.jpg)

![alt tag](https://github.com/Polotoz/gps_project/blob/master/images/0002.jpg)

![alt tag](https://github.com/Polotoz/gps_project/blob/master/images/0003.jpg)

![alt tag](https://github.com/Polotoz/gps_project/blob/master/images/0004.jpg)

![alt tag](https://github.com/Polotoz/gps_project/blob/master/images/0005.jpg)

![alt tag](https://github.com/Polotoz/gps_project/blob/master/images/0006.jpg)

![alt tag](https://github.com/Polotoz/gps_project/blob/master/images/0007.jpg)

## 5 - Choix techniques côté client / Technical choices client side

Les spécifications vis à vis des choix techniques étaient libres.
En effet, voici ce qu'indiquait la consigne :

"Côté serveur, il est possible de réaliser le projet en PHP ou en NODEJS. Côté client, l’utilisation de jQuery, d’AngularJS ou de toute autre librairie est possible."

Lors d'un de nos précédents cours, un de nos professeurs nous a présenté plusieurs framework destinés au développement d'applications Web orientés mobiles :

- JQuery mobile
- ionic framework

Après s'être informés sur ces deux frameworks, nous avons pu comparer leurs potentiels. 
Nous voulions nous orienter vers un framework totalement inconnu pour nous et utilisant la librairie AngularJS.
C'est pour cela que nous avons choisi le framework ionic, très populaire dans le domaine du développement d'applications mobiles.

### 5 - 1 - Ionic

Ionic est un framework basé sur AngularJS et Apache Cordova permettant de créer un projet multisupport en utilisant la technologie web tel que HTML, CSS, Javascript, afin de générer des applications IOS, Android, Chrome, Windows mobile, ...

Ionic nous permet de concevoir les interfaces et d'utiliser les langages web que l'on pourrait comparer au final comme une alternative de Twitter Bootstrap permettant à l'application de gérer une grande majorité de format de périphérique (responsive design).

La gestion de la logique et des données est assurée quand à elle par le framework Javascript Angular. Ce framework d'application web nous fournit une bonne structure d'application et la possibilité d'écrire des applications complètes rapidement.

Nous utilisons Apache Cordova pour générer les applications dites hybrides. Celui-ci gère la communication entre le navigateur et les API natives. Le noyau de Cordova fournit beaucoup de fonctionnalités comme l'accès au GPS, à la caméra ou encore aux informations du périphérique.

Nous avons choisis cette technologie car elle rentrait à 100% dans les critères de notre projet scolaire à savoir la technologie web.

------------------------------------------------------------------------------------------------------

Ionic is a framework based on AngularJS and Apache Cordova to create a multisupport project using web technology such as HTML, CSS, Javascript, to generate IOS, Android, Chrome or Windows Mobile Applications.

[English trad à finir]


### 5 - 2 - AngularJS

AngularJS est un framework construit autour de concepts clés et de bonnes pratiques du développement web incontournable dans le monde du développement actuel :
  - Architecture MVC premettant une stricte séparation entre les données, la présentation des données et les actions possible
  - le Data Binding permettant un lien de donnée entre l'HTML et le Javascript
  - la manipulation du DOM via des directives permettant de simplifier la création de code étant à l'origine difficilement maintenable et difficilement testable.
  
### 5 - 3 API Google Map

L'API Google map nous permet d'utiliser la quasi fonctionnalité de lar carte intéractive Google Map comme les évènement, la localisation, le calcul de trajet, les distances. L'utilisation de cette API nous est primordial afin d'afficher la carte aux utilisateurs et aussi de calculer les distances entre les utilisateurs et les évènements.

The Google Map API allows us to use the near-functionnality of the Google Map interactive map such as events, location, route calculation, distances, ...
The use of this API is essential to us to display map for users and also to calculate distances between users and events.

## 6 - Choix techniques côté serveur / Technical choices server side

### 6 - 1 - PHP

Pour le choix technique côté serveur nous avons choisis PHP étant un langage interprété éxécuté au côté serveur et non au côté client
ses principaux atouts sont :
  - Une grande communauté de développeurs
  - La gratuité
  - La simplicité d'écriture des scripts
  - La possibilité d'incluer le script PHP au sein d'une page HTML
  - La simplicité d'interfaçage avec des bases de données (PDO, ...)
  - L'intégration au sein de nombreux serveurs web (Apache, IIS, ...)

Le code PHP est stocké sur notre serveur, il n'est donc pas visible directement par le client puisque dès qu'il en demande l'accès, le serveur l'interprète.

------------------------------------------------------------------------------------------------------

For the technical choice server side, we choose PHP as an interpreted language executed on the server side and not on the client side.
It's main assets are :
  - A large community of developers
  - Free
  - The simplicity if script writing
  - The ability to include PHP scripts within an HTML page
  - The simplicity of interfacing with databases (PDO, ...)
  - Integration within many web servers (Apache, IIS, ...)

The PHP code is stored on our server, it's therefore not directly visible to the client, since as soon as the client requests access, the server interprets it.

### 6 - 2 - MySQL

MySQL est un Système de Gestion de Base de Données Relationnelles (SGBRD) utilisant le langage SQL. C'est le SGBRD le plus utilisé de par sa communauté mais aussi de sa gratuité et de son côté logiciel Open Source. C'est pour ces raisons que nous avons choisis de partir sur cette technologie.

Grâce à l'extension PDO (PHP Data Object) notre application est à même de communiquer avec notre base de données à 100% afin de pouvoir récupérer et insérer des informations.

------------------------------------------------------------------------------------------------------

MySQL is a Relational Database Management System (SGBRD) using the SQL language. It is the SGBRD the most used by the community but also it's a free and open source software. It's for these reasons that we have chosen to use this technology.

With the PDO extension (PHP Data Object) our application is able to communicate with our database at 100% in order to retrieve and insert informations.

## 7 - Modèle Conceptuel de Données / Conceptual Data Model

![alt tag](https://github.com/Polotoz/gps_project/blob/master/images/mcd_gps.jpg)

Deux tables ont été établies durant l'étude préalable. Une table list permettant d'enregistrer les POI et une table type permettant de stocker les différents types d'alertes.

Two tables were established during the preliminary study. A list table for registering POIs and a standard table for storing the different types of alerts.

## 8 - Modèle Physique de Données / Physical Data Model

![alt tag](https://github.com/Polotoz/gps_project/blob/master/images/mopd_gps.jpg)

# Conception

## 9 - Fonctionnalités / Features

Dans cette partie nous vous présenterons les différentes fonctionnalités de l'application.

### 9 - 1 - Affichage de la carte / Map display

Afin de pouvoir afficher la carte, nous avons mis en place l'API Google Maps que la société Google met à disposition de tous les développeurs à la limite de 25000 requêtes par jour.

Cette carte est chargée depuis la factory 'GoogleMaps' au sein de la fonction initMap().

La carte est définie à un zoom de 25 par défaut afin de permettre à l'utilisateur d'avoir un affichage de sa position optimal pour la navigation.

La fonction loadGoogleMaps() permet d'afficher un popup ionicLoading le temps que la carte soit chargée.

TODO English

### 9 - 2 - Affichage des POI / POI Display

La récupération des POI se fait par le biais de la fonction loadMarker() située au sein de la factory 'GoogleMaps'.

Cette fonction fait appel à la factory 'Markers' qui, depuis sa fonction getMarkers(), envoi une requête http GET avec pour paramètres la position actuelle et une distance qui est égale à 1.

La fonction loadMarker() récupère les résultats et ajoute chaque POI récupéré dans une liste qui est poussée vers la carte afin d'être ajoutée.

Un listener est ajouté pour chaque POI afin de pouvoir gérer des ionicPopup lorsque l'utilisateur clique dessus. Ce listener appelle la fonction actionClickMarker() avec pour paramètres la distance entre le POI et l'utilisateur, le nom de l'évènement et son identifiant.

TODO English

### 9 - 3 - Itinéraires / Directions

La partie itinéraire est gérée depuis une zone de saisie au niveau de la scope principale.

Lorsqu'un changement apparaît, la factory 'GoogleMaps' appelle les Webservices DirectionDisplay et DirectionService mis à disposition par GoogleMaps afin de pouvoir calculer et afficher l'itinéraire sur la carte. Au départ de la fonction initMap(), les deux services sont initialisés et par la suite passés en paramètres des deux fonctions permettant de calculer et d'afficher l'itinéraire qui sont présentes dans le fichier direction.js.

TODO English

### 9 - 4 - Validation des POI / Validation of POI

Lorsqu'un utilisateur clique sur un des POI, un popup est affiché contenant le nom de l'évènement ainsi que la distance qui sépare l'utilisateur de ce POI. Il a aussi le choix entre valider ou dévalider un POI.
Si l'utilisateur dévalider un POI, une fonction http POST permet de mettre à jour le POI via son identifiant passé en paramètre et le désactive.
Si l'utilisateur valide un POI, il reste actif en base.

TODO English

### 9 - 5 - Ajout de POI / POI add

L'utilisateur a la possibilité d'ajouter des POI en les déclarant depuis un boutton ouvrant une liste d'évènements.
Lorsqu'un utilisateur déclare un évènement, la fonction saveDetails() présente dans le contrôleur MapCtrl est appelée et envoi la position actuelle de l'utilisatteur ainsi que le type d'évènement par le biais d'une requête http POST. Le serveur enregistre en base ce nouveau POI et la fonction loadMarkers() l'affiche sur la carte si l'utilisateur est situé dans une distance d'un kilomètre.

TODO English

### 9 - 6 - Commandes vocales / Speech

L'utilisateur a la possibilité d'ajouter des POI et de définir un itinéraire depuis l'application.
Nous avons utilisé l'API Web Speech Recognition qui permet au javascript d'accéder au micro du navigateur au niveau du MapCtrl.
Lorsque l'utilisateur dit le nom d'un évènement en français, il est ajouté directement dans la base. Si il utilise la commande vocale afin d'avoir une direction, celle-ci est directement prise en compte et l'itinéraire s'affiche sur la carte.

### 9 - 7 - Mode hors ligne / Offline mode

La gestion du mode hors ligne a été effectué à l'aide d'un listener qui écoute en permanence si l'utilisateur est connecté ou non. Si l'utilisateur n'est pas connecté, un popup est affiché lui indiquant qu'il doit se reconnecter au réseau afin de pouvoir continuer à utiliser l'application.

La fonction addConnectivityListeners() permet d'écouter le status de connection en faisant appel à la factory ConnectivityMonitor.

La factory ConnectivityMonitor permet de gérer le status en retournant isOnline ou isOffline.

Si l'utilisateur est 'isOnline' alors on affiche la carte à l'aide de la fonction enableMap().
Si l'utilisateur est 'isOffline' alors on affiche un popup à l'aide de la fonction disableMap().

## 10 - Diagramme de classe / Class Diagram

![alt tag](https://github.com/Polotoz/gps_project/blob/master/images/dc_pckg_gps.jpg)

## 11 - Diagramme de sequence / Sequence Diagram

![alt tag](https://github.com/Polotoz/gps_project/blob/master/images/sequence_gps_1.jpg)

## 12 - Architecture

La partie Vue est mise en place à l'aide du Framework ionic qui fournit un nombre important d'éléments de type responsive (Boutons, header, footer, popups). Elle utilise la technologie HTML5.
La partie Contrôleur est gérée à l'aide du langage javascript Angular. Elle permet d'intéragir avec la vue à l'aide de la dépendance $scope et l'appel des fonctions à l'aide de directives de type 'ng'.
La partie Modèle est mise en place directement sur le serveur de l'application et non sur la partie Client, des fonctions contenant des requêtes SQL sont appelées depuis la partie Client à l'aide de requêtes HTTP de type POST ou GET.

TODO English / Schema

# Manuel utilisateur / User manual

Un manuel utilisateur a été effectué et est disponible via le lien suivant :
A user manual has been produced and is available via the following link :

https://github.com/Polotoz/gps_project/blob/master/docs/user_manual.pdf

# Cahier de test / Test booklet

Un cahier de test a été effectué et est disponible via le lien suivant :
A test booklet has been produced and is available via the following link :

https://github.com/Polotoz/gps_project/blob/master/docs/tests_gps.xlsx
