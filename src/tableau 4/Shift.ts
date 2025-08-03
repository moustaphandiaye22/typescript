// Explication : Supprime le premier élément du tableau.
// La méthode shift en TypeScript permet de supprimer le premier élément d'un tableau et de retourner cet élément.
function shiftExample(arr: number[]): number | undefined {
    return arr.shift();
}

const shift = [1, 2, 3, 4, 5];
const shiftResult = shiftExample(shift);
console.log(`Le tableau est maintenant shift ${shiftResult}`);
// Le tableau est maintenant shift 1
// Le tableau est maintenant [2, 3, 4, 5]