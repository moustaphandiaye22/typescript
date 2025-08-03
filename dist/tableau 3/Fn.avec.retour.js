"use strict";
// Explication : Fonction qui retourne une valeur (voir ci-dessus).
// Le type de retour d'une fonction en TypeScript est spécifié après les paramètres de la fonction.
// Exemple d'annotation de type pour une fonction
function avecRetour(a, b) {
    return a + b; // Retourne la somme des deux nombres
}
// Exemple d'utilisation de la fonction
const res = avecRetour(5, 10);
console.log(res); // Affiche 15
//Explication : void = ne retourne rien.
// Le type void en TypeScript est utilisé pour indiquer qu'une fonction ne retourne pas de valeur.
// Cela est utile pour les fonctions qui effectuent des actions mais ne renvoient pas de valeur.
// Exemple d'utilisation du type void en TypeScript
function sansRetour(a, b) {
    console.log("La somme est : " + (a + b)); // Affiche la somme des deux nombres dans la console
}
// Exemple d'utilisation de la fonction
sansRetour(5, 10); // Appelle la fonction sans attendre de valeur de retour 
