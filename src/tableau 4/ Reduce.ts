// Explication : Réduire le tableau à une seule valeur.
// En TypeScript, on peut utiliser la méthode reduce pour réduire un tableau à une seule valeur.
// La méthode reduce prend deux paramètres : une fonction de réduction et une valeur initiale.
// La fonction de réduction prend deux paramètres : la valeur courante et la valeur précédente.
// La valeur initiale est la valeur de départ de la réduction
function reduceExample(arr: number[]): number {
    return arr.reduce((acc, curr) => acc + curr, 0);
}

const reduce = [1, 2, 3, 4, 5];
const reduceResult = reduceExample(reduce);
console.log(`Le tableau est maintenant reduce ${reduceResult}`);
// Le tableau est maintenant reduce 15
