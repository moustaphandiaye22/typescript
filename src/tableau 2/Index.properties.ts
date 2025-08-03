// Explication : Permet de typer des objets dynamiques.
// Le type `Index` permet de définir un objet avec des clés dynamiques.
// Il est utilisé pour créer des objets dont les clés ne sont pas connues à l'avance
// et pour assurer la sécurité des types lors de l'accès aux propriétés de ces objets.
 interface Index {
    [key: string]: any;
};  
// Exemple d'utilisation du type Index
const indexExample: Index = {
    age: 30,
    score: 100,
    height: 18
};  
// Accès aux propriétés de l'objet indexExample
console.log(indexExample.age); // Affiche : 30
console.log(indexExample.score); // Affiche : 100
console.log(indexExample.height); // Affiche : 180  

interface indexpropriete{
    [key:string]:string;
}
const indexproprieteExample:indexpropriete = {
    nom: "Moustapha",
    prenom: "Ndiaye",
    age: "30",
};
console.log(indexproprieteExample.nom); // Affiche : Moustapha
console.log(indexproprieteExample.prenom); // Affiche : Ndiaye
console.log(indexproprieteExample.age); // Affiche : 30
