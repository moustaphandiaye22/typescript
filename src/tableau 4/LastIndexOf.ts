// Explication : Trouve le dernier index d’un élément.
// La méthode lastIndexOf en TypeScript permet de trouver le dernier index d'une occurrence d'un élément dans un tableau.

function lastIndexOfExample(arr: number[], element: number): number {
    return arr.lastIndexOf(element);
}

const last = [1, 2, 3, 4, 5];
const lastIndex = lastIndexOfExample(last, 3);
console.log(`L'index de l'élément ${last[3]} est ${lastIndex}`);


