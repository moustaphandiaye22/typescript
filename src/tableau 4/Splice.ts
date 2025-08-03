// Explication : Supprime ou remplace des éléments à partir d’un index.
// La méthode splice en TypeScript permet de modifier le contenu d'un tableau en supprimant ou en remplaçant des éléments à partir d'un index donné.

function spliceExample(arr: number[], start: number, deleteCount: number, ...items: number[]): number[] {
    return arr.splice(start, deleteCount, ...items);
}

const splice = [1, 2, 3, 4, 5];
const spliceResult = spliceExample(splice, 2, 2, 6, 7);
console.log(`Le tableau est maintenant splice  ${splice}`);
// Le tableau est maintenant [1, 2, 6, 7, 5]    
