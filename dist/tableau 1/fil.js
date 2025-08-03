"use strict";
// Explication : Méthode JavaScript pour remplir un tableau avec une valeur.
// La méthode fill() remplit tous les éléments d'un tableau avec une valeur statique.
// il est utilisé pour initialiser un tableau avec une valeur spécifique.
// il est particulièrement utile pour créer des tableaux de taille fixe avec une valeur par défaut.
// Exemple d'utilisation de la méthode fill() en TypeScript
const tableau = new Array(5);
tableau.fill(0);
console.log(tableau); // Affiche : [0, 0, 0, 0, 0]
const tableaustring = new Array(5);
tableaustring.fill("je suis un tableau de string fillé");
console.log(tableaustring); // Affiche : ["je suis un tableau de string fille"] 5 fois
