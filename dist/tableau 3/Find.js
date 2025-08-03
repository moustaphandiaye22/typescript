"use strict";
// Explication : Méthode JS pour trouver un élément dans un tableau.
// La méthode find() en JavaScript est utilisée pour trouver le premier élément d'un tableau qui satisfait une condition spécifique.
// Elle prend une fonction de rappel (callback) comme argument, qui est exécutée pour chaque élément du tableau jusqu'à ce qu'un élément correspondant soit trouvé ou que le tableau soit épuisé.
// La fonction de rappel prend trois arguments : l'élément actuel, son index et le tableau lui-même.
// Elle doit retourner true si l'élément actuel correspond à la condition recherchée, sinon false.
function findElement(arr, condition) {
    return arr.find(condition); // Retourne le premier élément qui satisfait la condition
}
// Exemple d'utilisation de la méthode find 
const numbers = [1, 2, 3, 4, 5];
const foundNumber = findElement(numbers, (element) => element > 3);
const resulta = findElement(numbers, (element) => element % 2 === 0);
console.log(resulta); // Affiche 2
console.log(foundNumber); // Affiche 4 (le premier élément supérieur à 3)   
const people = [
    { name: "Alice", age: 30 },
    { name: "Bob", age: 25 },
    { name: "Charlie", age: 35 }
];
const foundPerson = people.find((person) => person.age > 30);
console.log(foundPerson); // Affiche { name: "Charlie", age: 35 } (le premier élément avec age > 30)
// Si aucun élément ne correspond à la condition, find() retourne undefined.
