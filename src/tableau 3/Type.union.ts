// Explication : Une variable peut avoir plusieurs types possibles.
// Exemple d'utilisation du type union en TypeScript
// Le type union permet à la variable value d'accepter soit une chaîne de caractères, soit un nombre.
// Cela est utile lorsque l'on souhaite que la variable puisse contenir plusieurs types de données différents.
// TypeScript permet de définir des types pour les variables, ce qui aide à détecter les erreurs de type lors de la compilation.
// Cela permet de s'assurer que les valeurs assignées aux variables sont du type attendu.   

let value: string | number; // Déclaration d'une variable de type union
value = "je suis un type union"; // Assignation d'une chaîne de caractères
console.log(value); // Affiche "je suis un type union"
value = 52; // Assignation d'un nombre
console.log(value); // Affiche 52