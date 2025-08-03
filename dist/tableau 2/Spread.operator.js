"use strict";
// Explication : Permet de copier ou fusionner objets/tableaux.
// L'opérateur de spread (`...`) permet de copier ou fusionner des objets et des tableaux.
// Il est utilisé pour créer une nouvelle instance d'un objet ou d'un tableau en incluant les propriétés ou les éléments d'un autre objet ou tableau.
const aplha = { a: 1, b: 2 };
const beta = Object.assign(Object.assign({}, aplha), { c: 3 }); // Fusionne aplha avec une nouvelle propriété c
console.log(beta); // Affiche : { a: 1, b: 2, c: 3 }
