"use strict";
let a = 5;
let b = a; // Copie de la valeur
b = 10; // Modifie b, a reste inchangé  
let obj1 = { nom: "aliiiii" };
let obj2 = obj1; // Référence à l'objet
obj2.nom = "Breukh"; // Modifie obj2, obj1 est également modifié
console.log(obj1.nom); // Affiche : Breukh
console.log(b); // Affiche : 5
console.log(obj2.nom); // Affiche : Breukh
