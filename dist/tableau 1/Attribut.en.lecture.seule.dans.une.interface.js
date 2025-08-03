"use strict";
// Explication : readonly empêche la modification.
// Le mot-clé readonly permet de déclarer des propriétés qui ne peuvent pas être modifiées après leur initialisation.
// Il est utilisé pour créer des propriétés en lecture seule dans une interface.
// Exemple d'utilisation de readonly dans une interface en TypeScript
const computer = {
    name: "MacBook Pro",
    price: 400000
};
// computer.name = "MacBook Air"; // Erreur : Impossible de modifier une propriété en lecture seule
console.log(`Nom de l'ordinateur : ${computer.name}, Prix : ${computer.price}`);
// Affiche : Nom de l'ordinateur : MacBook Pro, Prix : 400000
