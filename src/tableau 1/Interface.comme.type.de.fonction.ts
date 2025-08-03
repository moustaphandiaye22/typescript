// Explication : L’interface peut décrire une fonction.
// Elle permet de définir une signature de fonction qui peut être utilisée pour décrire les fonctions qui doivent être implémentées par une classe.
// Elle permet également de définir des types de retour et des types d’arguments pour une fonction.
// Exemple d’utilisation d’une interface pour décrire une fonction en TypeScript

interface Calculer {
    (a: number, b: number): number;
}

const addition: Calculer = (a, b) => a + b;
const soustraction: Calculer = (a, b) => a - b;
console.log(addition(1, 2));
console.log(soustraction(1, 2)); 

