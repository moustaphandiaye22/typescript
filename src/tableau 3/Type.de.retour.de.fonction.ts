// Explication : On indique ce que retourne une fonction.
// Le type de retour d'une fonction en TypeScript est spécifié après les paramètres de la fonction.
// Exemple d'annotation de type pour une fonction
function additionners(a: number, b: number): number {
    return a + b;
}
// Exemple d'utilisation de la fonction
const resul = additionners(1005, 10);
console.log(resul); // Affiche 1015
function multiplication (a: number, b: number): number {
    return a * b;
}
// Exemple d'utilisation de la fonction
const resul2 = multiplication(1005, 10);
console.log(resul2); // Affiche 10050