// Explication : Spécifie qu’une valeur est un objet.
// Le type object en TypeScript est utilisé pour représenter une valeur qui n'est pas un type primitif (comme number, string, boolean, etc.).
// Le type object est utilisé pour représenter un objet JavaScript.
// Il peut être utilisé pour déclarer des variables qui peuvent contenir n'importe quel objet JavaScript.
// Exemple d'utilisation du type object en TypeScript
let obj: object = { name: "John", age: 30 };
console.log(obj); // Affiche { name: "John", age: 30 }
// Le type object est souvent utilisé pour les objets complexes, les tableaux, ou les fonctions.
let array: object[] = [{ name: "Alice" }, { name: "Bob" }];
console.log(array); // Affiche [{ name: "Alice" }, { name: "Bob }]
// Il est important de noter que le type object ne permet pas d'accéder aux propriétés ou
// aux méthodes de l'objet sans effectuer une assertion de type ou un type plus spécifique.
let person: object = { name: "Alice", age: 25 };
// Pour accéder aux propriétés, il est nécessaire de faire une assertion de type.
let personName: string = (person as { name: string }).name; // Assertion de type
console.log(personName); // Affiche "Alice"