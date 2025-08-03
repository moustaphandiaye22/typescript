// Explication : Accepte des types variés sans perdre la précision.
//une fonction générique permet de créer des fonctions qui peuvent travailler avec différents types de données.
// Les fonctions génériques sont utiles pour créer des fonctions réutilisables et flexibles.
// Elles permettent de définir des types de données lors de l'appel de la fonction afin de rendre le code plus flexible et réutilisable.
// Exemple d'utilisation d'une fonction générique en TypeScript

function lister<T>(elements: T[]): void {
    elements.forEach((element) => {
        console.log(element);
    });
}
// Exemple d'utilisation de la fonction générique lister
lister([1, 2, 3]);
lister(["a", "b", "c"]);
// console.log(" la fonction lister");
// console.log(lister([1, 2, 3])); 