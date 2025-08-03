"use strict";
// Explication : Une fonction peut avoir plusieurs signatures.
function afficher(valeur) {
    console.log(valeur);
    return valeur;
}
// Exemple d'utilisation
const resultatString = afficher("Bonjour");
const resultatNumber = afficher(42);
// Affiche : Bonjour
// Affiche : 42
