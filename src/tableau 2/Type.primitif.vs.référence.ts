// Explication :Primitif : copié (ex: number, string)   Référence : partagé (objet)
// En TypeScript, les types primitifs sont copiés par valeur, tandis que les types de référence sont partagés par référence.
// Les types primitifs incluent les nombres, les chaînes de caractères, les booléens, etc., et sont immuables.
// Les types de référence incluent les objets, les tableaux et les fonctions, et sont mutables.
// Lorsqu'un type primitif est assigné à une variable, une copie de la valeur est créée.
// Lorsqu'un type de référence est assigné à une variable, une référence à l'objet est créée.
// Exemple de type primitif et de type de référence en TypeScript
type Nbre = number; // Type primitif
let a: Nbre = 5;
let b: Nbre = a; // Copie de la valeur
b = 10; // Modifie b, a reste inchangé  


type Objet = { nom: string }; // Type de référence
let obj1: Objet = { nom: "aliiiii" };
let obj2: Objet = obj1; // Référence à l'objet
obj2.nom = "Breukh"; // Modifie obj2, obj1 est également modifié
console.log(obj1.nom); // Affiche : Breukh
console.log(b); // Affiche : 5
console.log(obj2.nom); // Affiche : Breukh