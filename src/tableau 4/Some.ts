// Explication : Vérifie si au moins un élément satisfait une condition.
function sommeExample(arr: number[]): boolean {
    return arr.some((num) => num > 10);
}
const somme = [1, 2, 3, 4, 5];
const sommeResult = sommeExample(somme);
console.log(`Le tableau est maintenant somme ${sommeResult}`);
