"use strict";
// Explication : Type pour les fonctions qui ne retournent jamais (erreur ou boucle infinie).
// Le type never en TypeScript est utilisé pour représenter des valeurs qui ne se produisent jamais.
// Cela est utile pour les fonctions qui lancent toujours une exception ou qui entrent dans une boucle infinie.
// Exemple d'utilisation du type never en TypeScript
function throwError(message) {
    throw new Error(message); // Lance une erreur avec le message fourni
}
// Exemple d'utilisation de la fonction throwError
try {
    throwError("Une erreur s'est produite"); // Appelle la fonction avec un message d'erreur
}
catch (error) {
    console.error(error); // Affiche l'erreur dans la console
}
// Le type never est également utilisé pour les fonctions qui ne retournent jamais une valeur, comme celles qui entrent dans une boucle infinie.    
// Exemple d'utilisation du type never en TypeScript
function never(message) {
    throw new Error(message); // Lance une erreur avec le message fourni
}
// Exemple d'utilisation de la fonction throwError
try {
    throwError("Une erreur s'est produite"); // Appelle la fonction avec un message d'erreur
}
catch (error) {
    console.error(error); // Affiche l'erreur dans la console
}
function infiniteLoop() {
    while (true) {
        // Cette fonction ne se termine jamais
    }
}
