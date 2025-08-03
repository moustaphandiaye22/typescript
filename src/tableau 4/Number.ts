// Explication : Utilisé pour typer un tableau ou convertir une valeur.
function numberExample(arr: number[]): number[] {
    return arr.map((num) => num * 2);
}
const nombers = [1, 2, 3, 4, 5];
const numberResult = numberExample(nombers);
console.log(`Le tableau est maintenant number ${numberResult}`);
