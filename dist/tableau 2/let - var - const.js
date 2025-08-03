"use strict";
// Explication :let et const ont une portée de bloc (block scope)  var a une portée de fonction (function scope)  const est non ré-affectable
// En TypeScript, `let` et `const` ont une portée de bloc, tandis que `var` a une portée de fonction.
// `let` permet de déclarer une variable qui peut être réaffectée, tandis que `const` déclare une variable qui ne peut pas être réaffectée après son initialisation.
// `var` est une ancienne façon de déclarer des variables et peut causer des problèmes de portée, car il est accessible en dehors du bloc dans lequel il a été déclaré.
// Il est recommandé d'utiliser `let` et `const` pour une meilleure gestion de la portée et pour éviter les erreurs liées à la portée des variables.
let n = 10; // Peut être réaffecté
const m = 20; // Ne peut pas être réaffecté
var o = 30; // Peut être réaffecté, mais a une portée de fonction 
console.log(n, m, o); // Affiche : 10 20 30
