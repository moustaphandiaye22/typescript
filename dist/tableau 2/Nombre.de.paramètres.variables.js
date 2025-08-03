"use strict";
// Explication : ...args permet de capturer un nombre indéfini d’arguments.
// L'opérateur de spread (`...`) permet de capturer un nombre indéfini d'arguments dans une fonction.
// Il est utilisé pour créer une liste de paramètres variables, ce qui permet de passer un nombre variable d'arguments à une fonction.
// En utilisant le spread, on peut créer une liste de paramètres variables avec un nombre indéfini d'arguments, ce qui permet de préserver l'original intact.
function maFunction(...number) {
    return number.reduce((acc, curr) => acc + curr, 0);
}
console.log(maFunction(1, 2, 3, 4)); // Affiche : 10
// Il est particulièrement utile dans les cas où l'on ne sait pas à l'avance combien d'arguments seront passés à la fonction.
// Exemple d'utilisation de l'opérateur de spread en TypeScript
function additionner(...nombres) {
    return nombres.reduce((acc, curr) => acc + curr, 0);
}
console.log(additionner(1, 2, 3, 4)); // Affiche : 10
