"use strict";
// Explication : Ajoutez un ou plusieurs éléments au début du tableau.
// La méthode unshift en TypeScript permet d'ajouter un ou plusieurs éléments au début d'un tableau.
function unshiftExample(arr, ...elements) {
    return arr.unshift(...elements);
}
const unshift = [1, 2, 3, 4, 5];
const unshiftResult = unshiftExample(unshift, 0);
console.log(`Le tableau est maintenant ${unshift}`);
const unshiftMultiple = [10, 20, 30];
unshiftExample(unshift, ...unshiftMultiple);
console.log(`Le tableau est maintenant ${unshift}`);
