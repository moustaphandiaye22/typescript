// Explication : Tableau typé.
// En TypeScript, un tableau est une collection ordonnée d'éléments du même type.
// On peut déclarer un tableau en utilisant la syntaxe `type[]` ou `Array   <type>`.
// Exemple de déclaration d'un tableau de nombres
let nombres: number[] = [1, 2, 3, 4, 5]; 
// Exemple de déclaration d'un tableau de chaînes de caractères
let fruit: string[] = ["pomme", "banane", "orange"];
// Exemple de déclaration d'un tableau d'objets
type Personn = {
    nom: string;
    age: number;
};
let personnes: Personn[] = [
    { nom: "Alice", age: 30 },
    { nom: "Bob", age: 25 },
    { nom: "Charlie", age: 35 } 
];
// Exemple d'utilisation d'un tableau  
console.log(nombres); // Affiche [1, 2, 3, 4, 5]
console.log(fruit); // Affiche ["pomme", "banane", "orange"]
console.log(personnes); // Affiche [{ nom: "Alice", age: 30 }, { nom: "Bob", age: 25 }, { nom: "Charlie", age: 35 }]
