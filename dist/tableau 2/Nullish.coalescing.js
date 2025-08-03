"use strict";
// Explication : ?? retourne la droite seulement si la gauche est nulle ou undefined.
// L'opérateur de coalescence nulle (`??`) retourne la valeur de droite seulement si la valeur de gauche est nulle (`null`) ou indéfinie (`undefined`).
// ?? est un opérateur de coalescence nulle qui permet de retourner la valeur de la droite uniquement si la valeur de la gauche est nulle ou undefined.
// ?? est utilisé pour éviter les erreurs de référence null ou undefined.
// ?? est particulièrement utile dans les cas où l'on ne sait pas à l'avance si une valeur est nulle ou undefined.
function Nullish(a, b) {
    return a !== null && a !== void 0 ? a : b;
}
console.log(Nullish(1, 2)); // Affiche : 1
console.log(Nullish(null, 2)); // Affiche : 2
console.log(Nullish(undefined, 2)); // Affiche : 2
console.log(Nullish(null, undefined)); // Affiche : undefined
const valeur1 = null;
const valeur2 = 5;
const resultat = valeur1 !== null && valeur1 !== void 0 ? valeur1 : valeur2; // Si valeur1 est null ou undefined, retourne valeur2
console.log(resultat); // Affiche : 5
