// Explication : TypeScript permet d'annoter une fonction.
// Exemple d'annotation de type pour une fonction
function add(a: number, b: number): number {
    return a + b;
}
// Exemple d'utilisation de la fonction
const result = add(2, 3);
console.log(result); // Affiche 5
// TypeScript permet de définir des types pour les paramètres et le retour d'une fonction.
// Cela permet de s'assurer que les types des arguments passés à la fonction sont corrects
// et que le type de retour est également correct.
function moyenne(a: number, b: number): number {
    return (a + b) / 2;
}
const moyenneResult = moyenne(4, 6);
console.log(moyenneResult); // Affiche 5
