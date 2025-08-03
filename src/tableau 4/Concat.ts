// Explication : Fusionne deux tableaux (sans modifier les originaux).
function concatExample<T>(arr1: T[], arr2: T[]): T[] {
    return arr1.concat(arr2);
}
const concat1 = [1, 2, 3];
const concat2 = [4, 5, 6];
const concatResult = concatExample(concat1, concat2);
console.log(`Le tableau est maintenant concat ${concatResult}`);
// Le tableau est maintenant concat 1,2,3,4,5,6
