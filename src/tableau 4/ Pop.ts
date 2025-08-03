// Explication : Supprimez le dernier élément du tableau.
function popExample(arr: number[]): number | undefined {
    return arr.pop();
}
const pop = [1, 2, 3, 4, 5];
const popResult = popExample(pop);
console.log(`Le tableau est maintenant pop ${popResult}`);
// Le tableau est maintenant pop 1,2,3,4
