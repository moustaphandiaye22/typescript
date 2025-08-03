"use strict";
//  Déstructuration (objets) Explication : Extraction des propriétés d’un objet.
// La déstructuration permet d'extraire les propriétés d'un objet et de les assigner à des variables.
// Elle est utilisée pour simplifier l'accès aux propriétés d'un objet et pour rendre le code plus lisible.
// La déstructuration est particulièrement utile lorsque l'on travaille avec des objets complexes ou lorsque l'on souhaite extraire plusieurs propriétés à la fois.
const nitte = { nom: "Moustapha", age: 30, ville: "Dakar" };
const { nom, age, ville } = nitte; // Déstructuration de l'objet nitte
console.log(nom); // Affiche : Moustapha
console.log(age); // Affiche : 30
console.log(ville); // Affiche : Dakar
