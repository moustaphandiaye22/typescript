// Explication : Crée un nom pour un type.
// Le type Alias en TypeScript permet de créer un nom pour un type existant.
// Cela est utile pour simplifier la notation des types complexes ou pour donner un nom plus significatif à un type.
// Exemple d'utilisation du type Alias en TypeScript
type Person = {
    name: string; // Propriété name de type string
    age: number; // Propriété age de type number
};
// Exemple d'utilisation du type Person
let pape: Person = {
    name: "coach aly", // Assignation de la propriété name
    age: 30 // Assignation de la propriété age
};
console.log(pape.name); // Affiche "coach aly"
console.log(pape.age); // Affiche 30