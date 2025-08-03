// Explication :reduceRight : réduit le tableau de droite à gauche  reduce (ou reduceLeft) : gauche à droite
function reduceRightExample(arr: number[]): number {
    return arr.reduceRight((acc, curr) => acc + curr, 0);
}
const reduceRight = [1, 2, 43, 4, 15];
const reduceRightResult = reduceRightExample(reduceRight);
console.log(`Le tableau est maintenant reduceRight ${reduceRightResult}`);
// Le tableau est maintenant reduceRight 15

function reduceLeftExample(arr: number[]): number {
    return arr.reduce((acc, curr) => acc + curr, 0);
}
const reduceLeft = [1, 2, 3, 4, 5];
const reduceLeftResult = reduceLeftExample(reduceLeft);
console.log(`Le tableau est maintenant reduceLeft ${reduceLeftResult}`);
// Le tableau est maintenant reduceLeft 15
