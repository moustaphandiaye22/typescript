"use strict";
// Explication : Utiliser le spread pour éviter de modifier l’original.
// L'opérateur de spread (`...`) permet de créer une copie superficielle d'un objet ou d'un tableau.
// Il est utilisé pour éviter de modifier l'original lors de la manipulation d'objets ou de tableaux.
// En utilisant le spread, on peut créer une nouvelle instance avec les mêmes propriétés ou éléments, ce qui permet de préserver l'original intact.
const originalObject = { a: 1, b: 2 };
const copiedObject = Object.assign({}, originalObject); // Copie superficielle de l'objet
copiedObject.a = 3; // Modification de la copie
console.log(originalObject); // Affiche : { a: 1, b: 2 }
console.log(copiedObject); // Affiche : { a: 1, b: 2, ajout: 3 }
