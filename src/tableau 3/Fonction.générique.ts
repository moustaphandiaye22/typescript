// Explication : Fonction qui fonctionne avec n'importe quel type.
// Le type générique <T> permet de créer une fonction qui peut accepter n'importe quel type de données.
// Cela est utile lorsque l'on souhaite que la fonction puisse traiter différents types de données sans avoir à spécifier un type précis.
// Exemple d'utilisation du type générique en TypeScript


function identity<T>(arg: T): T {
    return arg; 
}
// Exemple d'utilisation de la fonction identity
let output1 = identity<string>("type generique , TypeScript!"); // Appel avec une chaîne de caractères
console.log(output1); // Affiche "type generique , TypeScript!"
let output2 = identity<number>(42); // Appel avec un nombre
console.log(output2); // Affiche 42