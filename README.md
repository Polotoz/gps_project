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

TODO

## 6 - Choix techniques côté serveur / Technical choices server side

### 6 - 1 - PHP

TODO (+ PDO)

### 6 - 2 - MySQL

TODO

## 7 - Modèle Conceptuel de Données / Conceptual Data Model

![alt tag](https://github.com/Polotoz/gps_project/blob/master/images/mcd_gps.jpg)

## 8 - Modèle Physique de Données / Physical Data Model

![alt tag](https://github.com/Polotoz/gps_project/blob/master/images/mopd_gps.jpg)

## 9 - Diagramme de classe / Class Diagram

![alt tag](https://github.com/Polotoz/gps_project/blob/master/images/dc_pckg_gps.jpg)

## 10 - Diagramme de sequence / Sequence Diagram

![alt tag](https://github.com/Polotoz/gps_project/blob/master/images/sequence_gps_1.jpg)
