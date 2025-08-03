// Explication : Retourne un nouveau tableau avec les éléments qui respectent une condition.
// La méthode filter en TypeScript permet de créer un nouveau tableau en filtrant les éléments d'un tableau existant en fonction d'une condition donnée.

function filterExample(arr: number[], condition: (value: number) => boolean): number[] {
    return arr.filter(condition);
}

const filter = [1, 2, 3, 4, 5];
const filterResult = filterExample(filter, (value) => value % 2 === 0);
console.log(`Le tableau est maintenant filter ${filterResult}`);
// Le tableau est maintenant filter [2, 4]
