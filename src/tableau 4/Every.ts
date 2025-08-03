// Explication : Vérifie si tous les éléments satisfont une condition.
// La méthode every en TypeScript permet de vérifier si tous les éléments d'un tableau satisfont une condition donnée.

function everyExample(arr: number[], condition: (element: number) => boolean): boolean {
    return arr.every(condition);
}

const every = [1, 2, 3, 4, 5];
const everyResult = everyExample(every, (element) => element > 0);
console.log(`Tous les éléments sont-ils supérieurs à 0 ? ${everyResult}`);
