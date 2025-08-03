// Explication : Trie les éléments (par défaut, tri alphabétique).
// La méthode sort en TypeScript permet de trier les éléments d'un tableau.

function sortExample(arr: number[]): number[] {
    return arr.sort();
}

const sort = [5, 3, 1, 4, 2];
const sortResult = sortExample(sort);
console.log(`Le tableau est maintenant trié : ${sortResult}`);
