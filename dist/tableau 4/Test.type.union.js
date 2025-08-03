"use strict";
// Explication : Vérifie le type avec typeof ou in quand on a un type union.
// En TypeScript, on peut utiliser l'opérateur typeof pour vérifier le type d'une variable à l'exécution.
// En TypeScript, l'opérateur in permet de vérifier si une propriété existe dans un objet ou si un index existe dans un tableau.
const valeur = "Hello";
function verifierType(val) {
    if (typeof val === "string") {
        console.log("La valeur est une chaîne de caractères." + val);
    }
    else if (typeof val === "number") {
        console.log("La valeur est un nombre." + val);
    }
}
verifierType(valeur);
// Exemple d'utilisation de l'opérateur in
const objet = { a: 1, b: 2, c: 3 };
console.log("a" in objet);
console.log("d" in objet);
